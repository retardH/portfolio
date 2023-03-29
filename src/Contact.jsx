import { BsPhone, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact mb-20 mx-auto px-4 md:px-0 space-y-12"
    >
      <header className="md:text-5xl text-4xl text-center">
        <h2 className="text-slate-100">
          How to <b className="text-lime-400">Contact Me</b>
        </h2>
      </header>
      <div className="flex items-center justify-center w-full flex-col space-y-2">
        <iframe
          className="w-full md:w-4/5 h-60 md:h-80 border-lime-400 border-2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d600.8332565075737!2d96.03775001753314!3d16.88053018811779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1bf89929a8685%3A0x44d26f1428f6c3df!2sHlaingTharyar!5e0!3m2!1sen!2smm!4v1680030221638!5m2!1sen!2smm"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="w-full md:w-4/5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="flex flex-col items-center space-y-6 py-8 px-6 bg-lime-400 text-zinc-900">
            <header className="text-zinc-900 flex items-center">
              <ImLocation
                style={{
                  fontSize: "24px",
                  color: "#18181b",
                  fill: "#18181b",
                  marginRight: "4px",
                }}
              />
              Location:
            </header>
            <span className="text-base text-zinc-900 text-center">
              318/A,YadanarbonStreet, Hlaingtharyar
            </span>
          </div>
          <div className="flex flex-col items-center space-y-6 py-8 px-6 bg-lime-400 text-zinc-900">
            <header className="text-zinc-900 flex items-center">
              <BsTelephoneFill
                style={{
                  fontSize: "24px",
                  color: "#18181b",
                  fill: "#18181b",
                  marginRight: "4px",
                }}
              />
              Phone :
            </header>
            <span className="text-base text-zinc-900">+959982415922</span>
          </div>

          <div className="flex flex-col items-center space-y-6 py-8 px-6 bg-lime-400 text-zinc-900">
            <header className="text-zinc-900 flex items-center">
              <GrMail
                style={{
                  fontSize: "24px",
                  color: "#18181b",
                  fill: "#18181b",
                  marginRight: "4px",
                }}
              />
              Email :
            </header>
            <span className="text-base text-zinc-900">loowmaad@gmail.com</span>
          </div>
          <div className="flex flex-col items-center space-y-6 py-8 px-6 bg-lime-400 text-zinc-900">
            <header className="text-zinc-900 flex items-center">
              <AiOutlineGithub
                style={{
                  fontSize: "24px",
                  color: "#18181b",
                  fill: "#18181b",
                  marginRight: "4px",
                }}
              />
              Github :
            </header>
            <span className="text-sm lg:text-base text-zinc-900 text-center">
              https://github.com/retardH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
