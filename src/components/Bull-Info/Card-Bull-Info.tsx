import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";

const CardBullInfo = () => {
  const { state: bull } = useLocation();
  const imagePath = `../Cards/${bull.image}.png`;
  const linePath = "../Cards/Bull-Info/Line 7.png";

  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }, []);
  return (
    <motion.div
      className="flex flex-col w-full mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="flex">
        <div className="w-1/2 pl-8">
          <motion.img
            className="object-cover w-full"
            src={imagePath}
            alt={bull.title}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex flex-col items-center w-1/3 pl-8 justify-evenly">
          <div>
            <h1 className="pl-2 mb-2 text-5xl font-bold text-darkRed">
              {bull.title}
            </h1>
            <motion.img
              src={linePath}
              alt="Decorative line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="origin-left transform"
            />
            <motion.p
              className="pl-2 mt-2 text-2xl text-darkRed leading-[46px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {bull.description}
            </motion.p>
          </div>
          <motion.button
            className="flex items-center justify-center w-2/3 h-10 gap-2 text-2xl text-white rounded-full bg-darkRed"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FaWhatsapp className="w-7 h-7" /> Consultar por Whatsapp
          </motion.button>
        </div>
      </header>

      <main className="h-[60vh] flex flex-col lg:h-[70vh]">
        <nav className="flex h-10 gap-3 pl-16 mt-14">
          <motion.button
            className="p-3 text-white rounded-t-3xl bg-darkRed"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            FICHA
          </motion.button>
          <motion.button
            className="p-3 text-white bg-gray-400 rounded-t-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            DEP´S
          </motion.button>
          <motion.button
            className="p-3 text-white bg-gray-400 rounded-t-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            CARCASA
          </motion.button>
        </nav>

        <section className="w-full pl-8">
          {[
            { label: "RP", value: "Fecha de nacimiento" },
            { label: "ABB", value: "Registro" },
            { label: "PELO", value: "Familia" },
          ].map((item, index) => (
            <motion.ul
              key={index}
              className="flex justify-between p-2 border rounded-lg border-darkRed w-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <li className="w-1/2 text-left">{item.label}</li>
              <li className="w-1/2 text-left">{item.value}</li>
            </motion.ul>
          ))}
        </section>

        <div className="pl-3 mt-10">
          <motion.img
            src="../Cards/Bull-Info/Group 570.png"
            alt="Bull illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img
            className="pl-6"
            src={linePath}
            alt="Decorative line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.p
            className="w-2/6 pl-6 leading-[46px] text-2xl text-darkRed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </motion.p>
        </div>
      </main>
    </motion.div>
  );
};

export default CardBullInfo;
