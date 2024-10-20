import gsap from "gsap";
import { useEffect } from "react";
import HeroSection from "./HeroSection";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import About from "./About";


function Home() {
    const navLinks = [
        {
            id: 1,
            name: 'About Me'
        }, {
            id: 2,
            name: 'Experience'
        }, {
            id: 3,
            name: 'Projects'
        }, {
            id: 4,
            name: 'Skills'
        }, {
            id: 5,
            name: 'Contacts'
        }
    ];

    useEffect(() => {
        const timeline = gsap.timeline();

        // Animate the logo, nav links, and button in sequence
        timeline
            .fromTo('.logo', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
            .fromTo('ul li', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.3 })
            .fromTo('.resume-btn', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5") // "-=0.5" starts the button animation before the list items finish
            .fromTo('aside', {y:50 ,opacity: 0 }, { y:0, opacity: 1, duration: 1 }); // "-=0.5" starts the button animation before the list items finish

    }, []);

    return (
        <main className="bg-gradient-to-r from-slate-500 to-slate-800 min-h-screen">
            <header className="flex items-center justify-between mx-20 py-3">
                <div className=" text-4xl logo text-primary font-extrabold">D.S</div>
                <nav className="flex items-center justify-between gap-x-12">
                    <ul className="flex items-center justify-between gap-x-8">
                        {navLinks.map((nav) => (
                            <li
                                className="flex items-end gap-1 justify-between hover:text-white hover:cursor-pointer relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primary before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primary after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                                key={nav.name}
                            >
                                <span className=" text-primary">0{nav.id} .</span>
                                <span className="text-secondary hover:text-primary transform duration-75 ">{nav.name}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button className="cursor-pointer resume-btn transition-all bg-slate-500 text-primary px-5 py-1 rounded-md
               border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px] border-primary">
                            Resume
                        </button>
                    </div>
                </nav>
            </header>
            <aside className="fixed bottom-0 left-20 py-3">
                <div className="flex flex-col gap-5">
                    <Github className="text-secondaryLight hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear" size={20} />
                    <Instagram className="text-secondaryLight hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear" size={20} />
                    <Twitter className="text-secondaryLight hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear" size={20} />
                    <Linkedin className="text-secondaryLight hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear" size={20} />
                    <div className=" ml-2 after:content-[''] after:w-[2px] after:h-20 after:bg-secondaryLight after:block after:mt-2"></div>
                </div>

            </aside>
            <aside className="fixed bottom-0 -right-10 py-3">
                <div className="flex flex-col after:content-[''] after:w-[2px] after:h-20 after:bg-secondaryLight after:block after:mt-52 ">
                    <p className="rotate-90 origin-left text-secondary hover:text-primary hover:cursor-pointer transform hover:-translate-y-1 duration-200 ease-linear  ">
                        <a href="#" >singhdepu566@gmail.com</a>
                    </p>
                    <div className=" ml-2 "></div>
                </div>
            </aside>

            <HeroSection />
            <About/>
        </main>
    );
}

export default Home;
