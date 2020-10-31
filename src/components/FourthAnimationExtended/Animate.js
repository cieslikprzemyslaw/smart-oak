import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scaleImgOnScroll = (elem) => {
    ScrollTrigger.create({
        trigger: elem,
        start: '30%',
        end: '60%',
        onUpdate: (self) => {
            gsap.to(elem, {
                scaleX: 1 - self.progress / 10,
            });
        },
    });
};

export const pinContent = (elem) => {
    ScrollTrigger.create({
        trigger: elem,
        start: 'top',
        end: 'bottom 100%',
        markers: true,
        pin: '#fourth-animation-content',
    });
};
