import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slideAnimation = (value, ref) => {

    gsap.set(ref.current, { xPercent: -50, yPercent: -50 });
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
