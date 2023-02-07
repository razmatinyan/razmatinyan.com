<template>
    <div class="btn-burger hamburger" @click="MenuHandle">
        <div class="btn prlx__item" data-move="40" data-move-text="20">
            <div class="btn-fill"></div>
            <div class="btn-text prlx__text">
                <div class="btn-bars"></div>
                <div class="btn-text-inner"></div>
            </div>
        </div>
    </div>
    <div class="overlay" @click="MenuHandle"></div>
    <nav class="navigation">
        <div class="nav-inner">
            <ul class="links-wrap">
                <li class="link-li">
                    <span class="link prlx__item" data-move="30" data-move-text="20" @click="MenuScrollTo(0, 0, 0)">
                        <div class="btn-text">
                            <div class="btn-text-inner prlx__text">Home</div>
                        </div>
                    </span>
                </li>
                <li class="link-li">
                    <span class="link prlx__item" data-move="30" data-move-text="20" @click="MenuScrollTo('#razo-about', 0, 0)">
                        <div class="btn-text">
                            <div class="btn-text-inner prlx__text">About</div>
                        </div>
                    </span>
                </li>
                <li class="link-li">
                    <span class="link prlx__item" data-move="30" data-move-text="20" @click="MenuScrollTo('#works-section', 0, 0)">
                        <div class="btn-text">
                            <div class="btn-text-inner prlx__text">Works</div>
                        </div>
                    </span>
                </li>
                <li class="link-li">
                    <span class="link prlx__item" data-move="30" data-move-text="20" @click="MenuScrollTo('#razo-contact', 0, 0)">
                        <div class="btn-text">
                            <div class="btn-text-inner prlx__text">Contact</div>
                        </div>
                    </span>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    mounted() {
        document.addEventListener('keydown', (e) => {
            if ( e.code === 'Escape' && document.querySelector(".hamburger").classList.contains("active") ) {
                this.MenuHandle();
            }
        })
    },
    methods: {
        MenuHandle() {
            if (document.querySelector(".hamburger").classList.contains("active")) {
                document.querySelector(".hamburger").classList.remove("active");
                document.querySelector("main").classList.remove("nav-active");
                this.$scroll.start();
            } else {
                document.querySelector(".hamburger").classList.add("active");
                document.querySelector("main").classList.add("nav-active");
                this.$scroll.stop();
            }
        },
        MenuScrollTo(block) {
            this.$scroll.scrollTo(block, 0, 0);
            this.MenuHandle();
            return false;
        }
    },
};
</script>

<style scoped>
.hamburger {
    position: fixed;
    top: calc(var(--gap-padding) / 2);
    right: calc(var(--gap-padding) / 2);
    transition: transform 0.4s cubic-bezier(0.36, 0, 0.66, 0);
    transform: translateY(0%) scale(1);
    z-index: 500;
}
.hamburger .btn {
    width: clamp(4em, 5vw, 5em);
    height: clamp(4em, 5vw, 5em);
    background: #161616;
    border-radius: 50%;
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2);
}
.hamburger .btn-bars {
    position: absolute;
    width: 28%;
    height: 8%;
    opacity: 1;
}
.hamburger .btn-bars::before,
.hamburger .btn-bars::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    height: 1px;
    width: 100%;
    transform: translate(-50%, -50%);
    background: #fff;
    transition: var(--animation-fast);
}
.hamburger .btn-bars::before {
    top: 0;
}
.hamburger .btn-bars::after {
    top: 100%;
}
.hamburger.active .btn-bars::before {
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
}
.hamburger.active .btn-bars::after {
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0;
    transition: opacity .8s cubic-bezier(.7, 0, .2, 1);
    z-index: 498;
    pointer-events: none;
    will-change: opacity;
}
.nav-active .overlay {
    opacity: .5;
    pointer-events: all;
}
.navigation {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background: var(--black-dark);
    z-index: 499;
    transform: translate(calc(100% + 6vw), 0);
    transition: transform .8s cubic-bezier(.7, 0, .2, 1);
    will-change: transform;
}
.nav-active .navigation {
    transform: translate(0,0);
}
.navigation .nav-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 10vh 7.5vw;
    position: relative;
    transform: translate(0,0);
    transition: all .6s cubic-bezier(.7, 0, .2, 1);
    will-change: transform;
}
.navigation .nav-inner  {
    transform: translate(0,0);
}
.navigation .links-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.navigation .link-li {
    transform: translate(15vw,0);
    transition: all .8s cubic-bezier(.7, 0, .2, 1);
    will-change: transform;
}
.navigation .link-li:nth-child(2) {transition-delay: .03s;}
.navigation .link-li:nth-child(3) {transition-delay: .06s;}
.navigation .link-li:nth-child(4) {transition-delay: .09s;}
.nav-active .navigation .link-li {
    transform: translate(0,0);
}
.navigation .link {
    position: relative;
    display: block;
    cursor: pointer;
}
.navigation .link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 85%;
    height: 1px;
    display: block;
    background: #fff;
    transform: translate(-50%, -50%) scale(0);
    transition: var(--animation-fast);
    will-change: transform;
}
.navigation .link:hover::after {
    transform: translate(-50%, -50%) scale(1);
}
.navigation .link .btn-text {
    position: relative;
    padding: 0 calc(var(--gap-padding) / 2);
    color: #fff;
}
.navigation .link .btn-text .btn-text-inner {
    font-size: 3em;
    line-height: 1.4;
}

@media only screen and (max-width: 769px) {
    .navigation {
        width: 100vw;
    }
    .navigation .links-wrap {
        align-items: center;
    }
    .navigation .link .btn-text .btn-text-inner {
        font-size: 2.3em;
    }
}
</style>