import styles from "./Courses.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { coursesData } from "../../../data/courses-data";

const Courses = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div className={styles.courses}>
      <Swiper
        modules={[Pagination, Autoplay, Mousewheel]}
        slidesPerView={width > 768 ? 3 : width > 480 ? 2 : 1}
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.mySwiper}
      >
        {coursesData.map((i) => (
          <SwiperSlide className={styles.mySlide} key={i.id}>
            <a target={"_blank"} rel="noreferrer" href={i.link}>
              <img src={i.img} alt={i.text} />
              <span>{i.text}</span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Courses;
