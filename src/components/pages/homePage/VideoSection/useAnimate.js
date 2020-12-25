import { gsap } from 'gsap';

const animationForVideoSection = (firstElement, secondElement) => {
    const tl = gsap.timeline();

    tl.from(firstElement.current, {
        skewX: 0.01,
        transformOrigin: 'center',
        scale: 0.87,
        opacity: 0.35,
        duration: 1,
        delay: 0.5,
    })
        .to(firstElement.current, {
            skewX: 0.01,
            scale: 0.97,
            opacity: 1,
            duration: 0.6,
            delay: 0.5,
        })
        .from(secondElement.current.children, {
            skewX: 0.01,
            transformOrigin: 'center',
            duration: 1,
            x: '-=40',
            opacity: 0,
            stagger: 0.1,
        });
};

export { animationForVideoSection };
