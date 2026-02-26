import { useEffect, useState } from "react";
import LandingComponent from "./components/LandingComponent";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check(); // run on mount
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#080a0f]">
      {/* Only show custom cursor on non-mobile devices */}
      {!isMobile && <CustomCursor />}
      <LandingComponent />
    </div>
  );
};

export default App;
