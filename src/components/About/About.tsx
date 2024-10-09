import { motion } from "framer-motion";
import { Title } from "../Typography/Title";
import {
  containerAnimation,
  imageAnimation,
  paragraphAnimation,
  titleAnimation,
} from "./Animations/Animations";

export function About() {
  return (
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
              Nosotros
            </Title>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center w-full"
        variants={containerAnimation}
      >
        <motion.img
          src="About/Header (2).png"
          alt="Union"
          variants={imageAnimation}
        />
        <motion.div className="w-2/3" variants={paragraphAnimation}>
          <p className="text-start text-darkRed leading-[46px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center w-full gap-5 mt-4"
        variants={containerAnimation}
      >
        <div className="relative flex flex-col gap-2 mt-2.5">
          <motion.img src="About/Line 3.png" alt="" variants={imageAnimation} />
          <motion.img
            className="h-full"
            src="About/Location.png"
            alt=""
            variants={imageAnimation}
          />
          <motion.img
            src="About/Group 561.png"
            alt=""
            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            variants={imageAnimation}
          />
          <motion.p
            className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 left-1/4 top-2/3 w-44"
            variants={paragraphAnimation}
          >
            Corrientes, Argentina
          </motion.p>
        </div>

        <div className="flex flex-col w-1/4 mb-24">
          <motion.img
            src="About/GCM-Angus 1.png"
            alt=""
            variants={imageAnimation}
          />
          <motion.p
            className="flex flex-col text-darkRed"
            variants={paragraphAnimation}
          >
            Sed ut
            <span>
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et.
            </span>
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
