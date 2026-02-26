import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const dot = dotRef.current;
    const ring = ringRef.current;
    const trails = trailsRef.current;

    // Set initial positions off-screen
    gsap.set([dot, ring, ...trails], {
      xPercent: -50,
      yPercent: -50,
      x: -100,
      y: -100,
    });

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Dot snaps instantly
      gsap.to(dot, { x, y, duration: 0.1, ease: "none", overwrite: "auto" });

      // Ring follows with slight lag
      gsap.to(ring, {
        x,
        y,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Trailing balls with increasing stagger delay
      trails.forEach((trail, i) => {
        gsap.to(trail, {
          x,
          y,
          duration: 0.6 + i * 0.12,
          ease: "power1.out",
          overwrite: "auto",
        });
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(ring, {
        scale: 2.2,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 0.5, duration: 0.3, ease: "power2.out" });
    };

    const onMouseLeaveLink = () => {
      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.8, duration: 0.15, ease: "power2.out" });
    };

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.25, ease: "back.out(2)" });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Attach hover effects to interactive elements
    const interactives = document.querySelectorAll(
      "a, button, [role='button'], li",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  // Trail colors — subtle opacity steps
  const trailColors = [
    "bg-cyan-400/70",
    "bg-cyan-400/50",
    "bg-cyan-400/35",
    "bg-cyan-400/20",
    "bg-cyan-400/10",
  ];

  const trailSizes = [
    "w-3 h-3",
    "w-2.5 h-2.5",
    "w-2 h-2",
    "w-1.5 h-1.5",
    "w-1 h-1",
  ];

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-cyan-400 pointer-events-none"
        style={{ willChange: "transform" }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-cyan-400/70 pointer-events-none"
        style={{ willChange: "transform" }}
      />

      {/* Trailing balls */}
      {trailColors.map((color, i) => (
        <div
          key={i}
          ref={(el) => (trailsRef.current[i] = el)}
          className={`fixed top-0 left-0 z-[9997] rounded-full pointer-events-none ${color} ${trailSizes[i]}`}
          style={{ willChange: "transform" }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
