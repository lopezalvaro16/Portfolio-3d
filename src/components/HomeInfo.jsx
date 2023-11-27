import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContet = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue p-4 px-8 text-white mx-5">
      Hola, soy <span className="font-semibold">Álvaro</span>,<br />{" "}
      Desarrollador Front-End.
    </h1>
  ),
  2: (
    <InfoBox
      text="Desarrollador Full Stack con experiencia y habilidades adquiridas a lo largo de mi trayectoria"
      link="/about"
      btnText="Mas info"
    />
  ),
  3: (
    <InfoBox
      text="Lideré múltiples proyectos hacia el éxito a lo largo de este tiempo. ¿Curioso/a acerca de los proyectos?"
      link="/projects"
      btnText="Visita mi portafolio"
    />
  ),
  4: (
    <InfoBox
      text="¿Necesitas un proyecto hecho o buscás un dev? Estoy a solo unos toques de teclado de distancia"
      link="/contact"
      btnText="Hablemos"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContet[currentStage] || null;
};

export default HomeInfo;
