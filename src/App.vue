<template>
    <main id="main-container" data-scroll-container>
        <template v-if="!refreshComponent">
            <Background />
        </template>

        <HeroSection />
        
        <About />

        <Works />

    </main>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from '@/components/Background.vue'
import HeroSection from '@/components/HeroSection.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'App', components: { Background, HeroSection, About, Works },
    data() {
        return {
            refreshInterval: null,
            refreshComponent: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.$initSmoothScroll(ScrollTrigger);
            this.$scroll.init();
        }, 1000);
        this.initButtonsInteractions();
        this.initParallaxInteractions();

        this.refreshInterval = setInterval(() => {
            this.refreshComponent = true;
            setTimeout(() => {
                this.refreshComponent = false;
            }, 1);
        }, 60000);
    },
    unmounted() {
        this.$destroySmoothScroll();
        clearInterval(this.refreshInterval);
    },
    methods: {
        initButtonsInteractions() {
            var btn = document.querySelector('.btn');
            btn.addEventListener('mouseenter', function () {
                gsap.to(this.querySelector(".btn-fill"), {
                    startAt: { y: "76%" },
                    y: "0%",
                    ease: 'Power2.easeInOut'
                });
            });
            btn.addEventListener('mouseleave', function () {
                gsap.to(this.querySelector(".btn-fill"), {
                    y: "-76%",
                    ease: 'Power2.easeInOut'
                });
            });
        },
        initParallaxInteractions() {
            if (window.innerWidth > 540) {
	            var move = 20;
                var moveText = 10;
	            var prlxs = document.querySelectorAll('.prlx__item');

                function moveprlx(event) {
                    var prlxButton = event.currentTarget;
                    var bounding = prlxButton.getBoundingClientRect();
                    var prlxsMove = prlxButton.getAttribute("data-move") ?? move;
                    var prlxsMoveText = prlxButton.getAttribute("data-move-text") ?? moveText;
    
                    gsap.to(prlxButton, {
                        x: (((event.clientX - bounding.left) / prlxButton.offsetWidth) - 0.7) * prlxsMove,
                        y: (((event.clientY - bounding.top) / prlxButton.offsetHeight) - 0.7) * prlxsMove,
                        ease: "power3.easeOut"
                    });
                    gsap.to(this.querySelector(".prlx__text"), {
                        x: (((event.clientX - bounding.left) / prlxButton.offsetWidth) - 0.7) * prlxsMoveText,
                        y: (((event.clientY - bounding.top) / prlxButton.offsetHeight) - 0.7) * prlxsMoveText,
                        ease: "power3.easeOut"
                    });
                }

                prlxs.forEach((prlx) => {
                    prlx.addEventListener('mousemove', moveprlx);
                    prlx.addEventListener('mouseleave', function (event) {
                        gsap.to(event.currentTarget, {
                            x: 0,
                            y: 0,
                            ease: "elastic.easeOut"
                        });
                        gsap.to(this.querySelector(".prlx__text"), {
                            x: 0,
                            y: 0,
                            ease: "elastic.easeOut"
                        });
                    });
                });
            }
        },
    }
}
</script>