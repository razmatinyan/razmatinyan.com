<template>
    <footer
        id="razo-contact"
        class="section contact-section"
        data-scroll-section
        data-scroll-section-id="section4"
    >
        <div
            class="container contact-container"
            data-scroll
            data-scroll-speed="-4"
        >
            
            <h2 class="form-title">Let's start <br> work together</h2>
            <div class="circle prlx__item" data-move="60">
                <div class="circle-text prlx__text">
                    <span class="to-split">Contact • Contact • Contact • Contact •</span>
                </div>
            </div>

            <div class="form-wrapper">
                <div class="form-left">
                    <form
                        id="razo-form"
                        action="https://formspree.io/f/xrgvewgr"
                        method="POST"
                    >
                        <div class="form-row contact-animation">
                            <label>What's you name?</label>
                            <input type="text" class="field" name="name" required  placeholder="Razmik Matinyan *" />
                        </div>
                        <div class="form-row contact-animation">
                            <label>What's your email?</label>
                            <input type="email" class="field" name="email" required placeholder="razmatinyan28@gmail.com *" />
                        </div>
                        <div class="form-row contact-animation">
                            <label>Your message</label>
                            <textarea type="text" class="field" name="message" rows="7" required placeholder="Hello, can you help me with... *"></textarea>
                        </div>
                        <div class="form-button">
                            <div class="button-wrapper" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                                <button id="razo-form-button" class="btn bg-blue prlx__item" data-move="50" data-move-text="30">
                                    <div class="btn-fill"></div>
                                    <span class="btn-text">
                                        <span class="btn-text-inner prlx__text">
                                            Send
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="form-right">
                    <h3 class="contact-animation">Contact Details</h3>
                    <ul class="link-list">
                        <li class="link contact-animation">
                            <a href="mailto:razmatinyan28@gmail.com" class="prlx__item">
                                <span class="btn-text prlx__text">
                                    <span class="btn-text-inner">razmatinyan28@gmail.com</span>
                                </span>
                            </a>
                        </li>
                        <li class="link contact-animation">
                            <a href="tel:+37498109918" class="prlx__item">
                                <span class="btn-text prlx__text">
                                    <span class="btn-text-inner">+374 98 109 918</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <h3 class="contact-animation">Social</h3>
                    <ul class="link-list">
                        <li class="link contact-animation">
                            <a href="https://github.com/razmatinyan" class="prlx__item" target="_blank">
                                <span class="btn-text prlx__text">
                                    <span class="btn-text-inner">Github</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    
    <div class="footer-bottom" data-scroll-section data-scroll-section-id="section5">
        <p>© Razmik Matinyan</p>
    </div>
</template>

<script>
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Contact",
    mounted() {
        this.$initSmoothScroll(ScrollTrigger);
        this.$addTextCircle('#razo-contact', 9);

        document
            .getElementById("razo-form")
            .addEventListener("submit", this.FormHandler);

        gsap.to('#razo-contact .circle', {
            scrollTrigger: {
                trigger: '#razo-contact',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
            rotation: 180,
        });

        document.querySelectorAll('.field').forEach((field, i) => {
            field.addEventListener('input', function() {
                if ( this.value !== '' ) this.previousSibling.style.opacity = '.4'
                else this.previousSibling.style.opacity = '1'
            });
        });

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector('#razo-contact'),
                toggleActions: 'play none none reverse',
                start: "top center",
                end: "center bottom",
            }
        });
        tl.from('#razo-contact .contact-animation', {
            y: "100px",
            opacity: 0,
            stagger: .25,
            ease: ".7s cubic-bezier(.7, 0, .3, 1)",
            duration: .4,
            delay: 0
        });

    },
    methods: {
        async FormHandler(event) {
            event.preventDefault();

            var form = document.getElementById("razo-form");
            var data = new FormData(event.target);

            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                if (response.ok) {
                    Swal.fire(
                        "Thank you!",
                        "I will answer you as soon as possible!",
                        "success"
                    );
                    form.reset();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "There was a problem submitting your form!",
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There was a problem submitting your form!",
                });
            });
        },
    },
};
</script>

<style scoped>
#razo-contact {
    padding-top: calc(var(--section-padding) * 2);
    padding-bottom: calc(var(--section-padding) * 2);
}
#razo-contact .circle {
    position: absolute;
    top: 0;
    right: 100px;
}

#razo-contact .form-wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
}
#razo-contact .form-left {
    position: relative;
    display: block;
    width: 70%;
    padding-right: calc(var(--container-padding) / 2);
}
#razo-contact .form-right {
    position: relative;
    display: block;
    width: 30%;
    padding-left: calc(var(--container-padding) / 2);
}

#razo-contact .form-row:first-child {
    border-top: 1px solid rgb(100 100 100 / 50%);
}
#razo-contact .form-row {
    position: relative;
    display: block;
    padding: 0 1.3em;
    width: 100%;
    font-size: 1.5em;
    border-bottom: 1px solid rgb(100 100 100 / 50%);
}
#razo-contact label {
    display: block;
    width: 100%;
    padding-top: 1.5em;
    margin-bottom: 0;
    color: var(--black);
    font-weight: 500;
    transition: all .2s ease-in-out;
}
#razo-contact .field {
    display: block;
    width: 100%;
    padding: 1em 0 2em 0;
    background: transparent;
    color: var(--black);
    font-size: 1em;
    font-weight: 500;
    border: 0;
    border-radius: 0;
    appearance: none;
    box-shadow: none;
}
#razo-contact textarea.field {
    resize: none;
}
#razo-contact .button-wrapper {
    position: relative;
}
#razo-contact .form-button {
    display: flex;
    justify-content: flex-end;
    transform: translate(0, -50%);
}
#razo-contact #razo-form-button {
    width: clamp(7em, 10vw, 9em);
    height: clamp(7em, 10vw, 9em);
    border-radius: 100px;
}

@media only screen and (max-width: 769px) {
    #razo-contact .form-row {
        padding: 0 0 0 1em;
        font-size: 1.1em;
    }
}
@media only screen and (max-width: 680px) {
    #razo-contact .circle {
        right: 14px;
        opacity: .5;
    }
}
@media only screen and (max-width: 480px) {
    #razo-contact .field[data-v-cf6573c0] {
        font-size: .8em;
    }
}

#razo-contact .form-right h3 {
    font-weight: 500;
    font-size: .9em;
    margin-bottom: 1em;
    color: var(--black);
}
#razo-contact .form-right .btn-text {
    justify-content: flex-start;
    padding: 0;
}
#razo-contact .form-right .link-list {
    margin-bottom: 2em;
}
#razo-contact .form-right .link-list:last-child {
    margin-bottom: 0;
}
#razo-contact .form-right .link-list > .link {
    margin-bottom: 0.2rem;
}
#razo-contact .form-right .link-list > .link:last-child {
    margin-bottom: 0;
}
#razo-contact .form-right .link-list > .link > a {
    font-size: 1.3em;
    text-decoration: none;
    will-change: transform;
}
#razo-contact .form-right .link-list > .link > a span {
    will-change: transform;
}
#razo-contact .form-right .link .btn-text {
    position: relative;
}
#razo-contact .form-right .link .btn-text::before {
    content: "";
    position: absolute;
    top: 55%;
    left: -13px;
    display: block;
    width: 6px;
    height: 6px;
    background: var(--black);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: var(--animation-fast);
    will-change: transform;
}
#razo-contact .form-right .link:hover .btn-text::before {
    transform: translate(-50%, -50%) scale(1);
}
@media only screen and (max-width: 1200px) {
    #razo-contact .form-right {
        padding-top: calc(var(--container-padding) / 2);
    }
}
@media only screen and (max-width: 1024px) {
    #razo-contact .form-left {
        width: 100%;
        order: 2;
    }
    #razo-contact .form-right {
        width: 100%;
        order: 1;
        padding-bottom: var(--container-padding);
    }
}
@media only screen and (max-width: 600px) {
    #razo-contact .form-right .link-list > .link > a {
        font-size: 1em;
    }
}
@media only screen and (max-width: 480px) {
    #razo-contact[data-v-cf6573c0] {
        padding-top: calc(var(--section-padding) * 4);
    }
}

.footer-bottom {
    background: #161616;
    padding: 10px;
    color: #fff;
    font-size: .8rem;
}
</style>