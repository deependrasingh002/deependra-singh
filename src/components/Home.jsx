import { useState, useEffect, useRef } from "react";
import { Github, Instagram, Linkedin, Menu, Twitter, X } from "lucide-react";
import gsap from "gsap";
import HeroSection from "./HeroSection";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from './Contact';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const navLinks = [
    { id: 1, name: "About Me", ref: aboutRef },
    { id: 2, name: "Experience", ref: experienceRef },
    { id: 3, name: "Projects", ref: projectsRef },
    { id: 4, name: "Skills", ref: skillsRef },
    { id: 5, name: "Contacts", ref: contactRef },
  ];

  // Function to handle scroll to section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Mobile Menu Animation (Slide from Right)
      gsap.fromTo(
        ".mobile-menu",
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      // Overlay Animation (Fade in)
      gsap.fromTo(
        ".overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      // Close Button Animation (Fade in)
      gsap.fromTo(
        ".close-btn",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      );

      // Staggered Animation for Nav Links
      gsap.fromTo(
        ".mobile-menu ul li",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    } else {
      // Close Mobile Menu (Slide to Right)
      gsap.to(".mobile-menu", { x: "100%", opacity: 0, duration: 0.6, ease: "power2.in" });

      // Fade Out Overlay
      gsap.to(".overlay", { opacity: 0, duration: 0.3 });

      // Close Button Animation (Slide to Right)
      gsap.to(".close-btn", { opacity: 0, x: -50, duration: 0.3 });

      // Hide Nav Links (Reset opacity and position)
      gsap.to(".mobile-menu ul li", { opacity: 0, y: -30, duration: 0.3 });
    }

    // Desktop Animation Timeline (unchanged)
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        ".logo",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        ".navLinkUL .navLinkLI",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.3, ease: "power2.out" }
      )
      .fromTo(
        ".resume-btn",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        "aside",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );
  }, [isMenuOpen]);

  return (
    <main className="bg-gradient-to-r from-slate-500 to-slate-800 min-h-screen flex flex-col relative">
      <header className="flex items-center justify-between mx-4 py-3 md:mx-20 md:py-3">
        {/* Logo */}
        <div className="text-4xl logo text-primary font-extrabold">D.S</div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X size={25} className="text-primary" />
            ) : (
              <Menu size={25} className="text-primary" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between gap-x-12">
          <ul className="flex items-center justify-between gap-x-8 navLinkUL">
            {navLinks.map((nav) => (
              <li
                key={nav.name}
                className="navLinkLI flex items-end gap-1 justify-between hover:text-white hover:cursor-pointer relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primary before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primary after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                onClick={() => scrollToSection(nav.ref)} // Scroll to section on click
              >
                <span className="text-primary">0{nav.id} .</span>
                <span className="text-secondary hover:text-primary transform duration-75 ">
                  {nav.name}
                </span>
              </li>
            ))}
          </ul>
          <button className="cursor-pointer resume-btn transition-all bg-slate-500 text-primary px-5 py-1 rounded-md border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] border-primary">
            Resume
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      {isMenuOpen && <div className="overlay fixed inset-0 bg-black bg-opacity-50 z-40" />}

      {/* Mobile Full-Screen Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu fixed top-0 right-0 h-full w-2/3 bg-slate-800 p-8 flex flex-col gap-8 z-50">
          <button onClick={() => setIsMenuOpen(false)} className="close-btn self-end text-white">
            <X size={25} />
          </button>
          <ul className="flex flex-col gap-6 mt-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-white text-lg cursor-pointer transition-colors flex items-end gap-1 justify-between hover:text-primary"
                onClick={() => scrollToSection(nav.ref)} // Scroll to section on click
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sections */}
      <section ref={aboutRef}>
        <HeroSection />
      </section>
      <section ref={experienceRef}>
        <About />
      </section>
      <section ref={projectsRef}>
        <Experience />
      </section>
      <section ref={skillsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Skills />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </main>
  );
}

export default Home;
