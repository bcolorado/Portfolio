import img1 from "../assets/ExperiencePic/lab101_unal_logo.jpg";
import img2 from "../assets/ExperiencePic/sitlen.jpg";

export const Bio = {
  name: "Bryan Smith",
  roles: ["Ingeniero de Sistemas", "Desarrollador de software"],
  description:
    "Mente motivada y versátil, siempre preparado para afrontar nuevos y grandes desafíos. Mi pasión por el aprendizaje me impulsa a ofrecer resultados de alta calidad en cada proyecto. Con una actitud positiva y una mentalidad de crecimiento, estoy listo para hacer una contribución significativa y alcanzar grandes logros.",
  github: "https://github.com/bcolorado",
  resume:
    "https://drive.google.com/file/d/1taTCSAG-h1IGkxyDZGNaFDW2l8JKU_1h/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/smith-colorado/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        id: "react",
      },
      {
        name: "HTML",
        id: "html",
      },
      {
        name: "CSS",
        id: "css",
      },
      {
        name: "JavaScript",
        id: "javascript",
      },
      {
        name: "MUI components",
        id: "mui",
      },
      {
        name: "Chakra UI",
        id: "chakra",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "NodeJs",
        id: "node",
      },
      {
        name: "Python",
        id: "python",
      },
      {
        name: "MongoDB",
        id: "mongo",
      },
      {
        name: "Firebase",
        id: "firebase",
      },
      {
        name: "MySql",
        id: "mysql",
      },
      {
        name: "ExpressJs",
        id: "express",
      },
      {
        name: "Django",
        id: "django",
      },
      {
        name: "GraphQl",
        id: "graphql",
      },
    ],
  },
  {
    title: "Otros",
    skills: [
      {
        name: "Git",
        id: "git",
      },
      {
        name: "Github",
        id: "github",
      },
      {
        name: "Postman",
        id: "postman",
      },
      {
        name: "Docker",
        id: "docker",
      },
      {
        name: "AWS",
        id: "aws",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: img1,
    role: "Desarrollador FrontEnd",
    company: "LAB101 UNAL",
    date: "Noviembre 2023 - Actualidad",
    desc: "Trabajando en el desarrollo de las interfaces gráficas de usuario para proyectos web usando React y Chakra.",
    skills: ["React", "Chakra", "HTML", "CSS", "JavaScript"],
  },

  {
    id: 1,
    img: img2,
    role: "Desarrollador Backend",
    company: "Sitlen",
    date: "Agosto 2023 - Actualidad",
    desc: "Trabajando en el backend de la plataforma Sitlen, respaldando la creación y mejora continua de servicios esenciales para el proyecto.",
    skills: ["JavaScript", "ExpressJs", "Firebase"],
  },
];

export const projects = [
  {
    id: 0,
    title: "Test front",
    date: "Jun 2023 - Jul 2023",
    description: "This is a placeholder",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: ["Docker", "AWS", "JavaScript"],
    category: "front",
    github: "https://github.com/bcolorado",
    webapp: "https://www.google.com/",
  },
  {
    id: 1,
    title: "Test back",
    date: "Jun 2023 - Jul 2023",
    description: "This is a placeholder",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: ["Docker", "AWS", "JavaScript"],
    category: "back",
    github: "https://github.com/bcolorado",
    webapp: "https://www.google.com/",
  },
  {
    id: 1,
    title: "Test arch",
    date: "Jun 2023 - Jul 2023",
    description: "This is a placeholder",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: ["Docker", "AWS", "JavaScript"],
    category: "arch",
    github: "https://github.com/bcolorado",
    webapp: "https://www.google.com/",
  },
];
