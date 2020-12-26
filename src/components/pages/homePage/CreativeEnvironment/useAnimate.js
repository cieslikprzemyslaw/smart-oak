import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scaleImgOnScroll = (elem) => {
    ScrollTrigger.create({
        trigger: elem,
        start: 'top 0%',
        toggleActions: "restart none reverse reverse",
        onUpdate: () => {
            gsap.to(elem, {
                clipPath: "inset(0 10%)",
            });
        },
    });
};

export const pinContent = (elem) => {
    ScrollTrigger.create({
        trigger: elem,
        start: 'top -50',
        end: 'bottom 100%',
        pin: '#fourth-animation-content',
    });
};
