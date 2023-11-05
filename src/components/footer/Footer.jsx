const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] container pt-12 h-auto" id="contact">
      <div className="flex items-center justify-between md:gap-8 max-sm:flex-col">
        <div className=" flex flex-col  max-sm:text-center max-sm:items-center pb-5">
          <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
            Ainda tem dúvidas? <br /> Entre em contato para solucionarmos!
          </h2>
          <a
            href="https://api.whatsapp.com/send?phone=5511993666129&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20queria%20saber%20mais.%20"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-[#E3AB67] text-black font-[500] flex items-center gap-2 hover:bg-[#fdb255] ease-in duration-300 py-2 px-4 rounded-[8px]">
              Entre em contato
            </button>
          </a>
          ,0
        </div>

        <div>
          <ul className="flex flex-wrap text-center justify-center gap-10">
            <li>
              <a className="text-gray-400 font-[600]" href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#services">
                Serviços
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600]"
                href="https://drive.google.com/file/d/1M-tAFVceS6uGqgnlo0UzebEQnkZG9AoB/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Portifólio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
