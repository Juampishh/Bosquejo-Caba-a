import { useNavigate } from "react-router-dom";
import { Title } from "../Typography/Title";
import { MdNavigateNext } from "react-icons/md";
import { motion } from "framer-motion";

export interface BullProps {
  title: string;
  image: string;
  id: number;
  description: string;
  breed: string;
}

export default function Card(data: BullProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bull/${data.id}`, {
      state: { ...data },
    });
  };

  return (
    <motion.div
      className="w-1/4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full ">
        <motion.img
          src={`Cards/${data.image}.png`}
          alt=""
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        />
        <div className="relative bottom-14">
          <img className="" src="Cards/Rectangle 283.png" alt="" />
          <Title className="relative z-30 flex w-5/6 ml-3 text-2xl text-center text-darkRed justify-evenly bottom-11 ">
            {data.title}
            <MdNavigateNext
              onClick={handleClick}
              className="inline cursor-pointer w-9 h-9 hover:scale-110 "
            />
          </Title>
        </div>
      </div>
    </motion.div>
  );
}
