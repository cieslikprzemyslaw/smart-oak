import { gsap } from 'gsap';

const animationForVideoSection = (firstElement, secondElement) => {
    const tl = gsap.timeline();

        tl.from(firstElement.current, {
            skewX: 0.01,
            transformOrigin: 'center',
            scale: 0.6,
            opacity: 0,
            duration: 3,
            delay: 1,
        })
            .to(firstElement.current, {
                skewX: 0.01,
                scale: 0.95,
                opacity: 0,
                duration: 1.5,
                delay: 2,
            })
            .from(secondElement.current.children, {
                skewX: 0.01,
                transformOrigin: 'center',
                duration: 1,
                x: '-=40',
                opacity: 0,
                stagger: 0.1,
            });
}

export { animationForVideoSection }