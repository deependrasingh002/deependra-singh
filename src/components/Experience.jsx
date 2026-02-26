import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    id: "Tab0",
    company: "Microlink Infrastructure",
    fullCompany: "Microlink Infrastructure Management Pvt. Ltd.",
    title: "SharePoint Developer",
    date: "Feb 2025 – Present",
    current: true,
    color: "cyan",
    accentClasses: {
      text: "text-cyan-400",
      border: "border-cyan-400",
      bg: "bg-cyan-400/10",
      dot: "bg-cyan-400",
      tag: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    },
    skills: [
      "SPFx",
      "SharePoint Online",
      "Graph API",
      "Power Automate",
      "Power Apps",
    ],
    content:
      "Working as a SharePoint Developer, specializing in SPFx (SharePoint Framework) development and Microsoft 365 solutions. I develop modern web parts, customize SharePoint Online environments, integrate REST and Microsoft Graph APIs, and build Power Platform solutions to streamline business workflows and improve operational efficiency.",
  },
  {
    id: "Tab1",
    company: "Refread",
    fullCompany: "Refread",
    title: "Front End Developer",
    date: "July 2024 – Oct 2024",
    current: false,
    color: "rose",
    accentClasses: {
      text: "text-rose-400",
      border: "border-rose-400",
      bg: "bg-rose-400/10",
      dot: "bg-rose-400",
      tag: "text-rose-400 border-rose-400/20 bg-rose-400/5",
    },
    skills: ["Angular", "AngularJS", "REST APIs", "TypeScript"],
    content:
      "Worked as a Front End Developer, contributing to Angular and AngularJS-based applications. Integrated front-end applications with back-end services using RESTful APIs to ensure smooth data flow and efficient performance.",
  },
  {
    id: "Tab2",
    company: "Thor Solutions",
    fullCompany: "Thor Solutions",
    title: "React Developer Intern",
    date: "Oct 2023 – Apr 2024",
    current: false,
    color: "amber",
    accentClasses: {
      text: "text-amber-400",
      border: "border-amber-400",
      bg: "bg-amber-400/10",
      dot: "bg-amber-400",
      tag: "text-amber-400 border-amber-400/20 bg-amber-400/5",
    },
    skills: ["React", "Next.js", "GSAP", "Headless CMS"],
    content:
      "Completed internship as a React Developer, building responsive web applications and collaborating within a team environment. Gained hands-on experience with Next.js, GSAP animations, and headless CMS integrations.",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  // Content transition on tab change
  const handleTabChange = (id) => {
    if (id === activeTab) return;
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 16,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveTab(id);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4, ease: "expo.out" },
        );
      },
    });
  };

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

      // Sidebar tabs
      gsap.fromTo(
        sidebarRef.current?.querySelectorAll(".tab-btn"),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: sidebarRef.current, start: "top 85%" },
        },
      );

      // Content panel
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
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
      <div className="orb absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full bg-cyan-500/[0.06] blur-[100px] pointer-events-none" />
      <div className="orb absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-amber-500/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Heading */}
        <div className="mb-16 overflow-hidden">
          <p className="text-[11px] font-medium tracking-[4px] uppercase text-cyan-400 mb-4">
            Career Path
          </p>
          <h2
            ref={headingRef}
            className="text-[clamp(52px,8vw,108px)] font-black leading-[0.9] tracking-tight text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Where I've{" "}
            <span className="[-webkit-text-stroke:1px_rgba(255,255,255,0.25)] text-transparent">
              Worked
            </span>
          </h2>
          <div
            ref={lineRef}
            className="h-px mt-8 bg-gradient-to-r from-cyan-400 via-amber-400 to-transparent"
          />
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className="lg:w-[260px] flex-shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`tab-btn flex-shrink-0 text-left px-4 py-4 rounded-xl border transition-all duration-300 w-full
                  ${
                    activeTab === tab.id
                      ? `${tab.accentClasses.bg} ${tab.accentClasses.border} border`
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                  }`}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300
                    ${activeTab === tab.id ? tab.accentClasses.dot : "bg-white/20"}`}
                  />
                  <span
                    className={`text-[12px] font-medium tracking-wide transition-colors duration-300
                    ${activeTab === tab.id ? tab.accentClasses.text : "text-white/40"}`}
                  >
                    {tab.company}
                  </span>
                </div>
                <p
                  className={`text-[11px] pl-4 transition-colors duration-300
                  ${activeTab === tab.id ? "text-white/60" : "text-white/25"}`}
                >
                  {tab.date}
                </p>
                {tab.current && (
                  <span
                    className={`ml-4 mt-1.5 inline-block text-[9px] tracking-[2px] uppercase px-2 py-0.5 rounded-full border font-medium
                    ${tab.accentClasses.tag}`}
                  >
                    Current
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div
            ref={contentRef}
            className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Accent top line */}
            <div
              className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${activeTabData.accentClasses.border.replace("border-", "from-")} to-transparent`}
            />

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3
                    className="text-[28px] lg:text-[34px] font-black text-white leading-tight mb-1 tracking-wide"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {activeTabData.title}
                  </h3>
                  <p
                    className={`text-[13px] font-medium ${activeTabData.accentClasses.text}`}
                  >
                    @ {activeTabData.fullCompany}
                  </p>
                </div>
                <span className="text-[11px] tracking-[2px] uppercase text-white/30 border border-white/10 px-3 py-1.5 rounded-full flex-shrink-0">
                  {activeTabData.date}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-[1.9] text-white/45 font-light mb-8">
              {activeTabData.content}
            </p>

            {/* Skills used */}
            <div>
              <p className="text-[10px] tracking-[3px] uppercase text-white/25 mb-3 font-medium">
                Stack Used
              </p>
              <div className="flex flex-wrap gap-2">
                {activeTabData.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-[11px] px-3 py-1 rounded-full border tracking-wide ${activeTabData.accentClasses.tag}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline indicator */}
            <div className="absolute bottom-8 right-8 opacity-[0.04]">
              <span
                className="text-[120px] font-black leading-none text-white select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {tabs.findIndex((t) => t.id === activeTab) + 1 < 10
                  ? `0${tabs.findIndex((t) => t.id === activeTab) + 1}`
                  : tabs.findIndex((t) => t.id === activeTab) + 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
