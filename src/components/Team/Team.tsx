import { motion } from "framer-motion";
import { Title } from "../Typography/Title";
import {
  containerAnimation,
  titleAnimation,
} from "../About/Animations/Animations";

export function Team() {
  return (
    <>
      <div className="w-full h-[50vh] lg:h-[60vh] mt-16">
        <motion.div
          className="w-full"
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex p-5 mt-8 w-80 bg-darkRed rounded-r-3xl"
            variants={containerAnimation}
          >
            <div className="flex items-center flex-1 ml-14">
              <img src="Union/Line 1.png" alt="" className="inline w-2 h-14" />
              <motion.div variants={titleAnimation}>
                <Title className="text-white text-start ml-5 text-4xl max-w-[256px]">
                  Equipo
                </Title>
              </motion.div>
            </div>
          </motion.div>
          <div className="flex items-center justify-center w-full gap-2 mt-16 ">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <img
                  className="object-cover h-56 w-44 rounded-tr-3xl shadow-dark"
                  src="Team/Team.png"
                  alt=""
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
