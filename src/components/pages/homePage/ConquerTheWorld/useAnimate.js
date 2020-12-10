import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const conquerTheWorldAnimation = (element1, element2, element3, element4) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: element1.current,
            start: '-20%',
            end: '+=400',
            scrub: 0.5,

            pin: false,
        },
    });

    tl.to(element2.current, { xPercent: -100 }, 0)
        .to(element3.current, { xPercent: +100 }, 0)

        .fromTo(element4.current, { opacity: 0, ease: 'none' }, { opacity: 1, ease: 'none' });
};

export { conquerTheWorldAnimation };
