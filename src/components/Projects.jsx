import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: '01',
    imageSrc: '/assets/evento.png',
    projectName: 'Evento Web',
    projectDescription:
      'A dynamic web application built with Next.js and Framer Motion, providing a seamless user experience to explore cities hosting events. Users can fetch data from an API to view events by location and enjoy smooth animations.',
    skills: ['Next.js', 'React', 'TailwindCSS', 'Prisma', 'TypeScript', 'Zod'],
    githubLink: 'https://github.com/trdxDeepu/evento-event',
    projectLink: 'https://evento-event-nine.vercel.app/',
    accentClasses: {
      text: 'text-cyan-400',
      glow: 'group-hover:shadow-[0_30px_80px_rgba(0,212,255,0.12)]',
      dot: 'bg-cyan-400',
      line: 'from-cyan-400',
      btnBorder: 'border-cyan-400/40 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_16px_rgba(0,212,255,0.2)]',
      btnText: 'text-cyan-400',
      tag: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
    },
  },
  {
    number: '02',
    imageSrc: '/assets/realestate.png',
    projectName: 'Real Estate App',
    projectDescription:
      'A modern real estate platform built with React and Tailwind CSS, enabling users to list properties for sale or rent. Features secure Google Auth and Firebase for real-time data storage and retrieval.',
    skills: ['JavaScript', 'React', 'TailwindCSS', 'Firebase', 'Authentication'],
    githubLink: 'https://github.com/trdxDeepu/EstateApp',
    projectLink: 'https://estate-app-bice.vercel.app/',
    accentClasses: {
      text: 'text-rose-400',
      glow: 'group-hover:shadow-[0_30px_80px_rgba(251,113,133,0.12)]',
      dot: 'bg-rose-400',
      line: 'from-rose-400',
      btnBorder: 'border-rose-400/40 hover:border-rose-400 hover:bg-rose-400/10 hover:shadow-[0_0_16px_rgba(251,113,133,0.2)]',
      btnText: 'text-rose-400',
      tag: 'text-rose-400 border-rose-400/20 bg-rose-400/5',
    },
  },
];

function ProjectCard({ project, cardRef }) {
  const { number, imageSrc, projectName, projectDescription, skills, githubLink, projectLink, accentClasses } = project;

  return (
    <li
      ref={cardRef}
      className={`project-card group relative rounded-2xl border border-white/[0.07] bg-white/[0.02]
        transition-all duration-500 hover:border-white/[0.13] overflow-hidden flex flex-col
        ${accentClasses.glow}`}
    >
      {/* Top accent line on hover */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${accentClasses.line} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />

      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={imageSrc}
          alt={projectName}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f]/80 via-[#080a0f]/10 to-transparent" />

        {/* Live badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${accentClasses.dot} animate-pulse`} />
          <span className="text-[10px] text-white/70 tracking-widest uppercase font-medium">Live</span>
        </div>

        {/* Ghost number watermark */}
        <span
          className="absolute bottom-2 right-4 text-[60px] font-black leading-none select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.07)] text-transparent pointer-events-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3
          className="text-[22px] font-bold text-white mb-3 leading-tight tracking-wide"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {projectName}
        </h3>

        {/* Description */}
        <p className="text-[13px] leading-relaxed text-white/40 mb-5 font-light flex-1">
          {projectDescription}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`text-[11px] px-3 py-1 rounded-full border tracking-wide ${accentClasses.tag}`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-[11px] font-medium tracking-[1.5px] uppercase px-4 py-2 rounded border transition-all duration-300 ${accentClasses.btnText} ${accentClasses.btnBorder}`}
          >
            <ExternalLink size={12} />
            Live Site
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[11px] font-medium tracking-[1.5px] uppercase px-4 py-2 rounded border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
          >
            <Github size={12} />
            Source
          </a>
        </div>
      </div>
    </li>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, skewY: 3 },
        {
          opacity: 1, y: 0, skewY: 0,
          duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      );

      // Divider line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1, duration: 1.2, ease: 'expo.inOut',
          scrollTrigger: { trigger: lineRef.current, start: 'top 85%' },
        }
      );

      // Cards: stagger from bottom
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 0.9, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' },
        }
      );

      // Image reveal per card
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const img = card.querySelector('img');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12, opacity: 0 },
            {
              scale: 1, opacity: 1, duration: 1.2, ease: 'expo.out',
              scrollTrigger: { trigger: card, start: 'top 85%' },
            }
          );
        }

        // Skill badge spring
        const badges = card.querySelectorAll('li > div > div > span');
        gsap.fromTo(
          badges,
          { opacity: 0, scale: 0.7, y: 10 },
          {
            opacity: 1, scale: 1, y: 0,
            duration: 0.4, stagger: 0.055, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: card, start: 'top 78%' },
          }
        );

        // Hover lift
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(card, { y: -8, duration: 0.3, ease: 'power2.out' });
        card.addEventListener('mouseenter', () => hoverTl.play());
        card.addEventListener('mouseleave', () => hoverTl.reverse());
      });

      // Orb parallax
      sectionRef.current.querySelectorAll('.orb').forEach((orb, i) => {
        gsap.to(orb, {
          y: i % 2 === 0 ? -60 : 60,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom', end: 'bottom top',
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#080a0f] py-28 overflow-hidden">

      {/* Background orbs */}
      <div className="orb absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-cyan-500/[0.07] blur-[100px] pointer-events-none" />
      <div className="orb absolute -bottom-16 -left-16 w-[360px] h-[360px] rounded-full bg-rose-500/[0.07] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* Heading */}
        <div className="mb-16 overflow-hidden">
          <p className="text-[11px] font-medium tracking-[4px] uppercase text-cyan-400 mb-4">
            Selected Work
          </p>
          <h2
            ref={headingRef}
            className="text-[clamp(52px,8vw,108px)] font-black leading-[0.9] tracking-tight text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Things I've{' '}
            <span className="[-webkit-text-stroke:1px_rgba(255,255,255,0.25)] text-transparent">
              Built
            </span>
          </h2>
          <div
            ref={lineRef}
            className="h-px mt-8 bg-gradient-to-r from-cyan-400 via-rose-400 to-transparent"
          />
        </div>

        {/* 2-per-row grid */}
        <ul className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              cardRef={(el) => (cardsRef.current[i] = el)}
            />
          ))}
        </ul>

        {/* Footer CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/trdxDeepu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[2px] uppercase text-white/30 hover:text-white transition-colors duration-300 group"
          >
            View All on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
