import CardBullInfo from "../components/Bull-Info/Card-Bull-Info";
import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function BullInfo() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full">
        <div>
          <img
            className="object-cover w-full"
            src="../Genetic/HeaderGenetic.png"
            alt=""
          />
          <div className="flex gap-5 pl-8">
            <img
              className="absolute top-60 left-12 "
              src="../Genetic/Group 562.png"
              alt=""
            />
            <img
              className="absolute top-60 "
              src="../Genetic/Line 5.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-10 ">
        <div className="flex pl-8">
          <img src="../Genetic/Line 6.png" alt="" />
          <img src="../Genetic/Toros-Padres.png" alt="" />
        </div>
      </div>
      <div className="w-full">
        <CardBullInfo />
      </div>
      <Footer />
    </div>
  );
}
