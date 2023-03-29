import { useLayoutEffect, useRef } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Hire = () => {
  const hire = useRef();

  const onBtnHover = () => {
    gsap.to(".hire-btn", {
      backgroundColor: "#a3e635",
      y: 5,
      scale: 1.1,
      color: "#18181b",
    });
  };

  const onBtnLeave = () => {
    gsap.to(".hire-btn", {
      backgroundColor: "#18181b",
      y: 0,
      scale: 1,
      color: "#f1f5f9",
    });
  };

  return (
    <section
      id="hire"
      className="mb-20 bg-slate-100 flex items-center flex-col space-y-6 md:py-28 py-20"
    >
      <AnimationOnScroll
        animateIn="animate__fadeInDown"
        duration={1}
        delay={1}
        animateOnce={true}
      >
        <h2
          className="hire-text text-zinc-900 md:text-4xl text-2xl font-bold text-center"
          ref={hire}
        >
          Let Me Join Your Team And Let's Work Together
        </h2>
      </AnimationOnScroll>
      <p className="text-zinc-900 text-lg md:text-xl">
        email: loowmaad@gmail.com
      </p>
      <a
        href="#contact"
        className="hire-btn py-3 px-7 bg-zinc-900 text-slate-100 rounded-md shadow-md"
        onMouseEnter={onBtnHover}
        onMouseLeave={onBtnLeave}
      >
        Hire Me
      </a>
    </section>
  );
};

export default Hire;
