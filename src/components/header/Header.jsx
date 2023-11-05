import { AiOutlineWhatsApp } from "react-icons/ai";

import HeaderMobile from "./headerMobile/HeaderMobile";

const Header = () => {
  return (
    <>
      <header className="w-full h-[60px] leading-[20px] flex items-center fixed bg-white max-lg:hidden">
        <div className="container  ">
          <div className="flex items-center justify-between  ">
            <div className="max-lg:hidden">
              <ul className="flex text-center gap-10">
                <li>
                  <a className="text-[#0E0E0E] font-[600]" href="#about">
                    Sobre
                  </a>
                </li>
                <li>
                  <a className="text-[#0E0E0E] font-[600]" href="#services">
                    Serviços
                  </a>
                </li>
                <li>
                  <a className="text-[#0E0E0E] font-[600]" href="#cases">
                    Cases
                  </a>
                </li>
                <li>
                  <a className="text-[#0E0E0E] font-[600]" href="#contact">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5511993666129&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20queria%20saber%20mais.%20"
                target="_blank"
                rel="noreferrer "
              >
                <button className="flex items-center gap-2 text-[#0E0E0E]font-[600] border border-solid border-[#0E0E0E] py-2 px-2 rounded-[8px] max-h[40px] hover:bg-[#0E0E0E] hover:text-white hover:font-[500] ease-in duration-300 max-lg:hidden">
                  <AiOutlineWhatsApp />
                  vamos conversar
                </button>
              </a>
            </div>
          </div>
          <hr className="mt-3" />
        </div>
      </header>
      <span className="lg:hidden cursor-pointer fixed top-0 w-full pl-3 border-b  ">
        <HeaderMobile />
      </span>
    </>
  );
};

export default Header;
