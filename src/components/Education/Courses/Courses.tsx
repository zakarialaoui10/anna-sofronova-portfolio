import styles from "./Courses.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import C1 from "../../../assets/courses/course1.jpg";
import C2 from "../../../assets/courses/course2.jpg";
import C3 from "../../../assets/courses/course3.jpg";
import C4 from "../../../assets/courses/course4.jpg";
import C5 from "../../../assets/courses/course5.jpg";
import C6 from "../../../assets/courses/course6.jpg";
import C7 from "../../../assets/courses/course7.jpg";
import C8 from "../../../assets/courses/course8.jpg";
import C9 from "../../../assets/courses/course9.jpg";
import C10 from "../../../assets/courses/course10.jpg";
import C11 from "../../../assets/courses/course11.jpg";
import C12 from "../../../assets/courses/course12.jpg";
import { useEffect, useState } from "react";

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
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/f9c769ed530121472bccde281d8e04e3"
          >
            <img src={C1} alt="JavaScript Basics" />
            <span>JavaScript Basics</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/a6403e7d1c7db3588d2d72cbc2430366"
          >
            <img src={C2} alt="Animation with JavaScript and jQuery" />
            <span>Animation with JavaScript and jQuery</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/102e73f3a36d6671e359aaf7ea579af6"
          >
            <img src={C3} alt="Interactivity with JavaScript and jQuery" />
            <span>Interactivity with JavaScript and jQuery</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/7a52486c429b4fa1f02158f173407060"
          >
            <img src={C4} alt="Data Manipulation in JavaScript" />
            <span>Data Manipulation in JavaScript</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/a48d0ffa9e9ec88c49d44d4a42ff00f0"
          >
            <img src={C5} alt="JavaScript for Beginners" />
            <span>JavaScript for Beginners</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/416467096ab7a722b59cd11088dec38e"
          >
            <img src={C6} alt="HTML, CSS, and Javascript for Web Developers" />
            <span>HTML, CSS, and Javascript for Web Developers</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/176f393b200e7a23df588ae378de0a01"
          >
            <img src={C7} alt="Introduction to HTML5" />
            <span>Introduction to HTML5</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/1156c3bce2980b7010a8b7035c87fac2"
          >
            <img src={C8} alt="Introduction to CSS3" />
            <span>Introduction to CSS3</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/ce0b3ea9d499880e919ee31b802ba15c"
          >
            <img src={C9} alt="Основы HTML и CSS" />
            <span>Основы HTML и CSS</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/881bd355a3669d32c0ae3ef46f645574"
          >
            <img src={C10} alt="Тонкости верстки" />
            <span>Тонкости верстки</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/8914ea822005008b1083ef41a50d0ec0"
          >
            <img src={C11} alt="JavaScript, часть 1: основы и функции" />
            <span>JavaScript, часть 1: основы и функции</span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://coursera.org/share/61813789f532cf948a73a6bd1e4e83dc"
          >
            <img
              src={C12}
              alt="JavaScript, часть 2: прототипы и асинхронность"
            />
            <span>JavaScript, часть 2: прототипы и асинхронность</span>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Courses;
