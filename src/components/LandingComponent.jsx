import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import Home from "./Home";

const helloData = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "Nǐn hǎo", lang: "Chinese" },
  { text: "Konnichiwa", lang: "Japanese" },
];

const SLIDE_HOLD_MS = 700;

export default function LandingComponent() {
  const [started, setStarted] = useState(false);
  const [helloIndex, setHelloIndex] = useState(0);
  const [showHome, setShowHome] = useState(false);
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);
  // qwdqwd
  // use-sound setup
  const [playTransition] = useSound("/sounds/transition.mp3", {
    volume: 0.5,
    interrupt: true,
  });

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const langRef = useRef(null);
  const emojiRef = useRef(null);
  const overlayRef = useRef(null);
  const dotsRef = useRef(null);
  const progressRef = useRef(null);

  // Play sound during the user gesture to satisfy browser autoplay policies
  const handleEnter = () => {
    playTransition();
    setStarted(true);
  };

  // Entrance animation
  useEffect(() => {
    if (!started || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (overlayRef.current) {
        tl.fromTo(
          overlayRef.current,
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 0.8, ease: "expo.inOut" },
        );
      }

      if (containerRef.current) {
        tl.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 },
          "-=0.1",
        );
      }

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { y: 80, opacity: 0, skewY: 6 },
          { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "expo.out" },
          "-=0.1",
        );
      }

      if (langRef.current) {
        tl.fromTo(
          langRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
          "-=0.5",
        );
      }

      if (emojiRef.current) {
        tl.fromTo(
          emojiRef.current,
          { scale: 0, opacity: 0, rotate: -30 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.7,
            ease: "back.out(2)",
          },
          "-=0.4",
        );

        gsap.to(emojiRef.current, {
          y: -12,
          rotate: 15,
          duration: 0.8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      const dots = dotsRef.current?.querySelectorAll(".dot");
      if (dots && dots.length > 0) {
        tl.fromTo(
          dots,
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
      }

      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          transformOrigin: "left",
          duration: helloData.length * 1.0,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [started]);

  // Greeting cycling: hold -> animate out -> next index
  useEffect(() => {
    if (!started || hasCompletedCycle) return;

    const isLast = helloIndex === helloData.length - 1;

    const timeout = setTimeout(() => {
      if (isLast) {
        setHasCompletedCycle(true);
        return;
      }

      const targets = [textRef.current, langRef.current].filter(Boolean);
      if (targets.length > 0) {
        gsap.to(targets, {
          y: -40,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => setHelloIndex((prev) => prev + 1),
        });
      } else {
        setHelloIndex((prev) => prev + 1);
      }
    }, SLIDE_HOLD_MS);

    return () => clearTimeout(timeout);
  }, [started, helloIndex, hasCompletedCycle]);

  // On every subsequent slide change: play sound + animate new text in
  useEffect(() => {
    if (!started || helloIndex === 0) return;

    playTransition();

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 60, opacity: 0, skewY: 4 },
        { y: 0, opacity: 1, skewY: 0, duration: 0.55, ease: "expo.out" },
      );
    }

    if (langRef.current) {
      gsap.fromTo(
        langRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "expo.out", delay: 0.1 },
      );
    }
  }, [started, helloIndex, playTransition]);

  // Exit animation -> show Home
  useEffect(() => {
    if (!hasCompletedCycle) return;

    const exitTargets = [
      textRef.current,
      langRef.current,
      emojiRef.current,
    ].filter(Boolean);
    const dots = dotsRef.current?.querySelectorAll(".dot");

    const tl = gsap.timeline({
      onComplete: () => setShowHome(true),
    });

    if (exitTargets.length > 0) {
      tl.to(exitTargets, {
        y: -60,
        opacity: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power3.in",
      });
    }

    if (dots && dots.length > 0) {
      tl.to(
        dots,
        {
          scale: 0,
          opacity: 0,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.3",
      );
    }

    if (overlayRef.current) {
      tl.to(
        overlayRef.current,
        {
          scaleY: 0,
          transformOrigin: "bottom",
          duration: 0.8,
          ease: "expo.inOut",
        },
        "-=0.1",
      );
    }

    return () => tl.kill();
  }, [hasCompletedCycle]);

  if (showHome) return <Home />;

  // Initial landing button
  if (!started) {
    return (
      <main className="bg-[#080a0f] min-h-screen flex flex-col items-center justify-center gap-6">
        <button
          onClick={handleEnter}
          className="px-8 py-3 rounded-full border border-white/20 text-white/80 text-xs tracking-[4px] uppercase hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
        >
          Enter
        </button>
        <p className="text-[10px] tracking-[3px] uppercase text-white/20">
          Sound on 🔊
        </p>
      </main>
    );
  }

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
        <p
          ref={langRef}
          className="text-[11px] tracking-[4px] uppercase text-white/30 font-medium"
        >
          {helloData[helloIndex].lang}
        </p>

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
