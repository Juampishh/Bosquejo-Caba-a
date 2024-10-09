import { motion } from "framer-motion";
import { Title } from "../Typography/Title";
import {
  containerAnimation,
  titleAnimation,
} from "../About/Animations/Animations";

export function Team() {
  return (
    <>
      <div className="w-full h-[50vh] mt-16">
        <motion.div
          className="w-full"
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-80 bg-darkRed mt-8 p-5 rounded-r-3xl flex"
            variants={containerAnimation}
          >
            <div className="flex-1 flex ml-14 items-center">
              <img src="Union/Line 1.png" alt="" className="inline h-14 w-2" />
              <motion.div variants={titleAnimation}>
                <Title className="text-white text-start ml-5 text-4xl max-w-[256px]">
                  Equipo
                </Title>
              </motion.div>
            </div>
          </motion.div>
          <div className="w-full flex gap-2 justify-center items-center mt-16 ">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <img
                  className="w-44 h-56 object-cover rounded-tr-3xl shadow-dark"
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
