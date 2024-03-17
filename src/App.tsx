import { motion } from "framer-motion";
import PageAnimation from "./components/Animation";
import { config } from "./config";
import { MdVerified } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";
import { SiDiscord, SiGithub } from "react-icons/si";

export default function App() {


  useEffect(() => {
    let i = 0;
    let text = config.name;
    let speed = 500;

    setInterval(() => {
      // Check if the text is not fully displayed
      if (i === text.length) {
        i = 0;

        document.title = text.substring(0, i + 1);
      }

      if (i < text.length) {
     
        document.title = text.substring(0, i + 1);
        i++;
      }
    }, speed);
    

    return () => {
      document.title = text
    };
  }, []);

  return (
    <PageAnimation>
      <img
        src={config.avatar}
        alt="avatar"
        className="rounded-full mx-auto hover:animate-pulse"
        width={96}
        height={96}
      />

      <h1 className="text-[20px] font-bold text-white text-center mt-4">
        {config.name} {config.displayVerifyBadge &&  <MdVerified className="inline text-blue-500" />}
      </h1>
      <p className="text-[16px] text-white text-center mt-2">
        <Typewriter
          options={{
            strings: config.typewriter_strings,
            deleteSpeed: 20,
            delay: 70,
            autoStart: true,
            loop: true,
          }}
        />
      </p>

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
              <SiGithub className="text-white text-2xl mx-2" size="1.2em" />
            )}
            {social.name === "mail" && (
              <CiMail className="text-white text-2xl mx-2" size="1.3em" />
            )}
            {social.name === "discord" && (
              <SiDiscord
                className="text-white text-2xl mx-2"
                size="1.2em"
              />
            )}
          </motion.a>
        ))}
      </div>

      {/* buttons */}
      <div className="flex flex-col items-center space-y-5 justify-center mt-20">
        {config.buttons.map((button, index) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            className={`inline-block bg-darkLight w-10/12 md:w-1/2 font-bold p-3 rounded-[8px] text-white text-center leading-12 border-2 border-darkBorder ${
              button.shake && "shake-animation"
            }`}
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
