import React from 'react'
import { motion
 } from 'framer-motion'
const BackgroundCircles = () => {
  return (
    <motion.div 
        initial={{
            opacity: 0
        }}
        animate={{
           scale: [1,2,2,3,1],
           opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
           borderRadius: ["20%","20%","50%","70%","20%"]
        }}
        transition={{
            duration: 2.5
        }}
        className='relative flex justify-center items-center z-0'>
        <div className='border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 absolute animate-ping'></div>
        <div className='border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 absolute animate-ping'></div>
        <div className='border border-[gray] rounded-full h-[500px] w-[500px] lg:h-[600px] lg:w-[600px] mt-52 absolute animate-pulse'></div>
        <div className='border border-[#f7ab0a] opacity-20 rounded-full h-[650px] w-[650px] mt-52 absolute animate-ping'></div>

    </motion.div>
  )
}

export default BackgroundCircles