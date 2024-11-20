import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const Contact = () => {
    const fadeRef = useScrollFadeIn();  // Scroll fade-in effect
    const textRef = useRef(null);  // Ref to the text element for GSAP animation

    useEffect(() => {
        // GSAP spring-like animation for text
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 100 }, // Initial state (hidden and below)
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "bounce.out",  // Create a spring effect using bounce ease
                delay: 0.2,          // Delay to let the scroll fade-in effect happen first
            }
        );
    }, []);

    return (
        <section
            ref={fadeRef}
            className="mx-4 md:mx-24 md:my-16 text-center md:min-w-[800px] h-[500px] flex justify-center items-center overflow-hidden"
        >
            <a
                href="mailto:singhdepu566@gmail.com"  // Replace with your email address
                ref={textRef}
                className="text-5xl md:text-7xl md:text-[120px] text-transparent font-bold tracking-widest hover:cursor-pointer bg-clip-text bg-gradient-to-r from-white to-primary text-shadow-xl transform transition-all duration-300 ease-in-out hover:scale-110 hover:font-extrabold"
            >
                GET IN TOUCH
            </a>
        </section>
    );
}

export default Contact;
