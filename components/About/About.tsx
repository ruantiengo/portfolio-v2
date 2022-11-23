import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import useTranslation from 'next-translate/useTranslation'
const About = () => {

  const [age, setAge] = useState<number>(22)
  
  const getAge = useMemo(() => {
    const today = new Date();
    const birthDate = new Date(2000,6,7);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }   
    return age;
  }, [age]);
  const { t } = useTranslation()
  return (
    <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 2.5 }}
      className="h-screen flex flex-col relative text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[12px] text-gray-500 text-2xl">
        {t("hero:aboutMenu")}
      </h3>

      <motion.img
        className="borde -mb-32 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover hidden sm:flex md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
        src="/second-pic.jfif"
        alt="Uma foto de Ruan Tiengo"
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          {t("about:title1")}
          <span className="underline decoration-[#F7AB0A]/50">{t("about:title2")}</span>{" "}
          {t("about:title3")}
        </h4>
        <p>
          {t("about:text",{
            age: getAge
          })}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
