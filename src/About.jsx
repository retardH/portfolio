import { useLayoutEffect, useRef } from "react";
import { SiJavascript, SiReact } from "react-icons/si";
import { FaFileCode } from "react-icons/fa";
import cvForm from './images/htet_zarni_cv_resume.pdf'

const About = () => {
  const about = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, about);

    return () => ctx.revert();
  }, []);

  const onBtnHover = () => {
    gsap.to(".cv-btn", {
      backgroundColor: "#a3e635",
      y: 5,
      scale: 1.1,
      color: "#18181b",
    });
  };

  const onBtnLeave = () => {
    gsap.to(".cv-btn", {
      backgroundColor: "#0f172a",
      y: 0,
      scale: 1,
      color: "#f1f5f9",
      ease: "power1.out",
    });
  };

  const iconStyles = {
    color: "#a3e635",
    fontSize: "30px",
    fill: "#a3e635",
    cursor: "pointer",
  };

  return (
    <section
      id="about"
      className="about mb-20 flex flex-col mx-auto items-center md:items-start md:flex-row space-y-8 md:space-y-0 md:space-x-8"
      ref={about}
    >
      <aside className="flex flex-col items-center md:w-2/5 md:content-between md:h-auto">
        <h2 className="md:text-5xl text-4xl text-slate-100 font-bold">
          About <b className="text-lime-400">Me</b>:
        </h2>
        <a
          href={cvForm}
          download={"htetzarni_cv"}
          className="cv-btn hidden md:block mt-16 bg-slate-900 px-7 py-3 rounded-md shadow-md text-slate-100 uppercase"
          onMouseEnter={onBtnHover}
          onMouseLeave={onBtnLeave}
        >
          Get My CV
        </a>
        <div className="mt-6 icons-container hidden md:flex items-center space-x-8">
          <FaFileCode style={iconStyles} />
          <SiJavascript style={iconStyles} />
          <SiReact style={iconStyles} />
        </div>
      </aside>
      <article className="md:w-3/5 text-center flex items-center space-y-6 md:space-y-0 flex-col md:text-left px-4 pt-1 tracking-wide leading-6 md:leading-7">
        <p>
          Well, let me introduce myself. My full name is HtetZarni but you can
          just call me Zarni. I'm 18 years old. I live in Hlaingtharyar Township,Yangon.
          I passed the matriculation exam in 2019-2020 with 4Ds. As I'm joining
          CDM movement and the Revoulution, I don't go to the university. I would like to study
          computer science major in college if I get the chance again. I've
          been learning web development since 2021. Back then, I could only made
          static pages with HTML,CSS and some Javascript. But these days, I'm
          learning CSS frameworks and Javascript advanced stuffs more deeply to upgrade my skills.
          And also I'm learning React(a Javascript Library), thus I'll be able to build more user
          intereactive dynamic websites. I practise coding everyday and make
          commits to my repositories on Github everyday. I passionately learn new
          and new technologies to upgrade my skills from various resources and books.
           I also know how to write basic C language programs. As I searched and learned basic Computer
          Science stuffs.In the future, I've planned to learn more about Computer Science.
          Thus, I'll be a better web developer/programmer.
        </p>
        <a
          href={cvForm}
          download={"htetzarni_cv"}
          className="cv-btn md:hidden bg-slate-900 px-7 py-3 rounded-md shadow-md text-slate-100 font-bold uppercase"
          onMouseEnter={onBtnHover}
          onMouseLeave={onBtnLeave}
        >
          Get My CV
        </a>
        <div className="md:mt-6 icons-container flex md:hidden items-center space-x-8">
          <FaFileCode style={iconStyles} />
          <SiJavascript style={iconStyles} />
          <SiReact style={iconStyles} />
        </div>
      </article>
    </section>
  );
};

export default About;
