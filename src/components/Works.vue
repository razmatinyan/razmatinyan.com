<template>
    <section id="razo-works" class="section works-section" data-scroll-section data-scroll-section-id="section2">
        <div class="container works-container" data-scroll data-scroll-speed="-6">
            <h2 class="circle prlx__item" data-move="60">
                <div class="circle-text prlx__text">
                    <span class="to-split">Works • Works • Works • Works • Works •</span>
                </div>
            </h2>
            <div class="svg-wrap">
                <div class="svg-path">
                    <svg id="mysvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.51 93.39"><g id="Слой_2" data-name="Слой 2"><g id="path"><path class="pathline" d="M444.41,24.06c-21.67-1.66-125.83-9-161.65.31C271.5,27.3,249,37.68,242.14,47.05c-4.62,6.3-9.74,23.57-6.33,30.6,2.7,5.57,12.79,14.24,29.41,14.24s19.2-5.36,23.34-9.49c3.5-3.51,5.58-12.91,6.33-17.81.58-3.81-1.53-11.35-3.56-14.63-3.45-5.57-12.54-12.06-18.07-15.56C266.42,30.07,252.8,21.12,245.31,18c-7.94-3.25-24.69-7.76-33.24-8.44C202,8.82,181.78,11,172,13.3c-7.44,1.75-21.2,8.77-28.49,11.07s-22.33,7-30.06,7.39c-9.45.48-26.09-2.9-34.55-7.12C72.05,21.22,54.24,13.57,50,10.79c-5.44-3.57-15-8.7-21.5-9.1C23.05,1.36,9.17,1.54,3,1.64"></path></g></g></svg>
                    <div class="circled-logo">
                        <img class="logo-for-path" src="@/assets/images/logo-black.svg" alt="Black R Logo">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="works-section" class="section works-section" data-scroll-section data-scroll-section-id="section3">
        <div class="container works-wrapper works-container">
            <ul class="works-list reset">
                <li
                    v-for="work in works"
                    :key="work.id"
                    class="work"
                    :class="work.name"
                >
                    <div class="work-in">
                        <a :href="work.link" class="work-link" target="_blank">
                            <div class="work-row image-row">
                                <div class="image-wrapper" :style="`background-color:${work.color}`">
                                    <img :src="getImgUrl(work.id + '.jpg')" :alt="work.name">
                                </div>
                            </div>
                            <div class="work-row name-row">
                                <h4 class="work-title">{{ work.name }}</h4>
                            </div>
                            <div class="work-row type-row">
                                <span class="work-type">{{ work.type }}</span>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </section>

</template>

<script>
import { ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default {
    name: 'Works',
    setup() {
        const works = ref([
            { id: 1, name: 'Personal', type: 'Solo', link: 'https://razmatinyan.com/', color: '#6129cb' },
            { id: 2, name: 'Zeel Portfolio', type: 'Teamwork', link: 'https://portfolio.zeelproject.com/', color: '#383838' },
            { id: 3, name: 'Zeel Blog', type: 'Teamwork', link: 'https://blog.zeelproject.com/', color: '#cfcfcf' },
            { id: 4, name: 'Toon Project', type: 'Teamwork', link: 'https://toonproject.com/', color: '#2a4383' /* #4e608d */ },
            { id: 5, name: 'Decoline', type: 'Teamwork', link: 'https://decoline.org/', color: '#49854c' },
            { id: 6, name: 'Sisters', type: 'Teamwork', link: 'https://sistersdresses.com/', color: '#956262' },
            { id: 7, name: 'Transport Arm', type: 'Solo', link: 'https://transport-arm.am/', color: '#7a3a3a' },
        ]);

        return { works }
    },
    mounted() {
        this.$initSmoothScroll(ScrollTrigger);
        this.$addTextCircle('#razo-works', 9);

        gsap.to('#razo-works .circle', {
            scrollTrigger: {
                trigger: '#razo-works',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
            rotation: 180,
        });

        gsap.timeline({defaults: {duration: 1, ease:'none' },
            scrollTrigger: {
                trigger: "#razo-works",
                scrub: 1,
                start: "100px 100%",
                end: "100% 30%",
        }})
        .from(".circled-logo", {motionPath: {path: ".pathline", align: ".pathline", autoRotate: 180, offsetX:0, offsetY:0 }})

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector('.work'),
                toggleActions: 'play',
                start: "top center",
                end: "center bottom",
            }
        });
        tl.from('#works-section .work', {
            y: "80px",
            opacity: 0,
            stagger: .25,
            ease: "all .7s cubic-bezier(.7, 0, .3, 1)",
            duration: .4,
            delay: 0
        });
    },
    unmounted() {
        this.$destroySmoothScroll();
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/websites/'+pic)
        }
    }
}
</script>

<style scoped>
#razo-works .svg-wrap {
    position: absolute;
    top: 100px;
    right: 100px;
    width: 60%;
}
#razo-works .svg-path {
    position: relative;
}
#razo-works .svg-path > svg {
    position: relative;
    display: block;
    width: 100%;
}
#razo-works .circled-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: var(--white);
    border-radius: 50%;
}
#razo-works .logo-for-path {
    width: 40px;
    margin-right: 5px;
    user-select: none;
}
.pathline{fill:none;stroke:var(--lightgray);stroke-miterlimit:10;stroke-width:3px;}.pathline{stroke-dasharray:3.99 2;}

@media only screen and (max-width: 769px) {
    #razo-works .svg-wrap {
        top: 24%;
        right: 10%;
        width: 50%;
    }
    #razo-works .svg-path > svg {
        width: 450px;
    }
    #works-section .works-list > .work {
        flex-basis: 100%;
    }
    #works-section .work .work-row.image-row .image-wrapper {
        padding-top: 56%;
    }
}

@media only screen and (max-width: 480px) {
    #razo-works .svg-wrap {
        top: 24%;
        right: unset;
        width: 100%;
    }
    #works-section .work .work-row.image-row .image-wrapper[data-v-30d17682],
    #works-section .work.Personal .work-row.image-row .image-wrapper {
        padding-top: 1%;
    }
}
</style>