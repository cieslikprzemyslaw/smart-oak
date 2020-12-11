import { useEffect } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useAnimate = (value, ref) => {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: ref.current,
            onUpdate: (self) => {
                gsap.to(ref.current, { x: value * self.progress });
            },
        });
    }, [ref, value]);
};

export default useAnimate;
