import React from 'react';
import Title from './component/Title';
import ProjectCard from './component/ProjectCard';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

function Projects() {

  const fadeRef = useScrollFadeIn();

  return (
    <section ref={fadeRef} className="mx-4 my-12 md:mx-52 md:my-16">
      <Title number={3} title={'Some Things I’ve Built'} />
      <ul className="mt-16 mx-12 flex flex-col items-center  gap-6 ">
        <ProjectCard imageSrc={'/assets/evento.png'} projectName={'Evento Web '} projectDescription="A dynamic web application built with Next.js and Framer Motion, providing a seamless user experience to explore cities hosting events. Users can fetch data from an API to view events by location, search for specific cities, and enjoy smooth animations for enhanced interactivity. Perfect for discovering event hotspots with style and efficiency."
              skills={['Next.js', 'React', 'TailwindCss','Prisma','TypeScript','zod']}
              githubLink={'https://github.com/trdxDeepu/evento-event'}
              projectLink={'https://evento-event-nine.vercel.app/'}
              />
        <ProjectCard imageSrc={'/assets/realestate.png'} projectName={'Real Estate App'} projectDescription="A modern real estate platform built with React and Tailwind CSS, enabling users to list properties for sale or rent. It features secure user authentication via Google Auth and utilizes Firebase for backend services, including real-time data storage and retrieval. The app delivers a seamless and responsive user experience, making property management effortless."
              skills={['JavaScript', 'React', 'TailwindCss','Firebase','Authentication' ]}
              githubLink={'https://github.com/trdxDeepu/EstateApp'}
              projectLink={'https://estate-app-bice.vercel.app/'}
              />


      </ul>

    </section>
  );
}

export default Projects;
