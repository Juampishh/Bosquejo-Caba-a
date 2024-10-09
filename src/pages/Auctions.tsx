import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Title } from "../components/Typography/Title";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Auctions() {
  useEffect(() => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="object-cover w-full"
            src="../Auctions/Header.png"
            alt=""
          />
          <div className="flex gap-5 pl-8">
            <motion.img
              className="absolute top-60 left-12 lg:top-44"
              src="../Auctions/Group 571.png"
              alt=""
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              className="absolute top-60 lg:top-44"
              src="../Genetic/Line 5.png"
              alt=""
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col w-full pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex pl-8">
          <img src="../Auctions/Line 10.png" alt="" />
          <img className="-ml-3" src="../Auctions/Group 572.png" alt="" />
        </div>
        <div className="relative flex justify-center w-full pt-10">
          <img src="../Auctions/Body.png" alt="" />
          <div className="relative">
            <img src="../Auctions/Rectangle 305.png" alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="flex flex-col text-xl text-center text-white">
                1er remate anual <span>2024</span>
              </p>
              <div className="flex gap-2 mt-5">
                <FaRegCalendarAlt className="mt-2 text-2xl text-white" />
                <p className="mt-2 text-white">Agosto 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-8 mt-14">
          <div className="flex">
            <img src="../Auctions/Line 10.png" alt="" />
            <img className="-ml-3" src="../Auctions/Group 574.png" alt="" />
          </div>
          <div className="flex gap-20">
            <motion.div
              className="mt-5 ml-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Title className="text-6xl text-darkRed">2024</Title>
              <ul className="mt-5">
                {[
                  "Enero",
                  "Febrero",
                  "Marzo",
                  "Abril",
                  "Mayo",
                  "Junio",
                  "Julio",
                  "Agosto",
                ].map((mes, index) => (
                  <li
                    key={index}
                    className="mt-3 ml-5 text-xl list-disc text-darkRed"
                  >
                    {mes}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="flex pt-10 ">
              <img className="mb-4" src="../Auctions/Line 12.png" alt="" />
              <div className="p-4">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    className="flex p-7"
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }} // staggered animation
                  >
                    <div className="border h-[55px] w-[70px] border-black">
                      <div className="text-center bg-darkRed">
                        <p className="text-center text-white">Jul</p>
                      </div>
                      <div className="text-center">13/7</div>
                    </div>
                    <div>
                      <img src="../Auctions/Text-2.png" alt="" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
