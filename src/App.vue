<template>
    <Loader />
    
    <main id="main-container" data-scroll-container>
        <template v-if="!refreshComponent">
            <Background />
        </template>

        <Navigation />

        <HeroSection />
        
        <About />

        <Works />

        <Contact />

    </main>
    
    <div class="hover-circle">
        <div class="hover-circle-wrap">
            <div class="hover-circle-in">Visit</div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from '@/components/Loader.vue'
import Navigation from '@/components/Navigation.vue'
import Background from '@/components/Background.vue'
import HeroSection from '@/components/HeroSection.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Contact from '@/components/Contact.vue'
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'App', components: { Loader, Navigation, Background, HeroSection, About, Works, Contact },
    data() {
        return {
            refreshInterval: null,
            refreshComponent: false,
        }
    },
    mounted() {
        let animElems = document.querySelectorAll('.razo-hero-animation');
        animElems.forEach(elem => {
            elem.style.transform = 'translateY(100px)';
            elem.style.opacity = '0';
        });

        this.$scroll.stop();
        
        this.$nextTick(() => {
            
            var tl = gsap.timeline();

            tl.to('html', {
                "--pseudo-width": '100%',
                duration: 2,
                delay: .3
            })

            tl.to('#loading h2 .letter', {
                ease: 'Power3.easeOut',
                y: 0,
                stagger: 0.1,
                duration: 2,
                delay: 0
            }, '-=1.6');

            tl.to('#loading h2 .letter', {
                ease: 'Power3.easeOut',
                scale: 0,
                rotate: '-35',
                stagger: 0.05,
                duration: .8,
                delay: 0
            })

            tl.to('#loading', {
                ease: 'Power4.easeInOut',
                duration: 1,
                top: "calc(-100%)",
                delay: 0,
                onComplete: () => {
                    document.querySelector('#loading').style.opacity = 0
                }
            }, '-=.4');

            tl.from('#main-container', {
                ease: 'Power4.easeOut',
                top: '80%',
                duration: .8,
                onComplete: () => {
                    document.querySelector('#main-container').style.position = 'initial';
                    this.$initSmoothScroll(ScrollTrigger);
                    this.$scroll.start();
                    const scrollbar = document.querySelectorAll('.c-scrollbar');

                    if (scrollbar.length > 1) {
                        scrollbar[0].remove();
                    }
                }
            }, '-=.7');

            tl.to('.razo-hero-animation', {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: "power3.out",
                duration: .4,
                delay: 0,
            });

        });
        
        this.initButtonsInteractions();
        this.initParallaxInteractions();
        this.initStickyButton();

        this.refreshInterval = setInterval(() => {
            this.refreshComponent = true;
            setTimeout(() => {
                this.refreshComponent = false;
            }, 1);
        }, 60000);

        console.log("%c © Razmik Matinyan ","background: linear-gradient(to right, #455CE9, #334BD3); padding:5px; font-size: 12px; color: #ffffff")
        console.log("%c Website is made by Razmik Matinyan ","background: linear-gradient(to right, #455CE9, #334BD3); padding:5px; font-size: 12px; color: #ffffff")
        console.log("%c Some UI elements and ideas are inspired and taken from https://dennissnellenberg.com/ ","background: linear-gradient(to right, #455CE9, #334BD3); padding:5px; font-size: 12px; color: #ffffff")
    },
    unmounted() {
        this.$destroySmoothScroll();
        clearInterval(this.refreshInterval);
    },
    methods: {
        initButtonsInteractions() {
            var btn = document.querySelectorAll('.btn');
            btn.forEach(item => {
                item.addEventListener('mouseenter', function () {
                    gsap.to(this.querySelector(".btn-fill"), {
                        startAt: { y: "76%" },
                        y: "0%",
                        ease: 'Power2.easeInOut'
                    });
                });
                item.addEventListener('mouseleave', function () {
                    gsap.to(this.querySelector(".btn-fill"), {
                        y: "-76%",
                        ease: 'Power2.easeInOut'
                    });
                });
            })
        },
        initParallaxInteractions() {
            if (window.innerWidth > 1024) {
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
        initStickyButton() {

            if ( window.innerWidth > 540 ) {
                var cursorSpan = document.querySelector(".hover-circle");
    
                var posXSpan = 0
                var posYSpan = 0
                var mouseX = 0
                var mouseY = 0
    
                document.addEventListener("mousemove", function (e) {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                });
    
                gsap.to({}, 0.01, {
                    repeat: -1,
                    onRepeat: function () {
                        posXSpan += (mouseX - posXSpan) / 4;
                        posYSpan += (mouseY - posYSpan) / 4;
                        gsap.set(cursorSpan, {
                            css: {
                                left: posXSpan,
                                top: posYSpan
                            }
                        });
                    }
                });
    
                document.querySelectorAll('#works-section .work-link').forEach(item => {
                    item.addEventListener('mouseenter', function () {
                        document.querySelector('.hover-circle').classList.add('active');
                    });
    
                    item.addEventListener('mouseleave', function () {
                        document.querySelector('.hover-circle').classList.remove('active');
                    });
    
                    item.addEventListener('mousedown', function (e) {
                        document.querySelector('.hover-circle').classList.add('clicked');
                    });
    
                    item.addEventListener('mouseup', function () {
                        document.querySelector('.hover-circle').classList.remove('clicked');
                    });
                });
            }
        }
    }
}
</script>