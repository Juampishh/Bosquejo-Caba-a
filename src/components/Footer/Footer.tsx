import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { Title } from "../Typography/Title";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="w-full h-[20vh] bg-darkRed flex justify-center items-center text-white">
      <div className="container flex justify-between mx-auto py-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="flex items-center gap-2">
              <LuPhoneCall />
              <span>11 1234 5678</span>
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineEmail />
              <span>hola@gmail.com</span>
            </p>
          </div>
          <div></div>
        </div>
        <div className=" flex flex-col">
          <Title className="mb-2 font-semibold">Contacto</Title>
          <div className="flex justify-between items-center gap-3">
            <FaFacebook className="bg-white text-black p-1 w-7 h-7 rounded-full" />
            <FaInstagram className="bg-white text-black p-1 w-7 h-7 rounded-full" />
            <FaWhatsapp className="bg-white text-black p-1 w-7 h-7 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
