import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLayoutEffect, useRef } from "react";

const Projects = () => {
  const projects = useRef();

  const onEnter = () => {
    gsap.to(".project-text", { yPercent: 100, ease: "bounce", duration: 1.5 });
    console.log("mouse entered");
  };

  const onLeave = () => {
    gsap.to(".project-text", { yPercent: 0, duration: 0.5 });
    console.log("mouse leaved");
  };

  const onBtnHover = () => {
    gsap.to(".project-btn", {
      backgroundColor: "#a3e635",
      y: 5,
      scale: 1.1,
      color: "#18181b",
    });
  };

  const onBtnLeave = () => {
    gsap.to(".project-btn", {
      backgroundColor: "#18181b",
      y: 0,
      scale: 1,
      color: "#f1f5f9",
      ease: "power1.out",
    });
  };
  return (
    <section
      id="projects"
      className="projects px-4 md:px-0 mb-20 mx-auto flex flex-col items-center space-y-12"
      ref={projects}
    >
      <header className="text-center space-y-4 flex flex-col items-center">
        <h2 className="md:text-5xl text-4xl font-bold">
          My <b className="text-lime-400">Projects</b>
        </h2>
        <p className="text-center text-base md:px-14">
          All these projects were written with HTML,CSS,JavaScript. I also used
          frameworks and libraries such as TailwindCSS, Material UI and React
          JS.
        </p>
      </header>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full mx-auto"
      >
        <SwiperSlide className="flex items-center w-full h-full">
          <figure
            className="w-full h-full bg-zinc-900 relative"
            onClick={onEnter}
            onMouseLeave={onLeave}
          >
            <img src="./images/project-one.png" alt="" className="" />
            <div className="project-text absolute bg-slate-100 flex top-0 left-0 w-full h-full items-center justify-center flex-col space-y-2 md:space-y-8 z-50 -translate-y-full">
              <p className="text-xs md:text-base text-center px-4 md:w-1/2 text-zinc-900">
                Landing page for Manage,ltd , I build this website with mainly
                HTML, TailwindCSS, some custom CSS and some Javascript!
              </p>
              <a
                className="project-btn py-2 px-4 md:px-7 md:py-3 bg-zinc-900 text-slate-100 rounded-md shadow-md text-sm md:text-base"
                onMouseEnter={onBtnHover}
                onMouseLeave={onBtnLeave}
              >
                Live Demo
              </a>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide className="flex items-center w-full h-full">
          <figure
            className="w-full bg-zinc-900 relative"
            onClick={onEnter}
            onMouseLeave={onLeave}
          >
            <img src="./images/project-two.png" alt="" />
            <div className="project-text absolute bg-slate-100 flex top-0 left-0 w-full h-full items-center justify-center flex-col space-y-2 md:space-y-8 z-50 -translate-y-full">
              <p className="text-xs md:text-base text-center px-4 md:w-1/2 text-zinc-900">
                Landing page for Fylo,ltd , I also build this website with
                mainly HTML, some custom CSS, TailwindCSS and some Javascript!
              </p>
              <a
                className="project-btn px-4 py-2 text-sm md:text-base md:px-7 md:py-3 bg-zinc-900 text-slate-100 rounded-md shadow-md"
                onMouseEnter={onBtnHover}
                onMouseLeave={onBtnLeave}
              >
                Live Demo
              </a>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide className="flex items-center w-full h-full">
          <figure
            className="w-full h-full bg-zinc-900 relative"
            onClick={onEnter}
            onMouseLeave={onLeave}
          >
            <img src="./images/project-three.png" alt="" />
            <div className="project-text absolute bg-slate-100 flex top-0 left-0 w-full h-full items-center justify-center flex-col space-y-2 md:space-y-8 z-50 -translate-y-full">
              <p className="md:text-base text-xs text-center px-4 md:w-1/2 text-zinc-900">
                A TO-DO list web-app, you can add TO-DO lists, mark the
                completed lists and delete the lists. I also added dark/light
                mode toggle!
              </p>
              <a
                className="project-btn py-2 px-4 md:px-7 md:py-3 bg-zinc-900 text-slate-100 rounded-md shadow-md text-sm md:text-base"
                onMouseEnter={onBtnHover}
                onMouseLeave={onBtnLeave}
              >
                Live Demo
              </a>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide className="flex items-center w-full h-full">
          <figure
            className="w-full h-full bg-zinc-900 relative"
            onClick={onEnter}
            onMouseLeave={onLeave}
          >
            <img src="./images/project-four.png" alt="" className="" />
            <div className="project-text absolute bg-slate-100 flex top-0 left-0 w-full h-full items-center justify-center flex-col space-y-2 md:space-y-8 z-50 -translate-y-full">
              <p className="md:text-base text-xs text-center px-4 md:w-1/2 text-zinc-900">
                Tenzies Dice Game, you can roll the dice until all dices have
                the same number. The dice you choose will freeze everytime you
                roll.And It'll also save your best score!
              </p>
              <a
                className="project-btn py-2 px-4 md:px-7 md:py-3 bg-zinc-900 text-slate-100 rounded-md shadow-md text-sm md:text-base"
                onMouseEnter={onBtnHover}
                onMouseLeave={onBtnLeave}
              >
                Live Demo
              </a>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide className="flex items-center w-full h-full">
          <figure
            className="w-full h-full bg-zinc-900 relative"
            onClick={onEnter}
            onMouseLeave={onLeave}
          >
            <img src="./images/project-five.png" alt="" />
            <div className="project-text absolute bg-slate-100 flex top-0 left-0 w-full h-full items-center justify-center flex-col space-y-2 md:space-y-8 z-50 -translate-y-full">
              <p className="md:text-base text-xs text-center px-4 md:w-1/2 text-zinc-900">
                MeMe Generator, It will generate random MeMe images everytime
                you click the button there. These random images are generated
                from the API. Values from the two inputs will place their text
                at top and bottom of the random MeMe image!
              </p>
              <a
                className="project-btn py-2 px-4 md:px-7 md:py-3 bg-zinc-900 text-slate-100 rounded-md shadow-md text-sm md:text-base"
                onMouseEnter={onBtnHover}
                onMouseLeave={onBtnLeave}
              >
                Live Demo
              </a>
            </div>
          </figure>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Projects;
