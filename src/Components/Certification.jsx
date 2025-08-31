import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IBM from "/image/IBM.png";
import JScert from "/image/JScert.jpg";
import UIUX from "/image/UIUX.png";
import Microsoft1 from "/image/Microsoft1.png";
import Microsoft2 from "/image/Microsoft2.png";
import Microsoft3 from "/image/Microsoft3.png";
import Microsoft4 from "/image/Microsoft4.png";

import { PiCertificateBold } from "react-icons/pi";

const CertificationData = [
  { id: 1, image: IBM, title: "Software Engineering" },
  { id: 2, image: JScert, title: "Advanced Javascript" },
  { id: 3, image: UIUX, title: "UI/UX Design" },
  { id: 4, image: Microsoft1, title: "Microsoft Azure Cloud" },
  { id: 5, image: Microsoft2, title: "Microsoft Azure Cloud" },
  { id: 6, image: Microsoft3, title: "Microsoft Azure Cloud" },
  { id: 7, image: Microsoft4, title: "Microsoft Azure Cloud" },
  { id: 7, image: Microsoft4, title: "Microsoft Azure Cloud" },
];

const Certification = () => {
const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,        
  autoplaySpeed: 0,     
  cssEase: "linear",    
  arrows:false,
  responsive: [
    {
      breakpoint: 1024, 
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640, 
      settings: { 
        centerMode: false,
        arrows: false,
      },
    },
  ],
};

  return (
    <div id="Certification" className="px-4 md:px-10">
      <p className="text-3xl md:text-4xl font-bold text-darkColor mb-6 md:mb-10">
        Certification
      </p>
      <div className="w-full mx-auto py-10">
        <Slider {...settings}>
          {CertificationData.map((data) => (
            <div key={data.id} className="px-2 py-4 w-f">
              <div className="w-full bg-greenlight rounded-md shadow-md transition-transform duration-500  hover:scale-105">
                <img
                  className="h-40 md:h-48 w-full p-2 object-contain"
                  src={data.image}
                  alt={data.title}
                />
                <div className="flex items-center flex-col mt-2 mb-3">
                  <PiCertificateBold className="text-[32px] md:text-[40px] text-lightColor mb-2" />
                  <p className="text-base md:text-lg font-bold text-darkColor text-center">
                    {data.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certification;
