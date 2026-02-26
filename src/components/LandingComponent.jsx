import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Home from "./Home";

const helloData = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "Nǐn hǎo", lang: "Chinese" },
  { text: "Konnichiwa", lang: "Japanese" },
];

export default function LandingComponent() {
  const [helloIndex, setHelloIndex] = useState(0);
  const [showHome, setShowHome] = useState(false);
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const langRef = useRef(null);
  const emojiRef = useRef(null);
  const overlayRef = useRef(null);
  const dotsRef = useRef(null);
  const progressRef = useRef(null);

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline();

    // Background panels slide in from top
    tl.fromTo(
      overlayRef.current,
      { scaleY: 0, transformOrigin: "top" },
      { scaleY: 1, duration: 0.8, ease: "expo.inOut" },
    )
      .fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        "-=0.1",
      )
      // Main text drops in
      .fromTo(
        textRef.current,
        { y: 80, opacity: 0, skewY: 6 },
        { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "expo.out" },
        "-=0.1",
      )
      // Lang label fades in
      .fromTo(
        langRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
        "-=0.5",
      )
      // Emoji bounces in
      .fromTo(
        emojiRef.current,
        { scale: 0, opacity: 0, rotate: -30 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.7, ease: "back.out(2)" },
        "-=0.4",
      )
      // Dots fade in
      .fromTo(
        dotsRef.current?.querySelectorAll(".dot"),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.08,
          duration: 0.4,
          ease: "back.out(2)",
        },
        "-=0.3",
      );

    // Continuous emoji float
    gsap.to(emojiRef.current, {
      y: -12,
      rotate: 15,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // Progress bar
    gsap.to(progressRef.current, {
      scaleX: 1,
      transformOrigin: "left",
      duration: helloData.length * 1.0,
      ease: "none",
    });
  }, []);

  // Cycle through greetings
  useEffect(() => {
    if (hasCompletedCycle) return;

    const interval = setInterval(() => {
      setHelloIndex((prev) => {
        if (prev === helloData.length - 1) {
          clearInterval(interval);
          setHasCompletedCycle(true);
          return prev;
        }

        // Animate out current text
        gsap.to([textRef.current, langRef.current], {
          y: -40,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            // Will be updated by state, then animate in
          },
        });

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hasCompletedCycle]);

  // Animate in new text when index changes
  useEffect(() => {
    if (helloIndex === 0) return;
    gsap.fromTo(
      textRef.current,
      { y: 60, opacity: 0, skewY: 4 },
      { y: 0, opacity: 1, skewY: 0, duration: 0.55, ease: "expo.out" },
    );
    gsap.fromTo(
      langRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "expo.out", delay: 0.1 },
    );
  }, [helloIndex]);

  // Exit animation → show Home
  useEffect(() => {
    if (!hasCompletedCycle) return;

    const tl = gsap.timeline({
      onComplete: () => setShowHome(true),
    });

    tl.to([textRef.current, langRef.current, emojiRef.current], {
      y: -60,
      opacity: 0,
      stagger: 0.06,
      duration: 0.5,
      ease: "power3.in",
    })
      .to(
        dotsRef.current?.querySelectorAll(".dot"),
        {
          scale: 0,
          opacity: 0,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.3",
      )
      .to(
        overlayRef.current,
        {
          scaleY: 0,
          transformOrigin: "bottom",
          duration: 0.8,
          ease: "expo.inOut",
        },
        "-=0.1",
      );
  }, [hasCompletedCycle]);

  if (showHome) return <Home />;

  return (
    <main
      ref={containerRef}
      className="bg-[#080a0f] min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ opacity: 0 }}
    >
      {/* Animated panel overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#080a0f] z-0"
        style={{ transformOrigin: "top", transform: "scaleY(0)" }}
      />

      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-rose-500/[0.05] blur-[100px] pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-white/10" />

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5 z-10">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-cyan-400 to-rose-400"
          style={{ transform: "scaleX(0)", transformOrigin: "left" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
        {/* Lang label */}
        <p
          ref={langRef}
          className="text-[11px] tracking-[4px] uppercase text-white/30 font-medium"
        >
          {helloData[helloIndex].lang}
        </p>

        {/* Main greeting */}
        <div className="flex items-center gap-4 md:gap-6">
          <h1
            ref={textRef}
            className="text-[clamp(60px,14vw,160px)] font-black leading-none tracking-tight text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {helloData[helloIndex].text}
          </h1>
          <span
            ref={emojiRef}
            className="text-[clamp(40px,8vw,90px)] leading-none select-none"
          >
            👋
          </span>
        </div>

        {/* Dots progress indicator */}
        <div ref={dotsRef} className="flex items-center gap-2 mt-4">
          {helloData.map((_, i) => (
            <div
              key={i}
              className={`dot rounded-full transition-all duration-500 ${
                i === helloIndex
                  ? "w-6 h-1.5 bg-cyan-400"
                  : i < helloIndex
                    ? "w-1.5 h-1.5 bg-white/30"
                    : "w-1.5 h-1.5 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom signature */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <p
          className="text-[10px] tracking-[3px] uppercase text-white/15"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Deependra Singh · Portfolio
        </p>
      </div>
    </main>
  );
}
