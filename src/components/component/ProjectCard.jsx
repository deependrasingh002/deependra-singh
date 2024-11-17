import { ArrowRightFromLineIcon, ExternalLink, Github, Link } from 'lucide-react';
import React, { useRef } from 'react'

export default function ProjectCard({ imageSrc, projectName, projectDescription, skills ,githubLink,projectLink }) {



  return (
    <li className="flex flex-col md:flex-row items-center gap-24 relative"> {/* Added relative positioning here */}
      <div className="md:w-[540px] md:relative rounded-md  md:mb-40">
        {/* Overlay with default opacity 50, and opacity transition only on hover */}
        <div className="md:absolute inset-0 hover:cursor-pointer bg-primary opacity-50 hover:opacity-0 transition-opacity duration-500"></div>

        {/* Image */}
        <img
          src={imageSrc}
          alt="eventoImage"
          height={600}
          width={700}
          className="w-full  h-full object-cover"
        />
      </div>

      <div className="flex flex-col  items-center  md:items-end gap-2 md:mb-52">
        <span className="text-lg text-primary">Featured Project</span>
        <span className="text-secondary font-bold text-3xl">{projectName}</span>
        {/* Updated the position of p tag to be absolute to the li */}
        {skills && skills.length > 0 && (
          <ul className="text-secondary flex text-xs md:text-sm md:items-center md:justify-between gap-2 min-w-fit w-[80px] md:w-[370px] mt-4">
            {skills.map((skill, index) => (
              <li key={index} className='hover:translate-x-[1px] hover:cursor-pointer'>{skill}</li>
            ))}
          </ul>
        )}
        <div className="  min-w-fit md:w-[500px] rounded-md  text-primary bg-secondaryLight/60  drop-shadow-xl  ">
          <p className='p-3'>
            {projectDescription}
          </p>
        </div>

        <div className='mt-2  mb-2 flex justify-between items-center gap-3'>
          <a href={githubLink}  target='_blank'>

          <Github className='text-secondary  hover:cursor-pointer ' size={15} />
          </a>
          <a href={projectLink} target='_blank'>

          <ExternalLink
            className="text-secondary hover:cursor-pointer hover:translate-x-[2px] transition-transform duration-300"
            size={15}
            />
            </a>

        </div>

      </div>
    </li>
  )
}
