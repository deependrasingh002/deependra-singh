import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Home from "./Home"; // Import your Home component

export default function LandingComponent() {
    const helloData = ['Hello', 'नमस्ते', 'Hola', 'Bonjour', 'Nǐn hǎo', 'Konnichiwa'];

    const [hello, setHello] = useState(0);
    const [showHome, setShowHome] = useState(false); // State to determine which component to render
    const [hasCompletedCycle, setHasCompletedCycle] = useState(false);

    const backgroundRef = useRef(null);
    const textRef = useRef(null);
    const waveRef = useRef(null); // Ref for the waving emoji

    useEffect(() => {
        // Background animation (drops down)
        gsap.fromTo(
            backgroundRef.current,
            { y: '-100%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 1.5, ease: "bounce.inOut" }
        );

        // Text animation (fade/slide in after background drops)
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 70 },
            { opacity: 1, y: 0, duration: 1.2, delay: 1.1, ease: "elastic.inOut" }
        );

        // Wave animation for the emoji
        const waveAnimation = gsap.to(waveRef.current, {
            y: -10, // Move up by 10 pixels
            duration: 0.2,
            yoyo: true, // Make it go back and forth
            repeat: -1, // Repeat indefinitely
            ease: "sine.inOut" // Smoother easing for a wave effect
        });

        // Interval to change text every 2 seconds
        const interval = setInterval(() => {
            setHello((prev) => {
                if (prev === helloData.length - 1) {
                    clearInterval(interval);
                    setHasCompletedCycle(true); // Mark cycle completion when all greetings have been shown
                    return prev;
                }
                return (prev + 1) % helloData.length;
            });
        }, 1000);

        return () => {
            clearInterval(interval); // Clean up interval on unmount
            waveAnimation.kill(); // Kill the animation on unmount to prevent memory leaks
        };
    }, [helloData.length]);

    // When the cycle completes, trigger text fade-out and background slide-out
    useEffect(() => {
        if (hasCompletedCycle) {
            // Fade out the hello text before transitioning to Home
            gsap.to(textRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
                onComplete: () => {
                    setShowHome(true)
                    // Start sliding the background after text fades out
                    gsap.fromTo(backgroundRef.current, {
                        y: '-100%', // Slide down out of the screen
                        opacity:0
                        
                    },{
                        y: '0%', opacity: 1, duration: 1.5, ease: "bounce.inOut",
                      
                    }
                
                );
                }
            });
        }
    }, [hasCompletedCycle]);

    // If `showHome` is true, render the Home component, otherwise render the greetings
    if (showHome) {
        return <Home />;  // Render your Home component after animation completes
    }

    return (
        <main className="bg-gradient-to-r from-slate-300 to-slate-500 min-h-screen text-white" ref={backgroundRef}>
            <div className="flex items-center justify-center h-screen">
                <p className="text-4xl md:text-7xl" ref={textRef}>
                    <span className="bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent md:text-[100px] font-bold tracking-widest" >
                        {helloData[hello]} {/* Apply gradient only to this text */}
                    </span>
                    <span className="wave" ref={waveRef}>👋</span> {/* Emoji stays outside the gradient */}
                </p>
            </div>
        </main>
    );
}
