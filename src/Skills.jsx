const Skills = () => {
  return (
    <section
      id="skills"
      className="skill-section w-full flex flex-col items-center mb-20 py-14 px-4 md:px-0 space-y-8 bg-slate-100"
    >
      <header>
        <h2 className="md:text-5xl text-4xl font-bold text-zinc-900 text-center">
          My <b className="text-lime-400">Skills</b>
        </h2>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-16 md:gap-24 xl:gap-18">
        <div className="html grid-item bg-slate-100 rounded-md w-40 h-40 relative">
          <div className="outer w-full h-full rounded-full shadow-xl flex items-center p-2 justify-center">
            <div className="inner w-5/6 h-5/6 rounded-full flex items-center justify-center">
              <div className="number text-lg flex flex-col items-center space-y-1 text-center">
                <span className="text-zinc-900">HTML</span>
                <span className="text-zinc-900">85%</span>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
        <div className="css grid-item bg-slate-100 rounded-md w-40 h-40 relative">
          <div className="outer w-full h-full rounded-full shadow-xl flex items-center p-2 justify-center">
            <div className="inner w-5/6 h-5/6 rounded-full flex items-center justify-center">
              <div className="number text-lg flex flex-col items-center space-y-1 text-center">
                <span className="text-zinc-900">CSS</span>
                <span className="text-zinc-900">80%</span>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
        <div className="js grid-item bg-slate-100 rounded-md w-40 h-40 relative">
          <div className="outer w-full h-full rounded-full shadow-xl flex items-center p-2 justify-center">
            <div className="inner w-5/6 h-5/6 rounded-full flex items-center justify-center">
              <div className="number text-lg flex flex-col items-center space-y-1 text-center">
                <span className="text-zinc-900">JS</span>
                <span className="text-zinc-900">70%</span>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
        <div className="react grid-item bg-slate-100 rounded-md w-40 h-40 relative">
          <div className="outer w-full h-full rounded-full shadow-xl flex items-center p-2 justify-center">
            <div className="inner w-5/6 h-5/6 rounded-full flex items-center justify-center">
              <div className="number text-lg flex flex-col items-center space-y-1 text-center">
                <span className="text-zinc-900">REACT</span>
                <span className="text-zinc-900">60%</span>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
      </main>
    </section>
  );
};

export default Skills;
