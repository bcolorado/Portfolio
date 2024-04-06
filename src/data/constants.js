import img1 from "../assets/ExperiencePic/lab101_unal_logo.webp";
import img2 from "../assets/ExperiencePic/sitlen.webp";
import img3 from '../assets/ExperiencePic/unal.webp'
import img4 from '../assets/ExperiencePic/logoSena.webp'
import img5 from '../assets/ExperiencePic/bachiller.webp'

export const Bio = {
  name: "Bryan Smith",
  roles: ["Ingeniero de Sistemas", "Desarrollador de software"],
  description:
    "Mente motivada y versátil, siempre preparado para afrontar nuevos y grandes desafíos. Mi pasión por el aprendizaje me impulsa a ofrecer resultados de alta calidad en cada proyecto. Con una actitud positiva y una mentalidad de crecimiento, estoy listo para hacer una contribución significativa y alcanzar grandes logros.",
  github: "https://github.com/bcolorado",
  githubPic: "https://avatars.githubusercontent.com/u/82072673?s=400&u=279ceb80de20e50e1dbbd92cb9ae154bb39881d8&v=4",
  resume:
    "https://drive.google.com/file/d/1taTCSAG-h1IGkxyDZGNaFDW2l8JKU_1h/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/smith-colorado/",
  insta: "https://www.instagram.com/smithcol_/"
};


const colors ={
  react: "#1399c4",
  typeScript: "#007acc",
  vite : "#f6ab09",
  bootStrap : "#7952b3",
  python : "#306998",
  django : "#006757",
  MongoDb : "#13aa52",
  MongoAtlas : "#4ea94b",
  RabbitMQ : "#ff6600",
}

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
  {
    id: 2,
    img: img3,
    role: "Arquitecto de Software",
    company: "Universidad Nacional de Colombia",
    date: "Febrero 2023 - Junio 2023",
    desc: "Estuve cumpliendo el rol de Arquitecto de software en un proyecto colaborativo para la materia arquitectura de software en la Universidad Nacional de Colombia.",
    skills: ["GCP", "Docker"],
  },
  {
    id: 3,
    img: img3,
    role: "Ingeniería de Sistemas y Computación",
    company: "Universidad Nacional de Colombia",
    date: "Febrero 2020 - Actualidad",
    desc: "Estudiante activo de ingeniería de sistemas y computación de la Universidad Nacional de Colombia.",
  },
];

export const projects = [
  {
    id: 0,
    title: "NoteCrafter",
    date: "Marzo 2024",
    description: "Aplicación que permite tomar notas con soporte para Markdown, búsqueda y filtrado por categorías desarrollada con React y TypeScript. Es importante destacar que este proyecto marca mi incursión en el uso de TypeScript, lo que representa un hito significativo en mi desarrollo profesional. A través de este proyecto, he tenido la oportunidad de familiarizarme con las características y ventajas de TypeScript, fortaleciendo así mis habilidades como desarrollador y abriendo nuevas oportunidades para futuros proyectos y colaboraciones.",
    image:
      "https://i.im.ge/2024/04/07/WWwAAf.image.png",
    tags: [{name:"React", color:colors.react}, {name:"TypeScript", color:colors.typeScript},{ name:"Vite", color:colors.vite}, { name:"BootStrap", color:colors.bootStrap}],
    category: "front",
    github: "https://github.com/bcolorado/Note-crafter",
    webapp: "https://notecrafter.netlify.app/",
    member: [
      {
        name: "Bryan Colorado",
        img: Bio.githubPic,
        linkedin: Bio.linkedin,
        github: Bio.github,
      },
    ],
  },

  {
    id: 1,
    title: "Microservicio Chats",
    date: "Marzo 2023",
    description: "Este microservicio forma parte integral de un sistema compuesto por microservicios y está diseñado para administrar la funcionalidad de chat dentro de la aplicación. Su principal responsabilidad es manejar los mensajes enviados por los usuarios utilizando una cola de mensajería (RabbitMQ), y se implementa mediante contenedores Docker. Actualmente, no está en ejecución debido a labores de mantención de la base de datos y cambios en las variables de entorno.",
    image:
      "https://i.im.ge/2024/04/07/WWnIF8.image.png",
    tags: [{name:"Python", color:colors.python}, {name:"Django", color:colors.django},{ name:"MongoDB", color:colors.MongoDb}, { name:"Mongo Atlas", color:colors.MongoAtlas}, { name:"RabbitMQ", color:colors.RabbitMQ}],
    category: "back",
    github: "https://github.com/bcolorado/tutoacademy_chat_ms/",
    member: [
      {
        name: "Bryan Colorado",
        img: Bio.githubPic,
        linkedin: Bio.linkedin,
        github: Bio.github,
      },
    ],
  },
  {
    id: 2,
    title: "Test arch",
    date: "Jun 2023 - Jul 2023",
    description: "This is a placeholder",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: [{name:"Docker", color:"#2395ec"}, {name:"AWS", color:"#e18905"},{ name:"JavaScript", color:"#f7df1e"}],
    category: "arch",
    github: "https://github.com/bcolorado",
    webapp: "https://www.google.com/",
  },
  {
    id: 3,
    title: "Test cert",
    date: "Jun 2023 - Jul 2023",
    description: "This is a placeholder",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: [{name:"Docker", color:"#2395ec"}, {name:"AWS", color:"#e18905"},{ name:"JavaScript", color:"#f7df1e"}],
    category: "cert",
    github: "https://github.com/bcolorado",
    webapp: "https://www.google.com/",
  },
];

export const education = [
  {
    id: 0,
    img: img3,
    school: "Universidad Nacional de Colombia, Bogotá",
    date: "Febrero 2020 - Actualidad",
    grade: " 4.5/5.0",
    desc: "Actualmente estoy cursando un pregrado en Ingeniería de Sistemas y computación en la Universidad Nacional de Colombia, Bogotá. Me encuentro en noveno semestre y he enfocado gran parte de mi trayectoría al desarrollo y la arquitectura de software. He tomado cursos de Estructuras de Datos, Algoritmos, Programación orientada a Objetos, Bases de Datos, Criptografia, Redes de Computadores, Arquitectura de Software, entre muchos otros.",
    degree: "Pregrado universitario - Ingeniería de Sistemas y Computación.",
  },
  {
    id: 1,
    img: img4,
    school: "Servicio Nacional de Aprendizaje SENA, Soacha",
    date: "Febrero 2015 - Noviembre 2017",
    grade: " 4.5/5.0",
    desc: "Técnico en Sistemas en el que aprendí las bases lógicas de la programación, así como un primer acercamiento a lenguajes básicos como DFD y LPP. De igual forma, obtuve conocimientos básicos de componentes de harware y su correcto mantenimiento preventivo y correctivo.",
    degree: "Técnico - Sistemas",
  },
  {
    id: 1,
    img: img5,
    school: "Gimnasio Moderno Robinson Crusoe, Soacha",
    date: "Febrero 2015 - Noviembre 2017",
    grade: " N/A",
    desc: "Colegio en el que hice mi bachillerato y me gradué de once.",
    degree: "Colegio - Bachillerato",
  },
 
];

export const quote =[
  {
    quote:'«El paso más importante que puede dar alguien. No es el primero, ¿verdad?»\n\n«Es el próximo. Siempre el próximo paso»',
    author: "Brandon Sanderson",
    source: "Oathbringer",
  },
]