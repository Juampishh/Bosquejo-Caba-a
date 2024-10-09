import { Link, useNavigate } from "react-router-dom";
import { NAVBAR_ITEMS } from "./NavbarItem";
import { motion } from "framer-motion";
import { linkVariants, logoVariants } from "./Animations/Animations";
import { useState } from "react";

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  const handleButtonClick = (title: string) => {
    if (title === "Sobre Nosotros") {
      scrollToSection("about");
    } else if (title === "Contacto") {
      scrollToSection("footer");
    }
  };

  return (
    <div className="relative z-10 flex items-center w-full h-16 bg-darkRed">
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
        className="relative z-50 flex items-center w-1/2 gap-2 pl-4"
      >
        <div className="relative z-50">
          <img
            className="object-cover w-20 h-20 mt-1 rounded-full bg-darkRed"
            src="../Logo/Logo.png"
            alt="Logo de la marca"
          />
        </div>
        <div>
          <img
            className="h-10"
            src="../Header/Header.png"
            alt="Nombre de la Cabaña"
          />
        </div>
      </motion.div>
      {/* Sección del menú de navegación */}
      <nav className="w-1/2">
        <ul className="relative flex font-medium text-white justify-evenly font-sedan">
          {NAVBAR_ITEMS.map((link, index) => (
            <motion.li
              key={link.id}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              custom={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              {link.title === "Sobre Nosotros" || link.title === "Contacto" ? (
                <button
                  onClick={() => handleButtonClick(link.title)}
                  className="hover:text-gray-300"
                >
                  {link.title.toUpperCase()}
                </button>
              ) : (
                <Link
                  className="hover:text-gray-300"
                  to={link.url.toLowerCase()}
                >
                  {link.title.toUpperCase()}
                </Link>
              )}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-white w-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
