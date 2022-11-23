import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SkillType } from '../../data/skillsList'
type Props = {
    directionLefft?: boolean,
    skill: SkillType
}

const Skill = ({directionLefft, skill}: Props) => {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <div className='group relative flex cursor-pointer' onMouseOver={() => {setIsHovering(true)}} onMouseLeave={() => { setIsHovering(false)}}>
        <motion.img
            initial={{
                x: directionLefft ? -50: 50,
                opacity: 0, 
            }} 
            transition={{duration: 1}}
            whileInView = {{ opacity: 1, x: 0}}
            src={skill.img.src}
            alt={skill.img.alt}
            className='rounded-full border border-none object-cover w-16 h-16 sm:w-24 sm:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale
            transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-10000 ease-in-out group-hover:bg-white
        w-16 h-16 sm:w-24 sm:h-24 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.percentage}</p>
            </div>
        </div>
        <span className={`${isHovering ? '' : 'hidden'} absolute top-0 left-[30%] rounded-md color-black opacity-1 group-hover:bg-black p-2 flex items-center justify-center  `}>{skill.img.alt}</span>
    </div>
  )
}

export default Skill