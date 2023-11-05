import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineWhatsApp, AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
const HeaderMobile = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      {menu ? (
        <button
          className="text-2xl text-[#0E0E0E] lg:hidden cursor-pointer bg-white w-full h-[55px]"
          onClick={toggleMenu}
        >
          <AiOutlineClose />
        </button>
      ) : (
        <button
          className="text-2xl text-[#0E0E0E] lg:hidden cursor-pointer bg-white w-full h-[55px]"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      )}
      {menu && (
        <div className=" fixed top-0 left-8 w-full items-center  bg-white ">
          <ul className="flex justify-evenly items-center w-[90%] h-[55px]  ">
            <li>
              <button
                onClick={() => {
                  setMenu(toggleMenu);
                }}
                className="text-[#0E0E0E] font-[500]"
              >
                <a href="#about">Sobre</a>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setMenu(toggleMenu);
                }}
                className="text-[#0E0E0E] font-[500]"
              >
                <a href="#services">Serviços</a>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setMenu(toggleMenu);
                }}
                className="text-[#0E0E0E] font-[500]"
              >
                <a href="#cases">Cases</a>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setMenu(toggleMenu);
                }}
                className="text-[#0E0E0E] font-[500]"
                href="#contact"
              >
                <a href="#contact">Contato</a>
              </button>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5511993666129&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20queria%20saber%20mais.%20"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex text-center">
                  <AiOutlineWhatsApp />
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderMobile;
