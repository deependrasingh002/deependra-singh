import { useEffect, useState, useRef } from 'react';
import LandingComponent from './components/LandingComponent';
import { gsap } from 'gsap';
import Home from './components/Home';


const App = () => {
  const emojiRef = useRef(null);

  const isMobileDevice = () => {
    return window.innerWidth <= 768; // Fixed the condition from 'window.length'
  };

  const [isMobile, setIsMobile] = useState(isMobileDevice());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // GSAP animation for the emoji
  useEffect(() => {
    if (isMobile) 
      gsap.fromTo(emojiRef.current, 
      { 
        scale: 0, 
        rotation: 360, 
        y: 50,        // Start 50px down
        opacity: 0    // Start invisible
      }, 
      { 
        scale: 1, 
        rotation: 0, 
        y: 0,        // End at the original position
        opacity: 1,  // End fully visible
        duration: 1.5, // Longer duration for more visual impact
        ease: "bounce.out" // Bounce effect on end
      });
  
  }, [isMobile]);

  return (
    <>
      
        <div className='min-h-screen w-full '>
        <LandingComponent />
 
        </div>
    
    </>
  );
}

export default App;
