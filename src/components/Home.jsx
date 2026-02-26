import { useState, useEffect, useRef } from "react";
import { Github, Instagram, Linkedin, Twitter, Menu, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroSection from "./HeroSection";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
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

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const logoRef = useRef(null);

  const navLinks = [
    { id: 1, name: "About", ref: aboutRef },
    { id: 2, name: "Experience", ref: experienceRef },
    { id: 3, name: "Projects", ref: projectsRef },
    { id: 4, name: "Skills", ref: skillsRef },
    { id: 5, name: "Contact", ref: contactRef },
  ];

  const scrollToSection = (ref, index) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(index);
    setIsMenuOpen(false);
  };

  // Scroll: header glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial nav entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(
      logoRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
    )
      .fromTo(
        ".nav-link-item",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "expo.out" },
        "-=0.5",
      )
      .fromTo(
        ".resume-btn",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
        "-=0.4",
      )
      .fromTo(
        ".social-sidebar",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" },
        "-=0.3",
      );
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "expo.out" },
      );
      gsap.fromTo(
        ".mobile-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
      );
      gsap.fromTo(
        ".mobile-nav-item",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "expo.out",
          delay: 0.15,
        },
      );
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "expo.in",
      });
      gsap.to(".mobile-overlay", { opacity: 0, duration: 0.3 });
    }
  }, [isMenuOpen]);

  return (
    <div className="bg-[#080a0f] min-h-screen text-white relative">
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-500
          ${
            scrolled
              ? "py-3 bg-[#080a0f]/85 backdrop-blur-xl border-b border-white/[0.06]"
              : "py-5 bg-transparent"
          }`}
      >
        {/* Logo */}
        <div
          ref={logoRef}
          className="text-3xl font-extrabold tracking-widest leading-none relative"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          D<span className="text-cyan-400">.</span>S
          <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className="nav-link-item flex items-baseline gap-1.5 cursor-pointer group"
                onClick={() => scrollToSection(nav.ref, i)}
              >
                <span className="text-[10px] text-cyan-400 font-medium tracking-widest">
                  0{nav.id}.
                </span>
                <span
                  className={`text-[13px] tracking-wide relative pb-0.5
                    after:absolute after:bottom-0 after:left-0 after:h-px after:bg-cyan-400 after:transition-all after:duration-500
                    ${
                      activeSection === i
                        ? "text-cyan-400 after:w-full"
                        : "text-white/50 group-hover:text-white after:w-0 group-hover:after:w-full"
                    }`}
                >
                  {nav.name}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="DeependraSingh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn text-[11px] font-medium tracking-[2px] uppercase text-cyan-400 border border-cyan-400/40 px-5 py-2.5 rounded hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* ── MOBILE MENU ── */}
      {isMenuOpen && (
        <>
          <div
            className="mobile-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="mobile-menu fixed top-0 right-0 h-full w-[min(320px,80vw)] bg-[#0d1117] border-l border-white/[0.06] z-[300] flex flex-col p-8">
            <div className="flex justify-end mb-12">
              <button
                className="text-white/40 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={22} />
              </button>
            </div>

            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="mobile-nav-item border-b border-white/[0.05] py-4 cursor-pointer group"
                  onClick={() => scrollToSection(nav.ref, nav.id - 1)}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] text-cyan-400 font-medium tracking-widest">
                      0{nav.id}.
                    </span>
                    <span className="text-xl font-light text-white/60 group-hover:text-white transition-colors duration-200">
                      {nav.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="DeependraSingh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-10 text-center text-[11px] font-medium tracking-[2px] uppercase text-cyan-400 border border-cyan-400/40 px-6 py-3 rounded hover:bg-cyan-400/10 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </>
      )}

      {/* ── SOCIAL SIDEBAR ── */}
      <aside className="social-sidebar hidden md:flex fixed left-7 bottom-0 flex-col items-center gap-4 z-40">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-white/30 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <Icon size={17} />
          </a>
        ))}
        <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent mt-2" />
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="pt-20">
        <section className="scroll-mt-20">
          <HeroSection />
        </section>
        <section className="scroll-mt-20" ref={aboutRef}>
          <About />
        </section>
        <section className="scroll-mt-20" ref={experienceRef}>
          <Experience />
        </section>
        <section className="scroll-mt-20" ref={projectsRef}>
          <Projects />
        </section>
        <section className="scroll-mt-20" ref={skillsRef}>
          <Skills />
        </section>
        <section className="scroll-mt-20" ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default Home;
