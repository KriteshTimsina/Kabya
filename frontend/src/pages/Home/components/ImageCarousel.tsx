import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bipulChettri from "../../../assets/bipulchettri.jpg";
import pbm from "../../../assets/pbm.jpg";

const ImageCarousel = ({ className }: { className: string }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          bulletClass: "bg-red-200",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className={`${className} h-60 md:h-80 w-full`}
      >
        <SwiperSlide>
          <img
            src={bipulChettri}
            alt=""
            className="h-full w-full object-right md:object-top"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pbm}
            alt=""
            className="h-full w-full object-cover md:object-top"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageCarousel;
