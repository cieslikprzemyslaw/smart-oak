import { gsap } from 'gsap';

const menuAnimation = (refElement) => {
    gsap.to(refElement.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'none',
    });
};

const showMenuChildren = (refElement) => {
    gsap.to(refElement, {
        transform: 'translateX(0)',
        opacity: 1,
        duration: 0.5,
        stagger: 0.03,
        ease: 'none',
    });
};

export { menuAnimation, showMenuChildren };
