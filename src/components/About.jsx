import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workedon = [
  "SharePoint Online",
  "SPFx (SharePoint Framework)",
  "Power Automate",
  "React.js (SPFx Development)",
  "TypeScript",
  "PnP JS",
  "REST APIs",
  "Graph API",
  "SharePoint Lists & Libraries",
  "Modern Web Parts",
];

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);
  const imgWrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, skewY: 3 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );

      // Divider
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

      // Bio text
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: textRef.current, start: "top 85%" },
        },
      );

      // Skill items stagger
      const items = skillsRef.current?.querySelectorAll(".skill-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: "expo.out",
            scrollTrigger: { trigger: skillsRef.current, start: "top 85%" },
          },
        );
      }

      // Image reveal
      gsap.fromTo(
        imgWrapRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: imgWrapRef.current, start: "top 85%" },
        },
      );

      // Orb parallax
      sectionRef.current.querySelectorAll(".orb").forEach((orb, i) => {
        gsap.to(orb, {
          y: i % 2 === 0 ? -50 : 50,
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
      {/* Background orbs */}
      <div className="orb absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.06] blur-[100px] pointer-events-none" />
      <div className="orb absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-emerald-500/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Heading */}
        <div className="mb-16 overflow-hidden">
          <p className="text-[11px] font-medium tracking-[4px] uppercase text-cyan-400 mb-4">
            Who I Am
          </p>
          <h2
            ref={headingRef}
            className="text-[clamp(52px,8vw,108px)] font-black leading-[0.9] tracking-tight text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            About{" "}
            <span className="[-webkit-text-stroke:1px_rgba(255,255,255,0.25)] text-transparent">
              Me
            </span>
          </h2>
          <div
            ref={lineRef}
            className="h-px mt-8 bg-gradient-to-r from-cyan-400 via-emerald-400 to-transparent"
          />
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
          {/* Left: Text + Skills */}
          <div className="flex-1 min-w-0">
            {/* Bio */}
            <div ref={textRef}>
              <p className="text-[15px] leading-[1.9] text-white/50 font-light mb-4">
                Hello! I'm{" "}
                <span className="text-white font-medium">Deependra Singh</span>,
                a Web Developer focused on building clean, efficient, and
                user-friendly digital experiences.
              </p>
              <p className="text-[15px] leading-[1.9] text-white/50 font-light mb-4">
                With over one year of professional experience, I currently work
                as a{" "}
                <span className="text-cyan-400 font-medium">
                  SharePoint Developer
                </span>{" "}
                at{" "}
                <span className="text-cyan-400 font-medium">
                  Microlink Infrastructure Management Pvt. Ltd.
                </span>
              </p>
              <p className="text-[15px] leading-[1.9] text-white/50 font-light">
                I specialize in developing modern SharePoint and SPFx solutions,
                creating reusable web parts, and delivering scalable
                applications that improve business efficiency and user
                experience.
              </p>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="mt-10">
              <p className="text-[11px] font-medium tracking-[3px] uppercase text-white/30 mb-6">
                Technologies I've Worked With
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {workedon.map((skill, i) => (
                  <div
                    key={i}
                    className="skill-item flex items-center gap-3 py-2.5 border-b border-white/[0.05] group cursor-default"
                  >
                    <span className="text-cyan-400 text-xs transition-transform duration-300 group-hover:translate-x-1">
                      ▹
                    </span>
                    <span className="text-[13px] text-white/40 group-hover:text-white/80 transition-colors duration-300 tracking-wide">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Photo */}
          <div
            ref={imgWrapRef}
            className="lg:w-[300px] xl:w-[340px] flex-shrink-0 self-start lg:sticky lg:top-28"
          >
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-cyan-400/10 rounded-2xl blur-2xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Offset border box */}
              <div className="absolute top-4 left-4 w-full h-full rounded-2xl border border-cyan-400/30 transition-all duration-500 group-hover:top-3 group-hover:left-3" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  ref={imageRef}
                  src="/depu.png"
                  alt="Deependra Singh"
                  className="w-full aspect-[3/4] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f]/60 via-transparent to-transparent" />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0d1117] border border-white/10 rounded-full px-4 py-2 whitespace-nowrap shadow-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-white/60 tracking-widest uppercase font-medium">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
