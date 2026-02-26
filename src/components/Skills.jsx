import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Microsoft & SharePoint",
    icon: "◈",
    accentClasses: {
      text: "text-cyan-400",
      border: "border-cyan-400/20",
      bg: "bg-cyan-400/5",
      accent: "bg-cyan-400",
      glow: "hover:shadow-[0_24px_60px_rgba(0,212,255,0.1)]",
      iconColor: "text-cyan-400",
    },
    skills: [
      "SharePoint Online",
      "SPFx",
      "Power Automate",
      "Power Apps",
      "Microsoft 365",
      "Graph API",
    ],
  },
  {
    title: "Frontend Technologies",
    icon: "◉",
    accentClasses: {
      text: "text-rose-400",
      border: "border-rose-400/20",
      bg: "bg-rose-400/5",
      accent: "bg-rose-400",
      glow: "hover:shadow-[0_24px_60px_rgba(255,107,107,0.1)]",
      iconColor: "text-rose-400",
    },
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "React Query",
    ],
  },
  {
    title: "Backend & Database",
    icon: "◐",
    accentClasses: {
      text: "text-emerald-400",
      border: "border-emerald-400/20",
      bg: "bg-emerald-400/5",
      accent: "bg-emerald-400",
      glow: "hover:shadow-[0_24px_60px_rgba(168,255,120,0.08)]",
      iconColor: "text-emerald-400",
    },
    skills: ["REST APIs", "Node.js", "Firebase", "MongoDB"],
  },
  {
    title: "Programming Languages",
    icon: "◑",
    accentClasses: {
      text: "text-amber-400",
      border: "border-amber-400/20",
      bg: "bg-amber-400/5",
      accent: "bg-amber-400",
      glow: "hover:shadow-[0_24px_60px_rgba(247,151,30,0.1)]",
      iconColor: "text-amber-400",
    },
    skills: ["TypeScript", "Python", "C++"],
  },
];

function Skills() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, skewY: 4 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );

      // Divider line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "expo.inOut",
          scrollTrigger: { trigger: lineRef.current, start: "top 85%" },
        },
      );

      // Cards staggered entrance
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 80, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            delay: i * 0.12,
            ease: "expo.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          },
        );

        // Badge spring entrance
        const badges = card.querySelectorAll(".skill-badge");
        gsap.fromTo(
          badges,
          { opacity: 0, scale: 0.7, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: "back.out(1.5)",
            scrollTrigger: { trigger: card, start: "top 80%" },
          },
        );

        // Card hover lift
        const tl = gsap.timeline({ paused: true });
        tl.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });

      // Orb parallax
      sectionRef.current.querySelectorAll(".orb").forEach((orb, i) => {
        gsap.to(orb, {
          y: i % 2 === 0 ? -60 : 60,
          x: i % 3 === 0 ? -30 : 30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#080a0f] py-28 overflow-hidden"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background orbs */}
      {/* <div className="orb absolute -top-24 -right-36 w-[500px] h-[500px] rounded-full bg-cyan-400/[0.15] blur-[80px] pointer-events-none" />
      <div className="orb absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-rose-400/[0.12] blur-[80px] pointer-events-none" />
      <div className="orb absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-emerald-400/[0.08] blur-[80px] pointer-events-none" /> */}

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Heading */}
        <div className="mb-20 overflow-hidden">
          <p className="text-[11px] font-medium tracking-[4px] uppercase text-cyan-400 mb-4">
            What I work with
          </p>
          <h2
            ref={headingRef}
            className="text-[clamp(64px,9vw,120px)] font-black leading-[0.9] tracking-tight text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            My{" "}
            <span className="[-webkit-text-stroke:1px_rgba(255,255,255,0.3)] text-transparent">
              Skills
            </span>
          </h2>
          <div
            ref={lineRef}
            className="h-px mt-8 bg-gradient-to-r from-cyan-400 via-rose-400 to-transparent"
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`
                group relative rounded-2xl p-8 border border-white/[0.07]
                bg-white/[0.02] cursor-default
                transition-all duration-300 will-change-transform
                hover:border-white/[0.14]
                ${cat.accentClasses.glow}
              `}
              style={{ perspective: "800px", transformStyle: "preserve-3d" }}
            >
              {/* Top accent line on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r ${cat.accentClasses.accent.replace("bg-", "from-")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`text-[28px] leading-none ${cat.accentClasses.iconColor}`}
                >
                  {cat.icon}
                </span>
                <p className="text-[13px] font-medium tracking-wide text-white/85 leading-tight">
                  {cat.title}
                </p>
              </div>

              {/* Accent bar */}
              <div
                className={`w-10 h-0.5 rounded-full mb-6 ${cat.accentClasses.accent}`}
              />

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      skill-badge inline-block px-3 py-1.5 rounded-full
                      text-[11px] tracking-wide border
                      transition-transform duration-200
                      hover:scale-105 hover:-translate-y-0.5
                      ${cat.accentClasses.text}
                      ${cat.accentClasses.border}
                      ${cat.accentClasses.bg}
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
