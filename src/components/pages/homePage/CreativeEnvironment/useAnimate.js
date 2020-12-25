import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scaleImgOnScroll = (elem) => {
    ScrollTrigger.create({
        trigger: elem,
        start: 'top 70%',
        end: 'top',
        markers: true,
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
        start: 'top -50',
        end: 'bottom 100%',
        pin: '#fourth-animation-content',
    });
};
