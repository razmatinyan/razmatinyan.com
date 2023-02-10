import LocomotiveScroll from 'locomotive-scroll';

export default {
    install(app, options) {
        let scroll;

        app.config.globalProperties.$initSmoothScroll = function(ScrollTrigger) {
            scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smartphone: {
                    smooth: true,
                },
                tablet: {
                    smooth: true,
                },
            });

            scroll.stop();

            window.onresize = scroll.update();
            
            scroll.on("scroll", () => ScrollTrigger.update());

            ScrollTrigger.scrollerProxy('[data-scroll-container]', {
                scrollTop(value) {
                    if ( value ) {
                        return scroll.scrollTo(value, 0, 0)
                    } else {
                        return scroll.scroll.instance.scroll.y;
                    }
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                },
                pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
            });
            ScrollTrigger.defaults({
                scroller: document.querySelector('[data-scroll-container]'),
            });
            
            const scrollbar = document.querySelectorAll('.c-scrollbar');

            if (scrollbar.length > 1) {
                scrollbar[0].remove();
            }

            ScrollTrigger.addEventListener('refresh', () => scroll.update());

            ScrollTrigger.refresh();

            app.config.globalProperties.$scroll = scroll;
        }

        app.config.globalProperties.$destroySmoothScroll = function() {
            this.$scroll.destroy();
        }
    }
}