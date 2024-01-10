import React from "react";
import PageAnimation from "../animation";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Movie Swiper",
      description:
        "A discord bot that allows you to swipe through movies and find something to watch.",
      link: "https://www.movieswiper.xyz",
      image: "https://www.movieswiper.xyz/logo-new-nbg.png",
    },
    {
      name: "Robly Bot",
      description: "A global discord economy bot, with a lot of cool features for your server.",
      link: "https://roblybot.xyz",
      image: "https://cdn.roblybot.xyz/files/NewRoblyWithoutBg.png",
    },
    {
      name: "Includer.js",
      description:
        "A tiny JavaScript library that enables you to inject HTML content into the current page from external HTML files.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
      link: "https://github.com/latze05/includerjs",
    },
  ];

  return (
    <PageAnimation>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center mt-4">
          My Projects
        </h1>
        <p className="text-[16px] text-white text-center mt-2">
          These are the projects I have worked on.
        </p>
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div className="bg-darkLight border-2 border-darkBorder rounded-[8px] p-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-[8px] bg-blur"
                />
                <h1 className="text-2xl font-bold text-white mt-2">
                  {project.name}
                </h1>
                <p className="text-white mt-2">{project.description}</p>

                {/* div at the bottom of the card */}
                <div className="flex flex-row items-center justify-between mt-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-dark text-white rounded-[8px] mt-2 p-2"
                    onClick={() => window.open(project.link)}
                  >
                    View project
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}
