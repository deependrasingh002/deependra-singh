



import { useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 })
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 1.6,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, 
[]
);

  return (
    <>
    <div className="min-h-screen bg-black">
    <div className="ball bg-primary w-4 h-4 fixed top-0 left-0 rounded-full"></div> 
      <div className="ball bg-primary w-4 h-4 fixed top-0 left-0 rounded-full"></div>  
      <div className="ball bg-secondary w-4 h-4 fixed top-0 left-0 rounded-full"></div>  
      <div className="ball bg-secondaryLight w-4 h-4 fixed top-0 left-0 rounded-full"></div>  
      <div className="ball bg-primary w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <h2 className="text-center text-4xl font-bold text-blue-900">Mouse Hover Effect</h2>
    </div>
    </>
  );
};

export default CustomCursor;

