<template>
    <section id="razo-about" class="section" data-scroll-section data-scroll-section-id="section1">
        <div class="container about-container container-flex about-container">
            <div class="about-left" data-scroll data-scroll-speed="2">
                <p class="razo-about-text first-text">
                    I am 20 years old Web Developer from Armenia. I work at Zeel Project for 2 years and i have worked on many projects with our team. I developed websites with different types, such as: Commercial websites, Web Platforms, Landing pages and etc.
                </p>
                <p class="razo-about-text second-text">
                    Here are the tools that i use in projects:
                </p>
                <ul class="razo-list">
                    <li class="razo-about-text">HTML, CSS</li>
                    <li class="razo-about-text">JavaScript, jQuery, GSAP, Vue JS</li>
                    <li class="razo-about-text">PHP (CMS DataLife Engine)</li>
                    <li class="razo-about-text">MySQL</li>
                </ul>
            </div>
            <div class="about-right" data-scroll data-scroll-speed="-5">
                <h2 class="circle prlx__item" data-move="60">
                    <div class="circle-text prlx__text">
                        <span class="to-split">About Me • About Me • About Me • About Me •</span>
                    </div>
                </h2>
            </div>
        </div>
        <div class="blob-1" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2">
            <img src="@/assets/blobs/blob-1.svg" alt="Blob 1">
        </div>
        <div class="blob-2" data-scroll data-scroll-speed="4">
            <img src="@/assets/blobs/blob-2.svg" alt="Blob 2">
        </div>
    </section>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'About',
    mounted() {
        this.$initSmoothScroll(ScrollTrigger);
        this.initWordsSplit();
        this.initScrollTrigger();
        this.$addTextCircle('#razo-about', 8.3);

        gsap.to('#razo-about .circle', {
            scrollTrigger: {
                trigger: '#razo-about',
                start: 'top bottom',
                end: 'bottom -1000px',
                scrub: true,
            },
            rotation: 180,
        });
    },
    unmounted() {
        this.$destroySmoothScroll();
    },
    methods: {
        initWordsSplit() {
            var toSplit = document.querySelectorAll(".razo-about-text");
            for (var i = 0; i < toSplit.length; i++) {
                var word = toSplit.item(i);
                word.innerHTML = word.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="prlx__item"><span class="splited prlx__text"><span class="splited-in">$2</span></span></span>');
            }

            var blueWords = document.querySelectorAll('.first-text .splited-in');
            blueWords.forEach(item => {
                if ( item.innerHTML === '20' ) {
                    item.style.color = '#334BD3'
                }

                if ( item.innerHTML === 'Armenia.' ) {
                    item.style.color = '#334BD3'
                    item.innerHTML = "<a style='color: #334BD3' href='https://en.wikipedia.org/wiki/Armenia' target='_blank'>" + item.innerHTML + "</a>"
                }

                if ( item.innerHTML === 'Zeel' || item.innerHTML === 'Project' ) {
                    item.style.color = '#334BD3'
                    item.innerHTML = "<a style='color: #334BD3' href='https://zeelproject.com' target='_blank'>" + item.innerHTML + "</a>"
                }
            })
        },
        initScrollTrigger() {
            let triggerElement = document.querySelector('#razo-about');
            let animTexts = document.querySelectorAll(".razo-about-text")
            // animTexts = Array.from(animTexts);
            // animTexts.reverse();
            animTexts.forEach(function (item, index) {
                let targetElement = item.querySelectorAll(".razo-about-text .splited-in");

                var tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement,
                        toggleActions: 'play none none reset',
                        start: "50px 100%",
                        end: "100% 0%",
                    }
                });
                tl.from(targetElement, {
                    y: "100%",
                    stagger: .02 * ( index / index * 2 ),
                    ease: "power3.out",
                    duration: 1,
                    delay: .2
                });
		    });
        }
    }
}
</script>