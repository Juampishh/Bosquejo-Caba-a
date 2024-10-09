import { BULLS } from "../../helpers/Bulls";
import Card, { BullProps } from "./Card";
import { motion } from "framer-motion";

interface CardContainerProps {
  selectedBreed: string | null;
}

export function CardContainer({ selectedBreed }: CardContainerProps) {
  const filteredBulls = selectedBreed
    ? BULLS.filter((bull: BullProps) => bull.breed === selectedBreed)
    : BULLS;

  return (
    <div className="w-full h-screen pt-10 pl-10">
      <motion.div>
        <div className="flex flex-wrap items-center justify-center w-full gap-5 ">
          {filteredBulls.map((bull: BullProps) => (
            <Card key={bull.id + Math.random()} {...bull} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
