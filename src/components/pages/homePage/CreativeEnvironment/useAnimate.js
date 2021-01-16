import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scaleImgOnScroll = (elem) => {
    if (window.innerWidth > 1023) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: elem,
                start: '-25%',
                end: '+=400',
                scrub: 0.8,
            },
        });
        tl.to(elem, {
            clipPath: 'inset(0 0%)',
            ease: 'ease-in-out',
        })
            .to(elem, {
                clipPath: 'inset(0 .5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 1%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 1.5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 2%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 2.5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 3%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 3.5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 4%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 4.5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 5.5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 6%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 6.5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 7%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 7.5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 8%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 8.5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 9%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 9.5%)',
                ease: 'ease',
            })
            .to(elem, {
                clipPath: 'inset(0 10%)',
                ease: 'ease',
            });
    }
};
