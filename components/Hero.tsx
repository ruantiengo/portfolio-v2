import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { menuLink } from "./menuList";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["helloThere.tsx", "welcome.cs", "enjoyYourVisit.tsx"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden z-20">
      <BackgroundCircles />
      <img
        src="/profile.jpg"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      ></img>

      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[11px] ">
        Software Engineer
      </h2>
      <h1 className="text-2xl lg:text-4xl">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7ABBA" />
      </h1>

      <div className="z-20">
        {menuLink.map((menu) => {
          return (
              <button className="heroButton">
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
