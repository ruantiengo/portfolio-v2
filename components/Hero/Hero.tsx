import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { menuLink } from "../../data/menuList";
import useTranslation from 'next-translate/useTranslation'

const Hero = () => {
  let { t } = useTranslation()
  
  const [text] = useTypewriter({
    words: [t('hero:greeting1'),t('hero:greeting2'),t('hero:greeting3')],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-2 justify-center items-center text-center overflow-hidden z-20">
      <BackgroundCircles />
      <img
        src="/profile.jpg"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      ></img>

      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[11px] ">
        {t('hero:position')}
      </h2>
      <h1 className="text-2xl lg:text-4xl">
        <span>{text}</span>
        <Cursor cursorColor="#F7ABBA" />
      </h1>

      <div className="z-20 pt-4 ">
        {menuLink(t).map((menu, i) => {
          return (
              <button className="heroButton" key={i}>
                 <Link href={menu.link} className="w-[100%] h-[100%]">
                    {menu.text}
                  </Link>
                </button>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
