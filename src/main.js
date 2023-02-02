import { createApp } from 'vue'
import App from './App.vue'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import smoothScroller from '@/utils/scroll'
gsap.registerPlugin(ScrollTrigger);
import TextCircle from '@/utils/textCircles'
import '@/assets/font.css'
import '@/assets/styles.css'
import '@/assets/media.css'
import '@/assets/locomotive-scroll.css'

const app = createApp(App);

app.use(smoothScroller).use(TextCircle).mount('#raz');