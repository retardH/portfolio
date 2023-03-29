import { useState, useEffect, useRef, useLayoutEffect } from "react";

const Navbar = () => {
  const nav = useRef();
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const [hambugerMenuClassName, setHamburgerMenuClassName] = useState(
    "hamburger ml-auto md:hidden focus:outline-none block"
  );

  const handleHamburgerMenu = () => {
    if (hambugerMenuClassName.includes("open")) {
      setHamburgerMenuClassName(
        "hamburger ml-auto md:hidden focus:outline-none mt-2 block"
      );
    } else {
      setHamburgerMenuClassName(
        "hamburger ml-auto md:hidden focus:outline-none block mt-2 open"
      );
    }

    setIsMenuClicked((isClicked) => !isClicked);
    console.log("clicked");
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav--link", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.in",
      });
    }, nav);

    return () => ctx.revert();
  }, []);

  const onBtn1Hover = () => {
    gsap.to(".hire1-btn", {
      backgroundColor: "#a3e635",
      y: -2,
      scale: 1,
      color: "#18181b",
    });
  };

  const onBtn1Leave = () => {
    gsap.to(".hire1-btn", {
      backgroundColor: "#18181b",
      y: 0,
      scale: 1,
      color: "#f1f5f9",
    });
  };

  return (
    <nav
      className="flex items-center bg-transparent backdrop-blur-lg backdrop-brightness-75 md:mb-12 px-4 py-6 sm:px-12 border-solid border-lime-400 sticky top-0 right-0 left-0 w-full z-50"
      ref={nav}
    >
      <h2 className="text-slate-100 text-2xl mr-auto">
        Htet<b className="text-lime-400">Zarni</b>
      </h2>
      <div className="hidden md:flex items-center space-x-6">
        <a
          href="#home"
          className="hover:text-lime-400 nav--link text-slate-100"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-lime-400 nav--link text-slate-100"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="hover:text-lime-400 nav--link text-slate-100"
        >
          Projects
        </a>
        <a
          href="#blogs"
          className="hover:text-lime-400 nav--link text-slate-100"
        >
          Blogs
        </a>
        <a
          href="#contact"
          className="hover:text-lime-400 nav--link text-slate-100"
        >
          Contact
        </a>
      </div>
      <div
        id="menu-btn"
        className={hambugerMenuClassName}
        onClick={() => handleHamburgerMenu()}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </div>
      <a
        href="#contact"
        className="hire1-btn py-2 px-5 ml-auto hidden md:block bg-zinc-900 text-slate-100 rounded-md shadow-md"
        onMouseEnter={onBtn1Hover}
        onMouseLeave={onBtn1Leave}
      >
        Hire Me
      </a>
      {/* Mobile Menu  */}
      <div
        style={{
          display: isMenuClicked ? "block" : "none",
        }}
      >
        <div className="mobile--menu backdrop-blur-lg border-0 shadow-lg rounded-sm absolute right-6 left-6 top-24 flex flex-col self-end sm:self-center">
          <a
            onClick={() => handleHamburgerMenu()}
            href="#home"
            className="hover:text-lime-400 hover:bg-slate-900 w-full text-center py-3"
          >
            Home
          </a>
          <a
            onClick={() => handleHamburgerMenu()}
            href="#about"
            className="hover:text-lime-400 hover:bg-slate-900 w-full text-center py-3"
          >
            About Me
          </a>
          <a
            onClick={() => handleHamburgerMenu()}
            href="#skills"
            className="hover:text-lime-400 hover:bg-slate-900 w-full text-center py-3"
          >
            Skills
          </a>
          <a
            onClick={() => handleHamburgerMenu()}
            href="#projects"
            className="hover:text-lime-400 hover:bg-slate-900 w-full text-center py-3"
          >
            Projects
          </a>
          <a
            onClick={() => handleHamburgerMenu()}
            href="#blogs"
            className="hover:text-lime-400 hover:bg-slate-900 w-full text-center py-3"
          >
            Blogs
          </a>
          <a
            onClick={() => handleHamburgerMenu()}
            href="#contact"
            className="hover:text-lime-400 hover:bg-slate-900 w-full text-center py-3"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
