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
        <ProjectCard imageSrc={'/assets/evento.png'} projectName={'Evento Web '} projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius, officia ipsum molestiae porro neque
              mollitia distinctio nulla eos beatae! lorem40"
              skills={['Next.js', 'React', 'TailwindCss','Prisma','TypeScript','zod']}
              githubLink={'https://github.com/trdxDeepu/evento-event'}
              projectLink={'https://evento-event-nine.vercel.app/'}
              />
        <ProjectCard imageSrc={'/assets/realestate.png'} projectName={'Real Estate App'} projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius, officia ipsum molestiae porro neque
              mollitia distinctio nulla eos beatae! lorem40 wflwjfwejfjwefijwef wefwejfojwefi wefojwefijew"
              skills={['JavaScript', 'React', 'TailwindCss','Firebase','Authentication' ]}
              githubLink={'https://github.com/trdxDeepu/EstateApp'}
              projectLink={'https://estate-app-bice.vercel.app/'}
              />


      </ul>

    </section>
  );
}

export default Projects;
