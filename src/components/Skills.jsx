import React from 'react'
import Title from './component/Title'
import { TvIcon } from 'lucide-react'

function Skills() {
    return (
        <section className="mx-4 my-12 md:mx-52 md:my-16">
            <Title number={4} title={"Some Skills That I've"} />
            <div className='mt-10 flex items-end justify-center relative'>

                <button class="before:ease relative h-16 w-44 text-xl overflow-hidden border border-secondary bg-secondary shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40">
                    <span class="relative z-10">My Skills</span>
                </button>
                
            </div>

        </section>
    )
}

export default Skills
