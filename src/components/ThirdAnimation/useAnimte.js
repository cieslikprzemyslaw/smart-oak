import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useAnimate = (type, ref) => {
    useEffect(() => {
        const animation = animationByType(type);
        ScrollTrigger.create({
            trigger: ref.current,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                animation(self, ref);
            },
        });
    }, [ref, type]);
};

const animationByType = (type = 'rightToLeft') => {
    switch (type) {
        case 'rightToLeft':
            return rightToLeft;
        case 'zoomOut':
            return zoomOut;
        default:
            return zoomIn;
    }
};

const zoomIn = (self, ref) => {
    gsap.to(ref.current, {
        scale: 1 + 0.3 * self.progress,
    });
};

const zoomOut = (self, ref) => {
    gsap.to(ref.current, {
        scale: 1.3 - 0.3 * self.progress,
    });
};

const rightToLeft = (self, ref) => {
    gsap.to(ref.current, { x: -(250 * self.progress) });
};

export default useAnimate;
