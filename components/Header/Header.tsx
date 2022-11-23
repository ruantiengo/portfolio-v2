import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import LanguageButton from "./LanguageButton";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-20 items-center px-6">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center justify-center "
      >
        <SocialIcon
          url="https://www.youtube.com/channel/UCEWae4eZkVsba0rB7ndHg7A"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCEWae4eZkVsba0rB7ndHg7A"
          fgColor="gray"
          network="twitter"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCEWae4eZkVsba0rB7ndHg7A"
          fgColor="gray"
          network="linkedin"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCEWae4eZkVsba0rB7ndHg7A"
          fgColor="gray"
          network="instagram"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: +500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        
        <LanguageButton/>
        
        
      </motion.div>
    </header>
  );
};

export default Header;
