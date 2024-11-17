import React from 'react'

function Title({number,title}) {
  return (
    <div className="flex flex-row items-center gap-x-5 text-xl">
        <span className="text-primary text-sm md:text-lg">0{number}.</span>
        <span className="text-secondary font-bold   md:text-3xl whitespace-nowrap">
         {title}
        </span>
        <div className="after:content-['']  md:after:w-64 after:h-[2px] after:bg-secondaryLight after:block after:mt-2 mb-3"></div>
      </div>
  )
}

export default Title
