import React, {useEffect, useRef} from "react";
import interasian from "../assets/images/interasian.jpg";
import carolhub from "../assets/images/carolhub.jpg";
import bazura from "../assets/images/bazura.jpg";
import restos from "../assets/images/restos.jpg";
import parokyano from "../assets/images/parokyano.jpg";
import saad from "../assets/images/saad.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {motion, useInView, useAnimation} from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {margin: "0px 0px -50px 0px"});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      className="w-full py-[4rem] mt-3 px-4 mb-18 text-white"
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration: 0.8, delay: 0.5}}>
      <div className="max-w-[1240px] mx-auto xs:px-10 text-center">
        <h1 className="text-white md:text-4xl xs:text-4xl tracking-wide font-bold">
          My Projects
        </h1>
        <div className="w-[100px] h-[4px] mx-auto bg-sky-300 rounded-md mt-4 mb-12"></div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16">
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800">
          <img
            className="mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48"
            src={carolhub}
            alt="/"
          />
          <h2 className="text-2xl font-bold px-4 mt-5">CarolHub</h2>
          <p className="text-[14px] px-4 mb-5 italic text-sky-300">
            ReactJS, TailwindCSS, FireBase
          </p>
          <p className="text-base px-4">
            A chat app with Google Sign-In and dynamic chat rooms.{" "}
          </p>
          <a
            href="https://carol-hub.web.app/"
            className="flex justify-end px-4 py-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl hover:text-sky-300"
            />
          </a>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800">
          <img
            className="mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48"
            src={bazura}
            alt="/"
          />
          <h2 className="text-2xl font-bold px-4 mt-5">BAZURA</h2>
          <p className="text-[14px] px-4 mb-5 italic text-sky-300">
            ReactJS, TailwindCSS, NodeJS, Framer-Motion, MySQL, theMealDB API{" "}
          </p>
          <p className="text-base px-4">
            A showcasing website for the Bazura Grill with CRUD capabilities for
            the admin.
          </p>
          <a
            href="https://github.com/b1gmcdaddy/bazura"
            className="flex justify-end px-4 py-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl hover:text-sky-300"
            />
          </a>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800">
          <img
            className="mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48"
            src={restos}
            alt="/"
          />
          <h2 className="text-2xl font-bold px-4 mt-5">Restos v.4.0</h2>
          <p className="text-[14px] px-4 mb-5 italic text-sky-300">
            VueJS, TailwindCSS, ASP.NET Core, Microsoft SQL Server
          </p>
          <p className="text-base px-4">
            4th version of a restaurant note-tracking app to keep track of
            potential foodtrips.
          </p>
          <a
            href="https://github.com/b1gmcdaddy/Restos-V.4.0"
            className="flex justify-end px-4 py-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl hover:text-sky-300"
            />
          </a>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800">
          <img
            className="mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48"
            src={saad}
            alt="/"
          />
          <h2 className="text-2xl font-bold px-4 mt-5">
            DCISM Inventory System
          </h2>
          <p className="text-[14px] px-4 mb-5 italic text-sky-300">
            ReactJS, ChakraUI, NodeJS, MySQL
          </p>
          <p className="text-base px-4">
            Final Project for CIS 2201. Inventory System for the CS/IT/IS
            Department.
          </p>
          <a
            href="https://github.com/b1gmcdaddy/CIS-2201---Inventory-System"
            className="flex justify-end px-4 py-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl hover:text-sky-300"
            />
          </a>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800">
          <img
            className="mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48"
            src={interasian}
            alt="/"
          />
          <h2 className="text-2xl font-bold px-4 mt-5">Real Estate Website</h2>
          <p className="text-[14px] px-4 mb-5 italic text-sky-300">
            PHP, JavaScript, MySQL
          </p>
          <p className="text-base px-4">
            A website that displays real-estate properties through CRUD
            functionalities.
          </p>
          <a
            href="https://github.com/b1gmcdaddy/Interasian-Realty-Services"
            className="flex justify-end px-4 py-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl hover:text-sky-300"
            />
          </a>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800">
          <img
            className="mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48"
            src={parokyano}
            alt="/"
          />
          <h2 className="text-2xl font-bold px-4 mt-5">PAROKYANO </h2>
          <p className="text-[14px] px-4 mb-5 italic text-sky-300">
            ReactJS, MaterialUI, NodeJS, Python, MySQL
          </p>
          <p className="text-base px-4">
            A web-based, mobile responsive church management system.
          </p>
          <a href="" className="flex justify-end px-4 py-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl hover:text-sky-300"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
