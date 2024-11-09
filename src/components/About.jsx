import useScrollFadeIn from '../hooks/useScrollFadeIn'; // Make sure the path is correct

export default function About() {
    const fadeRef = useScrollFadeIn(); // Apply fade-in effect

    const workedon = [
        { skill: 'HTML' },
        { skill: 'CSS' },
        { skill: 'TailwindCss' },
        { skill: 'React.js' },
        { skill: 'Next.js' },
        { skill: 'Angular' },
    ];

    return (
        <section ref={fadeRef} className="mx-4 my-12 md:mx-52 md:my-36">
            <div className="flex flex-row items-center gap-x-5 text-2xl">
                <span className="text-primary">01.</span>
                <span className="text-secondary font-bold text-xl md:text-3xl tracking-wider whitespace-nowrap">
                    About Me
                </span>
                <div className="after:content-[''] after:w-20 md:after:w-64 after:h-[2px] after:bg-secondaryLight after:block after:mt-2 mb-3"></div>
            </div>
            
            <div className="mt-6 text-xl text-secondary flex flex-col md:flex-row items-center justify-between">
                <div>
                    <p className="md:w-[700px]">
                        Hello! My name is Deependra Singh and I enjoy creating things that live on the internet for a better user interface and experience.
                        My interest in web development started during my college period, so I started learning the basics of web development and creating projects
                        to gain hands-on experience. My main focus has been on <span className="hover:cursor-pointer link link-underline link-underline-black text-primary">React.js.</span> 
                        I completed an internship as a <span className="text-primary">React developer</span> at <span className="text-primary">Thor Solutions</span>, gaining hands-on experience working on projects and collaborating with teams.
                    </p>

                    <div className="mt-5 text-[16px]">
                        <p>Here are a few technologies I have worked with:</p>
                        <div className="mt-2 grid grid-cols-2">
                            <div className="grid grid-cols-2 gap-1">
                                {workedon.map((item, index) => (
                                    <span key={index} className="font-bold text-sm flex items-center gap-1 transition-transform duration-300 hover:translate-x-1">
                                        <span className="text-primary">{">"}</span> {item.skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="outline outline-2 outline-primary relative h-64 w-64 hover:cursor-pointer mt-16">
                    <img
                        src="/depu.png"
                        alt="Image description"
                        className="absolute grayscale hover:grayscale-0 hover:-translate-x-2 hover:-translate-y-2 transition-all duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
