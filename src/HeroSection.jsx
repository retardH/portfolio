import { TypeAnimation } from "react-type-animation";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useLayoutEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const Home = () => {
  const home = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".welcome-text", {
        duration: 1,
        opacity: 0,
        delay: 1,
        ease: "power2.in",
      });
    }, home);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={home}
      id="home"
      className="hero flex items-center mb-20 md:space-x-12 md:space-y-0 flex-col-reverse md:flex-row mx-auto px-8 md:px-0 "
    >
      <div className="hero--text text-center flex items-center flex-col space-y-4 md:w-1/2">
        <h2 className="welcome-text text-lime-400 text-4xl md:text-5xl">
          HI THERE.
        </h2>
        <h4 className="text-xl lg:text-2xl">
          <span className="text-slate-100">I'm a</span>{" "}
          <TypeAnimation
            sequence={[
              "Junior React Developer.",
              1000,
              "Passionate Coder.",
              1000,
              "Progressive Learner As Well",
              1000,
            ]}
            style={{
              color: "#a3e635",
            }}
            repeat={Infinity}
          />
        </h4>
        <p className="text-lg text-center">
          Scroll down to see more about me, my projects, skills and how to
          contact me as well. Welcome from my portfolio!
        </p>
        <h4 className="w-full flex justify-center items-center">
          <BsChevronDoubleDown
            style={{
              fontSize: "16px",
            }}
          />
        </h4>
      </div>
      <div className="hero--img-container p-8 mb-8 md:mb-0 md:w-1/2 w-full flex items-center justify-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-2/3"
        >
          <SwiperSlide className="swiper-slide">
            <figure className="rounded-md bg-lime-400 p-1">
              <img
                src="./images/hero-img.jpg"
                alt=""
                className="slide-img rounded-md"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <figure className="rounded-md bg-lime-400 p-1">
              <img
                src="./images/hero-img.jpg"
                alt=""
                className="slide-img rounded-md"
              />
            </figure>{" "}
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <figure className="rounded-md bg-lime-400 p-1">
              <img
                src="./images/hero-img.jpg"
                alt=""
                className="slide-img rounded-md"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <figure className="rounded-md bg-lime-400 p-1">
              <img
                src="./images/hero-img.jpg"
                alt=""
                className="slide-img rounded-md"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <figure className="rounded-md bg-lime-400 p-1">
              <img
                src="./images/hero-img.jpg"
                alt=""
                className="slide-img rounded-md"
              />
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
