import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cases } from "../../../data/data";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

const Cases = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="cases" className="flex flex-col items-center container ">
      <div className="text-center w-full flex justify-center ">
        <div className="flex items-center justify-between flex-wrap ">
          <div className="mb-7 sm:mb-0 ">
            <h3 className="text-black text-[2rem] font-[700] mb-5 ">
              Alguns dos nossos cases de sucesso!
            </h3>
          </div>
        </div>
      </div>

      <div className=" w-[95%] items-center max-xl:w-[90%]">
        <Slider {...settings}>
          {cases.map((item) => {
            return (
              <div key={item.id} className=" w-auto h-auto ">
                <img src={item.image} alt="case1" />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Cases;
