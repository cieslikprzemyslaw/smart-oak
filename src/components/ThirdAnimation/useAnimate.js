import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useAnimate = (type, ref) => {
    useEffect(() => {
        const animation = animationByType(type);
        ScrollTrigger.create({
            trigger: ref.current,
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
        case 'leftToRight':
            return leftToRight;
        default:
            return leftToRight;
    }
};

const leftToRight = (self, ref) => {
    gsap.to(ref.current, { x: -(200 * self.progress) });
};

const rightToLeft = (self, ref) => {
    gsap.to(ref.current, { x: (200 * self.progress) });
};

export default useAnimate;
