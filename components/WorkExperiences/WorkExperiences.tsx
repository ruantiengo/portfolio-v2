import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import useTranslation from 'next-translate/useTranslation'
import { cardListExperience } from '../../data/cardExperienceList'
type Props = {}

const WorkExperiences: React.FC<Props> = (props) => {
  const { t } = useTranslation()
  return (
    <motion.div 
        initial={{
            opacity: 0
        }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-sm md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-16 uppercase tracking-[12px] text-gray-500 text-2xl'>{t("hero:experienceMenu")}</h3>
       
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/70 absolute top-22'>
            {
              cardListExperience(t).map((card,i) => (
                <ExperienceCard companyName={card.companyName} key={i} aboutMe={card.aboutMe} img={card.img} />
              ))
            }
        </div>
    </motion.div>
  )
}

export default WorkExperiences

