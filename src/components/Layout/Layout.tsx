import { Title } from "../Typography/Title";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
export function Layout() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="Home/Home.png"
        alt="Toro"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-darkRed p-2 z-20">
        <Title className="text-white text-4xl">1er remate anual</Title>
      </div>

      {/* Icono de WhatsApp en la esquina superior izquierda */}
      <div className="absolute top-28 gap-4 flex flex-col  z-20">
        <FaWhatsapp className="bg-darkRed rounded-full p-2 w-10 h-10 text-white" />
        <FaFacebook className="bg-darkRed rounded-full p-2 w-10 h-10 text-white" />
        <FaInstagram className="bg-darkRed rounded-full p-2 w-10 h-10 text-white" />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <img src="Union/Union.png" alt="Union" className="w-full h-64 z-10" />

        {/* Contenido de la sección */}

        <div className="flex justify-between items-end p-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full z-20">
          <motion.div
            className="flex-1 flex ml-16 mb-16 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img src="Union/Line 1.png" alt="" className="inline h-28 w-2" />
            <p className="text-white text-start ml-2 max-w-[256px]">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum, obcaecati fuga aliquid quibusdam"
            </p>
          </motion.div>

          {/* Logo, header, y Genética Superior */}
          <motion.div
            className="flex items-center absolute left-1/2 transform -translate-x-2/3 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img src="Logo/Logo.png" alt="Logo" className="w-28" />
            <div className="flex flex-col items-center">
              <img
                src="Header/Header.png"
                alt="Header"
                className="w-80 h-14 object-contain"
              />
              <img
                src="Union/Genética Superior.png"
                alt="Genética Superior"
                className="object-contain w-48"
              />
            </div>
          </motion.div>

          {/* Lista con iconos */}

          <motion.div
            className="flex items-center space-x-2 z-30 mr-20 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ul className="flex flex-col gap-3 text-white">
              <li className="flex items-center border-2 p-2 rounded-full w-48 text-center">
                <FaWhatsapp className="mr-2 w-6 h-6" />{" "}
                <span>11 1234 5678</span>
              </li>
              <li className="flex items-center border-2 p-2 rounded-full w-48 text-center">
                <MdOutlineEmail className="mr-2 w-6 h-6" />{" "}
                <span>hola@gmail.com</span>
              </li>
              <li className="flex items-center border-2 p-2 rounded-full w-48 text-center">
                <MdLocationOn className="mr-2 w-6 h-6" />{" "}
                <span>Corrientes Arg</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
