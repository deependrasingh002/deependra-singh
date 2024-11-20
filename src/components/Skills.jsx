import React, { useEffect, useRef } from 'react';
import Title from './component/Title';
import { FaHtml5, FaCss3, FaReact, FaPython, FaDatabase, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiReactquery, SiTailwindcss } from "react-icons/si";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const skillsRef = useRef(null); // Reference for skills grid
    const fadeRef = useScrollFadeIn();

    const skills = [
        { icon: <FaHtml5 size={50} color='#64ffda' />, name: 'HTML' },
        { icon: <FaCss3 size={50} color='#64ffda' />, name: 'CSS' },
        { icon: <IoLogoJavascript size={50} color='#64ffda' />, name: 'JAVASCRIPT' },
        { icon: <SiTailwindcss size={50} color='#64ffda' />, name: 'TailwindCss' },
        { icon: <FaReact size={50} color='#64ffda' />, name: 'React.JS' },
        { icon: <FaReact size={50} color='#64ffda' />, name: 'Next.JS' },
        { icon: <SiReactquery size={50} color='#64ffda' />, name: 'ReactQuery' },
        { icon: <FaAngular size={50} color='#64ffda' />, name: 'Angular' },
        { icon: <FaPython size={50} color='#64ffda' />, name: 'Python' },
        { icon: <SiCplusplus size={50} color='#64ffda' />, name: 'C++' },
        { icon: <FaDatabase size={50} color='#64ffda' />, name: 'Firebase' },
        { icon: <FaDatabase size={50} color='#64ffda' />, name: 'MongoDB' },
    ];

    useEffect(() => {
        const skills = gsap.utils.toArray('.skill-item'); // Select each skill element

        // Animate each skill
        gsap.fromTo(
            skills,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    return (
        <section ref={fadeRef} className="mx-4 my-12 md:mx-52 md:my-16">
            <Title number={4} title={"Some Skills That I've"} />
            <div className='mt-10 flex items-end justify-center relative'>
                <button className="before:ease relative h-16 w-44 text-xl overflow-hidden border border-secondary bg-secondary shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40">
                    <span className="relative z-10">My Skills</span>
                </button>
            </div>
            <div
                ref={skillsRef}
                className='grid grid-cols-3 mt-12  md:grid-cols-6 md:gap-8 gap-4 md:mx-28 md:mt-20'
            >
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className='skill-item h-28 w-28 rounded-lg flex gap-y-2 flex-col items-center justify-center p-3 bg-secondaryLight'
                    >
                        <span>{skill.icon}</span>
                        <p className='text-secondary'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
