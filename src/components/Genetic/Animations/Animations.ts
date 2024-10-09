// Variantes de animación para el contenedor
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Las tarjetas aparecerán escalonadamente
    },
  },
};

// Variantes de animación para cada tarjeta
export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
