import { useState } from "react";
import useScrollFadeIn from '../hooks/useScrollFadeIn'; // Make sure the path is correct
import Title from "./component/Title";

function Experience() {
  const tabs = [
    { id: 'Tab1', company:'Refread', title: 'Front End Developer', date: 'July 2024-Oct 2024', content: 'I joined as Front End Developer role where i have learn about AngularJs and Angular where i contribute in these two on front end and connected front-end applications to back-end services using RESTful APIs, ensuring smooth data integration.' },
    { id: 'Tab2',company:'Thor Solutions',title:'React Developer', date: 'Oct 2023-Apr 2024', content: 'Worked as a React developer Intern at Thor Solution,where i have used all my skills in creating projects, and learn how to be a part of team, how to work in industry level. I have learned new things like headless CMS, and Gsap animation,Next.js' },

  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const fadeRef = useScrollFadeIn(); // Apply fade-in effect to the entire component

  return (
    <section ref={fadeRef} className="mx-4  md:mx-52 md:my-16">
      <Title  number={2} title={"Where I've Worked"}/>
      <div className="md:ml-14 md:mx-0 mx-6 mt-6 flex flex-col md:flex-row md:gap-14">
        {/* Sidebar with scrollable tabs */}
        <div className="w-full md:w-1/4 p-4 md:overflow-visible">
          <div className="flex gap-4 md:flex-col md:gap-2 flex-nowrap md:overflow-visible overflow-x-auto scrollable-container mb-4">
            {tabs.map((tab) => (
              <p
                key={tab.id}
                className={`p-2 mt-3 w-fit text-white/75 whitespace-nowrap cursor-pointer ${activeTab === tab.id
                    ? 'opacity-50  md:border-l-4 text-white  border-primary'
                    : ''
                  } hover:bg-secondaryLight   hover:opacity-80 transition-all duration-300`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="text-secondary ">{tab.company}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Right-side content area */}
        <div className="w-full md:w-3/4 p-4">
          <div className="w-full p-4">
            {/* Dynamically render the active tab's content */}
            <h2 className="text-xl font-bold md:mb-0 text-secondary ">{activeTabData.title } {" "} <span className="text-primary hover-underline-animation hover:cursor-pointer">@ {activeTabData.company}</span></h2>
            <span className="text-secondaryLight ">{activeTabData.date}</span>
            <p className=" mt-2 text-secondary md:w-8/12">{activeTabData.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
