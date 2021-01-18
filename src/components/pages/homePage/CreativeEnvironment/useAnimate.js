import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scaleImgOnScroll = (elem) => {
    if (window.innerWidth > 1023) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: elem,
                start: '-20% top',
                end: '20% top',
                scrub: 1,
            },
        });
        tl.to(elem, {
            clipPath: 'inset(0 10%)',
        });
    }
};
