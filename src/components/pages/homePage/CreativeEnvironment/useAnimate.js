import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// export const scaleImgOnScroll = (elem) => {
//     if (window.innerWidth > 1023) {
//         gsap.to(elem, {
//             clipPath: 'inset(0 10%)',
//             scrollTrigger: {
//                 trigger: elem,
//                 start: 'top top',
//                 end: 'bottom 20%',
//                 toggleActions: 'restart none none reverse',
//             },
//         });
//     }
// };

export const scaleImgOnScroll = (element1, element2, element3) => {
    if (window.innerWidth > 1023) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element1.current,
                start: 'top top',
                end: '+=400',
                scrub: 0.5,

                pin: false,
            },
        });

        tl.to(element2.current, { xPercent: +100 }, 0).to(element3.current, { xPercent: -100 }, 0);
    }
};
