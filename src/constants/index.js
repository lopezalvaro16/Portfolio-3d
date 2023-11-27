import { creva, meta, shopify, tesla } from "../assets/images";
import {
  mando,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  nodejs,
  mundo,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  pricewise,
  ferreteria,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "CreVa",
    icon: creva,
    iconBg: "#fff",
    date: "Septiembre 2023 - Noviembre 2023",
    points: [
      "Desarrollando y manteniendo aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Implementando diseño responsive y asegurando compatibilidad entre navegadores.",
      "Colaborando en el diseño de la página para garantizar una experiencia integral y estéticamente atractiva.",
      "Participando en revisiones de código y brindando retroalimentación constructiva a otros desarrolladores.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: mundo,
    theme: "btn-back-pink",
    name: "CreVa",
    description:
      "He creado una plataforma web dinámica y moderna para CreVa Group, con el objetivo de proporcionar soluciones integrales a profesionales que buscan avanzar en sus carreras. ",
    link: "https://github.com/CrevaGroup/client",
  },
  {
    iconUrl: mando,
    theme: "btn-back-green",
    name: "Henry PI - Video Games",
    description:
      "Desarrollé una aplicación que presenta videojuegos, permitiendo a los usuarios explorar, obtener detalles y agregar nuevos títulos. La interfaz intuitiva facilita la búsqueda y ofrece una experiencia completa para los amantes de los videojuegos.",
    link: "https://github.com/lopezalvaro16/PI-Videogames",
  },

  {
    iconUrl: snapgram,
    theme: "btn-back-blue",
    name: "Galeria de fotos",
    description:
      " Creé una aplicación web de Galería de Fotos Personal que simplifica la exhibición y gestión de fotos de viajes, con galería personalizada, álbumes temáticos y una interfaz optimizada.",
    link: "https://github.com/lopezalvaro16/Galeria-Fotos",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Tienda con JS",
    description:
      "Creé una tienda virtual llamada Tienda con interfaz intuitiva, detalles de productos y opciones de compra en el carrito, además de información adicional sobre características y envío.",
    link: "https://github.com/lopezalvaro16/Tienda",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Formulario de Banco",
    description:
      "Creé una aplicación web segura para transferencias bancarias con formulario intuitivo, validación de datos, confirmación y autorización para transacciones especiales.",
    link: "https://github.com/lopezalvaro16/Formulario",
  },
  {
    iconUrl: ferreteria,
    theme: "btn-back-yellow",
    name: "U.T.N Proyecto Final Ferreteria",
    description:
      "Desarrollé una aplicación en C# con Windows Form diseñada para gestionar ventas en una ferretería.",
    link: "https://github.com/lopezalvaro16/Sistema-de-ventas-de-una-Ferreteria",
  },
];
