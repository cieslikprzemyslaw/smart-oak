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

export const showContent = (elem) => {
    ScrollTrigger.create({
        trigger: elem,
        start: 'top 90%',
        onEnter: () => (document.querySelector('#fourth-animation-content').style.diplay = 'block'),
        onEnterBack: () =>
            (document.querySelector('#fourth-animation-content').style.diplay = 'none'),
        onLeave: () => (document.querySelector('#fourth-animation-content').style.diplay = 'none'),
        onLeaveBack: () =>
            (document.querySelector('#fourth-animation-content').style.diplay = 'block'),
    });
};
