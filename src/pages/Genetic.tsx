import { Footer } from "../components/Footer/Footer";

import GeneticLayout from "../components/Genetic/GeneticLayout";
import Navbar from "../components/Navbar/Navbar";

export default function Genetic() {
  return (
    <div className="w-full">
      <Navbar />
      <GeneticLayout />

      <Footer />
    </div>
  );
}
