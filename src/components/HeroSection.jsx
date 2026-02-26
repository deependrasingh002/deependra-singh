import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const greetRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const bioRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        greetRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" },
      )
        .fromTo(
          nameRef.current,
          { y: 80, opacity: 0, skewY: 4 },
          { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "expo.out" },
          "-=0.4",
        )
        .fromTo(
          roleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
          "-=0.5",
        )
        .fromTo(
          bioRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" },
          "-=0.4",
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "expo.out" },
          "-=0.3",
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2",
        );

      // Floating scroll indicator
      gsap.to(scrollRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.4,
        ease: "sine.inOut",
        delay: 2,
      });

      // Orb parallax on mouse move
      const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30;
        const y = (e.clientY / innerHeight - 0.5) * 30;
        gsap.to(".hero-orb-1", {
          x: x * 1.2,
          y: y * 1.2,
          duration: 1.2,
          ease: "power2.out",
        });
        gsap.to(".hero-orb-2", {
          x: -x * 0.8,
          y: -y * 0.8,
          duration: 1.4,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#080a0f] min-h-screen flex items-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="hero-orb-1 absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.07] blur-[120px] pointer-events-none" />
      <div className="hero-orb-2 absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.07] blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-10 pt-10 pb-24">
        {/* Greeting */}
        <div ref={greetRef} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-cyan-400" />
          <p className="text-[13px] font-medium tracking-[4px] uppercase text-cyan-400">
            Hi, my name is
          </p>
        </div>

        {/* Name */}
        <div className="overflow-hidden mb-4">
          <h1
            ref={nameRef}
            className="text-[clamp(48px,10vw,130px)] font-black leading-[0.9] tracking-tight text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Deependra
            <br />
            <span className="[-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)] text-transparent">
              Singh
            </span>
            <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-400 ml-3 mb-2 align-bottom" />
          </h1>
        </div>

        {/* Role */}
        <div ref={roleRef} className="mb-8">
          <h2 className="text-[clamp(18px,3vw,32px)] font-light text-white/50 tracking-wide leading-snug max-w-3xl">
            I build{" "}
            <span className="text-white font-medium">scalable SharePoint</span>{" "}
            & <span className="text-white font-medium">Microsoft 365</span>{" "}
            solutions.
          </h2>
        </div>

        {/* Bio */}
        <p
          ref={bioRef}
          className="text-[15px] leading-[1.9] text-white/35 font-light max-w-2xl mb-12"
        >
          I'm a SharePoint Developer with over one year of professional
          experience, specializing in{" "}
          <span className="text-white/60">SPFx development</span>,{" "}
          <span className="text-white/60">Power Platform solutions</span>, and
          building enterprise-grade applications that enhance productivity and
          streamline workflows.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex items-center gap-4 flex-wrap">
          <a
            href="DeependraSingh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 text-[12px] font-medium tracking-[2px] uppercase bg-cyan-400 text-[#080a0f] px-7 py-3.5 rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            <span className="relative z-10">View Resume</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </a>

          {/* <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[2px] uppercase text-white/50 border border-white/10 px-7 py-3.5 rounded hover:text-white hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300"
          >
            Get In Touch
          </a> */}
        </div>

        {/* Tech stack pills */}
        <div className="mt-16 flex flex-wrap gap-2">
          {[
            "SharePoint",
            "SPFx",
            "React.js",
            "TypeScript",
            "Power Automate",
          ].map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-white/25 border border-white/[0.07] px-3 py-1.5 rounded-full tracking-wide hover:text-white/50 hover:border-white/20 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[3px] uppercase text-white/20">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* Corner decoration */}
      <div className="absolute top-28 right-10 hidden lg:block">
        <div className="relative w-40 h-40 opacity-20">
          <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 border border-cyan-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] tracking-widest text-white/40 uppercase">
              Dev
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
