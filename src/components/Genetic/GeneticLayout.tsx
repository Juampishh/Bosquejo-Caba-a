import { useState } from "react";
import { ButtonListGenetic } from "./Button-List";
import { CardContainer } from "./CardContainer";

export default function GeneticLayout() {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  const handleSelect = (breed: string | null) => {
    setSelectedBreed(breed);
  };
  return (
    <>
      <div className="w-full">
        <div>
          <img
            className="object-cover w-full"
            src="Genetic/HeaderGenetic.png"
            alt=""
          />
          <div className="flex gap-5 pl-8">
            <img
              className="absolute top-60 left-12 "
              src="Genetic/Group 562.png"
              alt=""
            />
            <img className="absolute top-60 " src="Genetic/Line 5.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full h-screen pt-10 overflow-scroll ">
        <div className="flex pl-8">
          <img src="Genetic/Line 6.png" alt="" />
          <img src="Genetic/Toros-Padres.png" alt="" />
        </div>
        <ButtonListGenetic onSelect={handleSelect} />
        <CardContainer selectedBreed={selectedBreed} />
      </div>
    </>
  );
}
