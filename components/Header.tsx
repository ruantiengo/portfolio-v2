import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto x-20 xl:items-center">
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
        className="flex flex-row items-center"
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
          network="facebook"
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
        <SocialIcon
          url="https://www.youtube.com/channel/UCEWae4eZkVsba0rB7ndHg7A"
          network="linkedin"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
