import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scaleImgOnScroll = (elem) => {
    if (window.innerWidth > 1023) {
        gsap.to(elem, {
            clipPath: 'inset(0 10%)',
            scrollTrigger: {
                trigger: elem,
                start: 'top top',
                end: 'bottom 20%',
                toggleActions: 'restart none none reverse',
            },
        });
    }
};

export const pinContent = (elem) => {
    ScrollTrigger.create({
        trigger: elem,
        start: 'top -50',
        end: 'bottom 100%',
        pin: '#fourth-animation-content',
    });
};
