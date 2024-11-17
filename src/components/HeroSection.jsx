import gsap from "gsap"
import { useEffect} from "react"


const HeroSection = () => {

    
useEffect(()=>{

    
    gsap.fromTo('div h1', {
        y: 100,
        opacity: 0,

    }, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        delay: 1.2,
        stagger: 0.8
    }
    )
},[])




    return (
        <section className=" mx-4 my-12 md:mx-52 md:my-16">
            <div className="flex  items-center md:items-start flex-col  gap-y-4">
                <h1 className="space-x-10 text-xl  md:text-2xl w-full text-primary tracking-wider">Hi, My name is </h1>
                <h1 className="text-3xl md:text-6xl font-bold tracking-wider text-secondary flex items-end gap-x-3">
                    <span className="mr-16 md:mr-0 whitespace-nowrap">Deependra Singh</span>
                    <span className="block md:w-2 md:h-2 bg-secondary rounded-full mb-2"></span>
                </h1>
                <h1 className="text-3xl md:text-6xl font-bold text-slate-400 flex items-end gap-x-3 ">
                    <span>I built things for Web as Front End Developer</span>
                   
                </h1>
                <h1 className="text-2xl md:text-4xl font-bold text-slate-400 mt-2 " >
                    I&apos;m a Front End Developer with the Skills of React and Next.js and have basic knowledge about Angular.
                </h1>
                
                {/* <h1 className="mt-10 mr-8 md:mr-0 relative outline outline-1 outline-primary w-32 h-12 px-7 text-xl py-2  rounded-md bg-transparent text-secondary hover:text-black transform duration-200 ease-out isolation-auto z-10 border-2 border-primary font-semibold hover:cursor-pointer
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ">
                    Resume
                </h1> */}
 
<h1 class="md:mt-10 group relative min-h-[50px] w-40 overflow-hidden border border-primary bg-white  shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 text-black before:bg-primary before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-primary after:duration-500 hover:text-white hover:before:h-full hover:after:h-full active:scale-90">
      <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-primary before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-primary after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
      <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white font-bold">Resume</span>
    </h1>
            </div>
        </section>
        )
}

export default HeroSection