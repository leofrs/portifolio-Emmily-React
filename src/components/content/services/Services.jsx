import { servicesData } from "../../../data/data";
const Services = () => {
  return (
    <section id="services" className="container">
      <div className="text-center pb-16 ">
        <h2 className="text-[#E3AB67] font-[800] text-[2.4rem] mb-5">
          Em que posso te ajudar?
        </h2>
        <p className="lg:max-w-[600px] lg:mx-auto text-black font-[500] text-[16px] leading-7">
          Sou especialista em transformar ideias em resultados online. Conte
          comigo para impulsionar sua presença online, construir uma comunidade
          fiel e contar a história da sua marca de forma memorável nas mídias
          sociais. Conheça meus serviços e vamos trabalhar juntos!
        </p>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {servicesData.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[350px] h-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#0E0E0E]  dark:border-gray-700
                text-center "
              style={{
                backgroundImage: `url(${item.image})`,
                WebkitBackgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E3AB67] dark:text-white uppercase cursor-default">
                {item.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 cursor-default">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
