import React from 'react'
import {motion} from 'framer-motion'
import { CardExperienceType } from '../../data/cardExperienceList'
import { getTecImage } from '../../helpers/getTecImage'
import useTranslation from 'next-translate/useTranslation'
type Props = CardExperienceType

function ExperienceCard({aboutMe, companyName, img}: Props) {
  const { t } = useTranslation()
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0
    w-[95%] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img 
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        src={img.src} alt={img.alt}
        className='w-20 h-20 rounded-full md:rounded-full  object-cover object-center'/>

        <div className='px-0 md:px-10 '>
            <h4 className='text-3xl font-light'>{aboutMe.role}</h4>
            <p className='font-bold text-2xl my-2'>
              {companyName}
            </p>
            <div className='flex space-x-2 my-2'>
             {aboutMe.tecs.map((tec,i) => (
                  <img 
                  key={i}
                  className='h-7 w-7 rounded-full'
                  src={getTecImage(tec)}></img>
               ))}
               
            </div>
            <p className='py-5 text-gray-300'>{t("experiences:startWork")}: {aboutMe.dateStart} - {t("experiences:endWork")}: {aboutMe.dateEnd}</p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
              <li>Summary</li>
              <li>Summary</li>
              <li>Summary</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard