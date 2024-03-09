import PageAnimation from "../components/Animation";
import TopButtons from "../components/TopButtons";
import { motion } from "framer-motion";
import { config } from "../config";


export default function MyWork() {
  return (
    <PageAnimation>
      <TopButtons href={"/"} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center mt-4">
          My Work
        </h1>
        <p className="text-[16px] text-white text-center mt-2">
          These are the projects I have worked on in the past.
        </p>
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.projects.map((project, index) => (
              <div
                key={index}
                className="bg-darkLight border-2 border-darkBorder rounded-[8px] p-4"
              >
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