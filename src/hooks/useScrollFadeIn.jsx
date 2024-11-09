import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function useScrollFadeIn() {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {
                            opacity: 1,
                            y: 0,
                            duration: 1.5,
                            ease: "power2.out",
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 } // Trigger animation when 20% of the element is visible
        );

        if (element) {
            gsap.set(element, { opacity: 0, y: 50 }); // Initial state
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return elementRef;
}

export default useScrollFadeIn;
