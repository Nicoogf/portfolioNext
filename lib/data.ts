import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spotifyclone from "@/public/spotifyclon.jpg" ;

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Me",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Stack",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Tecnico en Administracion de empresas",
    location: "Intituto de Formacion Tecnica n°7",
    description:
      "Capacitado en gestión y estrategia empresarial",
    icon: React.createElement(LuGraduationCap),
    date: "2015-2018",
  },
  {
    title: "Administrativo",
    location: "Vika",
    description:
      "Atención y asesoramiento al cliente .",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Asesor Comercial",
    location: "Telecom",
    description:
      "Asesoramiento a clientes y venta de intangibles.",
      icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Desarrollador Full-Stack - Finalizada",
    location: "Digital House",
    description:
      "Introduccion al Desarrollo Web (Javascript -  Node Js - Express - React Js - Programación orientada a objetos ).",
    icon: React.createElement(FaReact),
    date: "2022 - 2022",
  },
  {
    title: "Coordinador de Ventas",
    location: "Interfas",
    description:
      "Asesoramiento a clientes y coordinacion de agenda de Servicio Tecnico",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Desarrollador Full-Stack - Finalizada",
    location: "Universidad Tecnologica Nacional",
    description:
      "Capacitacion sobre Bases de datos , JavaScript , React.js , Node.js",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
  {
    title: "Especialización Frontend - En Curso",
    location: "Digital House",
    description:
      "Dominio en React.js , Next.js , Redux , Typescript , PowerBI , MongoDB",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Spotify ClonApp",
    description:
      "Tome el desafio con Tailwind CSS de copiar su diseño tan conocido por su elegancia y minimalismo, con una paleta de colores fresca y moderna.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: spotifyclone,
    link: "https://64ff390505e2891c04d49721--inquisitive-kheer-6f9b50.netlify.app/"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
