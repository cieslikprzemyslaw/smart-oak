import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slideAnimation = (value, ref) => {
    if (window.innerWidth > 1023) {
        ScrollTrigger.create({
            trigger: ref.current,
            onUpdate: (self) => {
                gsap.to(ref.current, { x: value * self.progress });
            },
        });
    }
};

export default slideAnimation;
