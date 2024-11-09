import  { useState, useEffect } from "react";
import { Github, Instagram, Linkedin, Menu, Twitter, X } from "lucide-react";

import gsap from "gsap";
import HeroSection from "./HeroSection";
import About from "./About";
import Experience from "./Experience";


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navLinks = [
    { id: 1, name: "About Me" },
    { id: 2, name: "Experience" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Skills" },
    { id: 5, name: "Contacts" }
  ];

  useEffect(() => {
    if (isMenuOpen) {
        // Animate the menu when it opens
        gsap.fromTo(
         'nav',
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.6, ease: 'power2.out' }
        );
      }
    const timeline = gsap.timeline();
    timeline
      .fromTo(".logo", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      .fromTo(".navLinkUL .navLinkLI", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.4 })
      .fromTo(".resume-btn", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo("aside", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  }, [isMenuOpen]);

  return (
    <main className="bg-gradient-to-r from-slate-500 to-slate-800 min-h-screen">
      <header className="flex items-center justify-between mx-4 py-3 md:mx-20 md:py-3">
        {/* Logo */}
        <div className="text-4xl logo text-primary font-extrabold">D.S</div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={25} className="text-primary"/> : <Menu size={25} className="text-primary"/>}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between gap-x-12">
          <ul className="flex items-center justify-between gap-x-8 navLinkUL">
            {navLinks.map((nav) => (
              <li
                className="navLinkLI flex items-end gap-1 justify-between hover:text-white hover:cursor-pointer relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primary before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primary after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                key={nav.name}
              >
                <span className=" text-primary">0{nav.id} .</span>
                <span className="text-secondary hover:text-primary transform duration-75 ">
                  {nav.name}
                </span>
              </li>
            ))}
          </ul>
          <div>
            <button className="cursor-pointer resume-btn transition-all bg-slate-500 text-primary px-5 py-1 rounded-md border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] border-primary">
              Resume
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-16 rounded-sm right-0 w-2/3  p-5 lg:hidden "
          
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="text-white hover:text-primary cursor-pointer transition-colors"
                >
                  {nav.name}
                </li>
              ))}
            </ul>
            <div>
            <button className="cursor-pointer resume-btn transition-all bg-slate-500 text-primary px-5 py-1 rounded-md border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] border-primary">
              Resume
            </button>
          </div>
          </nav>
        )}
      </header>

      {/* Left Sidebar */}
      <aside className=" md:bottom-0 md:left-20 md:py-3 hidden md:fixed md:block">
        <div className="flex flex-col gap-5">
          <Github className="text-secondaryLight hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear" size={20} />
          <Instagram className="text-secondaryLight hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear" size={20} />
          <Twitter className="text-secondaryLight hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear" size={20} />
          <Linkedin className="text-secondaryLight hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear" size={20} />
          <div className="ml-2 after:content-[''] after:w-[2px] after:h-20 after:bg-secondaryLight after:block after:mt-2"></div>
        </div>
      </aside>

      {/* Right Sidebar */}
      <aside className="hidden md:fixed md:bottom-0 md:-right-10 md:py-3 md:block">
        <div className="flex flex-col after:content-[''] after:w-[2px] after:h-20 after:bg-secondaryLight after:block after:mt-52">
          <p className="rotate-90 origin-left text-secondary hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear">
            <a href="#">singhdepu566@gmail.com</a>
          </p>
          <div className="ml-2"></div>
        </div>
      </aside>

      <HeroSection />
      <About />
      <Experience/>
    </main>
  );
}

export default Home;
