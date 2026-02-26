import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Mail, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    icon: Github,
    href: "https://github.com/deependrasingh002",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/deependrasingh/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/singhdepu566", label: "Twitter" },
  // { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const socialsRef = useRef(null);
  const bigTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label + divider
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );

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

      // Sub text
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: subRef.current, start: "top 88%" },
        },
      );

      // CTA button
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: btnRef.current, start: "top 90%" },
        },
      );

      // Socials stagger
      gsap.fromTo(
        socialsRef.current?.querySelectorAll(".social-link"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: socialsRef.current, start: "top 90%" },
        },
      );

      // Big background text parallax
      gsap.fromTo(
        bigTextRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      gsap.to(bigTextRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Button hover magnetic feel
      const btn = btnRef.current;
      if (btn) {
        btn.addEventListener("mouseenter", () =>
          gsap.to(btn, { scale: 1.04, duration: 0.3, ease: "power2.out" }),
        );
        btn.addEventListener("mouseleave", () =>
          gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" }),
        );
      }

      // Orb parallax
      sectionRef.current.querySelectorAll(".orb").forEach((orb, i) => {
        gsap.to(orb, {
          y: i % 2 === 0 ? -60 : 60,
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
      className="relative bg-[#080a0f] py-28 pb-20 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.06] blur-[120px] pointer-events-none" />
      <div className="orb absolute bottom-0 -right-20 w-[300px] h-[300px] rounded-full bg-rose-500/[0.05] blur-[100px] pointer-events-none" />

      {/* Giant background text */}
      <div
        ref={bigTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[clamp(80px,18vw,200px)] font-black whitespace-nowrap [-webkit-text-stroke:1px_rgba(255,255,255,0.04)] text-transparent leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          GET IN TOUCH
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10 text-center">
        {/* Heading */}
        <div className="mb-10 overflow-hidden">
          <p className="text-[11px] font-medium tracking-[4px] uppercase text-cyan-400 mb-4">
            What's Next
          </p>
          <h2
            ref={headingRef}
            className="text-[clamp(52px,8vw,108px)] font-black leading-[0.9] tracking-tight text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Let's{" "}
            <span className="[-webkit-text-stroke:1px_rgba(255,255,255,0.25)] text-transparent">
              Connect
            </span>
          </h2>
          <div
            ref={lineRef}
            className="h-px mt-8 mx-auto w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </div>

        {/* Sub text */}
        <p
          ref={subRef}
          className="text-[15px] leading-[1.9] text-white/40 font-light max-w-xl mx-auto mb-12"
        >
          I'm currently open to new opportunities. Whether you have a project in
          mind, a question, or just want to say hi — my inbox is always open.
        </p>

        {/* CTA Button */}
        <div ref={btnRef} className="mb-14">
          <a
            href="mailto:singhdepu566@gmail.com"
            className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[2px] uppercase
              text-cyan-400 border border-cyan-400/40 px-8 py-4 rounded-full
              hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]
              transition-all duration-300"
          >
            <Mail size={15} />
            Say Hello
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Socials */}
        <div
          ref={socialsRef}
          className="flex items-center justify-center gap-6"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/10" />
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="social-link flex items-center gap-2 text-white/25 hover:text-white transition-all duration-300 group hover:-translate-y-1"
            >
              <Icon size={17} />
              <span className="text-[11px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-1">
                {label}
              </span>
            </a>
          ))}
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* Footer */}
        <p className="mt-16 text-[11px] tracking-[2px] uppercase text-white/15">
          Designed & Built by{" "}
          <span className="text-white/30">Deependra Singh</span>
        </p>
      </div>
    </section>
  );
}
