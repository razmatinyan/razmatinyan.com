<template>
    <section id="razo-hero" data-scroll-section data-scroll-section-id="section0">
            <div class="container hero-container" data-scroll data-scroll-speed="3">
                <span class="hello-text razo-hero-animation">Hi, my name is</span>
                <h1 class="razo-title">
                    <span class="title-item">
                        <span class="razo-hero-animation">
                            Razmik
                        </span>
                    </span>
                    <span class="title-item">
                        <span class="razo-hero-animation">
                            Matinyan
                        </span>
                    </span>
                </h1>
                <p class="razo-about razo-hero-animation">
                    I create and develop websites with cool animations and interactions. Let's start work together!
                    <!-- I create and develop websites. -->
                </p>
                <div class="razo-contact razo-hero-animation">
                    <button class="btn bg-blue prlx__item" @click="ToBlock('#razo-contact', 3000)">
                        <div class="btn-fill"></div>
                        <span class="btn-text minwidth">
                            <span class="btn-text-inner prlx__text">
                                Write Me
                            </span>
                        </span>
                    </button>
                </div>
            </div>
    </section>
</template>

<script>
import gsap from 'gsap'

export default {
    name: 'HeroSection',
    // setup() {
    //     const beforeEnter = (el) => {
            
    //     }
    //     const enter = (el) => {
    //         let tl = gsap.timeline();
    //         let animElems = document.querySelectorAll('.razo-hero-animation');
    //         animElems = Array.from(animElems);
    //         animElems.reverse();
    //         animElems.forEach((elem, index) => {
    //             tl.from(elem, {
    //                 y: 100,
    //                 opacity: 0,
	// 				ease: "power3.out",
	// 				duration: .4,
	// 				delay: 0,
    //             }, "=-.1")
    //         });
    //     }

    //     return { beforeEnter, enter }
    // },
    methods: {
        ToBlock(block, duration) {
            this.$scroll.scrollTo(block, {
                duration: duration
            })
        }
    }
}
</script>