import React from "react";
import { config } from "./config";
import { MdVerified } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoLogoDiscord } from "react-icons/io5";
import { motion } from "framer-motion";
import PageAnimation from "./animation";

export default function App() {
  return (
    <PageAnimation>
      <img
        src={config.avatar}
        alt="avatar"
        className="rounded-full mx-auto"
        width={96}
        height={96}
      />
      <h1 className="text-[20px] font-bold text-white text-center mt-4">
        {config.name} <MdVerified className="inline text-blue-500" />
      </h1>
      <p className="text-[16px] text-white text-center mt-2">{config.bio}</p>

      <div className="flex justify-center mt-5">
        {config.socials.map((social, index) => (
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="inline-block"
            href={social.href}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            {social.name === "github" && (
              <FiGithub className="text-white text-2xl mx-2" size="1.3em" />
            )}
            {social.name === "mail" && (
              <CiMail className="text-white text-2xl mx-2" size="1.3em" />
            )}
            {social.name === "discord" && (
              <IoLogoDiscord className="text-white text-2xl mx-2" size="1.3em" />
            )}
          </motion.a>
        ))}
      </div>

      {/* buttons */}
      <div className="flex flex-col items-center space-y-5 justify-center mt-20">
        {config.buttons.map((button, index) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={`inline-block bg-darkLight w-10/12 md:w-1/2 font-bold p-3 rounded-[8px] text-white text-center leading-12 border-2 border-darkBorder ${button.name === "✨ Donate" && "shake-animation"}`}
            href={button.href}
            rel="noreferrer"
            key={index}
          >
            {button.name}
          </motion.a>
        ))}
      </div>
    </PageAnimation>
  );
}
