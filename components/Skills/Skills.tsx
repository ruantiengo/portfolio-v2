import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { skillsList } from '../../data/skillsList'
import useTranslation from 'next-translate/useTranslation'
type Props = {}

const Skills = (props: Props) => {
  const { t } = useTranslation()
  return (
    <motion.div 
        initial={{
            opacity: 0
        }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5 }}
        className='flex relative flex-col text-center md:text-left xl:flex-row mw-[2000px] xl:px-10 min-h-screen overflow-hidden justify-center xl:space-y-0 mx-auto items-center'>
          <h3 className='absolute top-20 uppercase tracking-[12px] text-gray-500 text-2xl'>{t("hero:skillsMenu")}</h3>
          <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm'>{t("skills:hoverTheSkill")}</h3>
    
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
              {
                skillsList.map((skill, i) => (
                  <Skill skill={skill} key={i} directionLefft={i % 2 == 0}/>
                ))
              }
          </div>
    </motion.div>
  )
}

export default Skills