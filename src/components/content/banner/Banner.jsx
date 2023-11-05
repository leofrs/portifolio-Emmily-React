import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import logo from "../../../images/logo.png";
import logo2 from "../../../images/logoorginial.png";
import eu from "../../../images/eu2.png";

const Banner = () => {
  return (
    <section className="pt-20 " id="about">
      <div className="container pt-14 ">
        <div className="flex max-lg:flex-col ">
          <div className="w-full flex flex-col items-start max-lg:items-center">
            <div className="flex flex-col w-fullmax-lg:text-justify max-lg:justify-center">
              <img
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1800"
                src={logo}
                alt="Logo"
                className="h-[150px] max-lg:hidden"
              />
              <img
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1800"
                src={logo2}
                alt="Logo"
                className="h-[150px]border w-full items-center hidden max-lg:block px-10"
              />
              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 text-black text-justify mt-14 font-[500] text-[15px] leading-7 sm:pl-4 sm:pr-10 "
              >
                Como profissional com mais de 4 anos de experiência como Social
                Media Estrategista, minha expertise está focada em planejar e
                executar estratégias digitais para empresas. Tenho um histórico
                comprovado de impulsionar o crescimento e engajamento de marcas
                nas mídias sociais. Com uma formação completa no curso de
                Técnica em Informática pelo Instituto Federal e atualmente
                graduanda em Publicidade e Propaganda, estou sempre buscando
                aprimorar minhas habilidades para oferecer soluções eficazes
                para os desafios de marketing digital e comunicação das
                empresas. <br /> <br /> Se você procura alguém com conhecimento
                sólido em estratégias de mídia social, experiência em redação
                persuasiva e uma abordagem inovadora para o crescimento da sua
                marca, estou à disposição para ajudar a atingir seus objetivos
                de negócios.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800"
              className="flex items-center gap-9 pl-4 mt-14"
            >
              <a
                href="https://instagram.com/emmilytainarasm?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-[#E3AB67] text-[15px] font-[600]">
                  <AiOutlineInstagram size={25} />
                </span>
              </a>
              <span>
                <a
                  href="https://www.linkedin.com/in/emmily-tainara-831132204/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E3AB67] text-[18px] font-[600]"
                >
                  <AiFillLinkedin size={25} />
                </a>
              </span>
              <a href="emmilytainaramtk@gmail.com">
                <button className="font-[500] text-[#E3AB67] py-2 px-4 rounded-[8px] hover:font-[500] hover:bg-[#0E0E0E] hover:text-white easy-in duration-700">
                  <AiOutlineMail size={25} />
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1M-tAFVceS6uGqgnlo0UzebEQnkZG9AoB/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-smallTextCOlor font-[600] text-[16px] border-b border-solid border-smallTextCOlor"
              >
                Portifólio
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="basis-1/3 mt-10 sm:mt-0"
          >
            <figure className="flex items-center justify-center max-lg:hidden">
              <img src={eu} alt="Minha foto" />
            </figure>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </section>
  );
};

export default Banner;
