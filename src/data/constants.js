import img1 from "../assets/ExperiencePic/lab101_unal_logo.webp";
import img2 from "../assets/ExperiencePic/sitlen.webp";
import img3 from "../assets/ExperiencePic/unal.webp";
import img4 from "../assets/ExperiencePic/logoSena.webp";
import img5 from "../assets/ExperiencePic/bachiller.webp";
import img6 from "../assets/ExperiencePic/s4l_scienceforlife_logo.webp";
import { Javascript } from "@mui/icons-material";

export const Bio = {
  name: "Bryan Smith",
  roles: ["Ingeniero de Sistemas", "Desarrollador de software"],
  description:
    "Mente motivada y versátil, siempre preparado para afrontar nuevos y grandes desafíos. Mi pasión por el aprendizaje me impulsa a ofrecer resultados de alta calidad en cada proyecto. Con una actitud positiva y una mentalidad de crecimiento, estoy listo para hacer una contribución significativa y alcanzar grandes logros.",
  github: "https://github.com/bcolorado",
  githubPic:
    "https://avatars.githubusercontent.com/u/82072673?s=400&u=279ceb80de20e50e1dbbd92cb9ae154bb39881d8&v=4",
  resume:
    "https://drive.google.com/file/d/1NDN0LA63Ki6nBVT6Hk2ae8FPpLit0pRA/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/smith-colorado/",
  insta: "https://www.instagram.com/smithcol_/",
};

const colors = {
  react: "#1399c4",
  typeScript: "#007acc",
  vite: "#f6ab09",
  bootStrap: "#7952b3",
  python: "#306998",
  django: "#006757",
  mongoDb: "#13aa52",
  mongoAtlas: "#4ea94b",
  rabbitMQ: "#ff6600",
  javascript: "#f7df1e",
  nodeJs: "#68a063",
  express: "#666666",
  graphQL: "#e535ab",
  arquitectura: "#b9b9f7",
  rest: "#f7f2de",
  soap: "#e9b0ac",
  gcp: "#e34033",
  microservicios: "#de5482",
  nube: "#b2d6f3",
  docker: "#2395ec",
  aws: "#e18905",
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
    img: img6,
    role: "Ingeniero de Software",
    company: "Science for Life (S4L)",
    date: "Mayo 2024 - Actualidad",
    desc: "Desempeño el rol de ingeniero de software, participando en el diseño, desarrollo y mantenimiento de diversos proyectos tecnológicos enfocados en el sector salud. Mi trabajo abarca desde la creación de soluciones backend con Python, hasta el desarrollo de interfaces frontend con Angular, e implementación en la nube utilizando AWS. Utilizo una amplia gama de herramientas y tecnologías para construir sistemas robustos, escalables y alineados con las necesidades del cliente.",
    skills: [
      "Python",
      "Angular",
      "AWS",
      "Docker",
      "SQL",
      "Github",
      "Typescript",
      "Arquitectura software",
      "Analisis requerimientos",
      "Entre otros",
    ],
  },
  {
    id: 1,
    img: img1,
    role: "Desarrollador FrontEnd",
    company: "LAB101 UNAL",
    date: "Noviembre 2023 - Agosto 2024",
    desc: "Trabajando en el desarrollo de las interfaces gráficas de usuario para proyectos web usando React y Chakra.",
    skills: ["React", "Chakra", "HTML", "CSS", "JavaScript"],
  },

  {
    id: 2,
    img: img2,
    role: "Desarrollador Backend",
    company: "Sitlen",
    date: "Agosto 2023 - Septiembre 2024",
    desc: "Trabajando en el backend de la plataforma Sitlen, respaldando la creación y mejora continua de servicios esenciales para el proyecto.",
    skills: ["JavaScript", "ExpressJs", "Firebase"],
  },
  {
    id: 3,
    img: img3,
    role: "Arquitecto de Software",
    company: "Universidad Nacional de Colombia",
    date: "Febrero 2023 - Junio 2023",
    desc: "Estuve cumpliendo el rol de Arquitecto de software en un proyecto colaborativo para la materia arquitectura de software en la Universidad Nacional de Colombia.",
    skills: ["GCP", "Arquitectura software", "Microservicios", "REST", "Nube"],
  },
  {
    id: 4,
    img: img3,
    role: "Ingeniería de Sistemas y Computación",
    company: "Universidad Nacional de Colombia",
    date: "Febrero 2020 - Mayo 2025",
    desc: "Ingeniero de sistemas y computación de la Universidad Nacional de Colombia.",
  },
];

const arquiMembers = [
  {
    name: "Bryan Colorado",
    img: Bio.githubPic,
    linkedin: Bio.linkedin,
    github: Bio.github,
  },
  {
    name: "Miguel Puentes",
    img: "https://avatars.githubusercontent.com/u/85960517?v=4",
    linkedin: "https://www.linkedin.com/in/mipuentesc/",
    github: "https://github.com/FallenMap",
  },
  {
    name: "Reinaldo Toledo",
    img: "https://avatars.githubusercontent.com/u/70295723?v=4",
    linkedin: "https://www.linkedin.com/in/reinaldo-toledo/",
    github: "https://github.com/Rey7910",
  },
  {
    name: "Sebastian Peñafiel",
    img: "https://avatars.githubusercontent.com/u/95003496?v=4",
    linkedin: "https://www.linkedin.com/in/sebastian-penafiel/",
    github: "https://github.com/jpenafielo",
  },
  {
    name: "María Cabrales",
    img: "https://avatars.githubusercontent.com/u/71224060?v=4",
    linkedin:
      "https://www.linkedin.com/in/maria-fernanda-cabrales-jaque-a19a8221b/",
    github: "https://github.com/Mafs06",
  },
];

export const projects = [
  {
    id: 0,
    title: "NoteCrafter",
    date: "Marzo 2024",
    description:
      "Aplicación que permite tomar notas con soporte para Markdown, búsqueda y filtrado por categorías desarrollada con React y TypeScript. Es importante destacar que este proyecto marca mi incursión en el uso de TypeScript, lo que representa un hito significativo en mi desarrollo profesional. A través de este proyecto, he tenido la oportunidad de familiarizarme con las características y ventajas de TypeScript, fortaleciendo así mis habilidades como desarrollador y abriendo nuevas oportunidades para futuros proyectos y colaboraciones.",
    image: "https://i.im.ge/2024/04/07/WWwAAf.image.png",
    tags: [
      { name: "React", color: colors.react },
      { name: "TypeScript", color: colors.typeScript },
      { name: "Vite", color: colors.vite },
      { name: "BootStrap", color: colors.bootStrap },
    ],
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
    description:
      "Este microservicio forma parte integral de un sistema compuesto por microservicios y está diseñado para administrar la funcionalidad de chat dentro de la aplicación. Su principal responsabilidad es manejar los mensajes enviados por los usuarios utilizando una cola de mensajería (RabbitMQ), y se implementa mediante contenedores Docker. Actualmente, no está en ejecución debido a labores de mantención de la base de datos y cambios en las variables de entorno.",
    image: "https://i.im.ge/2024/04/07/WWnIF8.image.png",
    tags: [
      { name: "Python", color: colors.python },
      { name: "Django", color: colors.django },
      { name: "MongoDB", color: colors.mongoDb },
      { name: "Mongo Atlas", color: colors.mongoAtlas },
      { name: "RabbitMQ", color: colors.rabbitMQ },
      { name: "Docker", color: colors.docker },
    ],
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
    title: "Componente lógico Api Gateway",
    date: "Abril 2023 - Junio 2023",
    description:
      "Este componente lógico es una parte esencial de un sistema basado en microservicios que se realizó de manera conjunta. Su función principal es orquestar y coordinar todas las solicitudes que llegan desde el cliente, así como gestionar los diferentes microservicios. Utiliza el lenguaje de consulta GraphQL para armar y enviar solicitudes conjuntas a estos microservicios. Además, se despliega en un contenedor Docker para facilitar su implementación y gestión.",
    image: "https://i.im.ge/2024/04/07/WKm93p.image.png",
    tags: [
      { name: "JavaScript", color: colors.javascript },
      { name: "ExpressJs", color: colors.express },
      { name: "NodeJS", color: colors.nodeJs },
      { name: "GraphQL", color: colors.graphQL },
      { name: "RabbitMQ", color: colors.rabbitMQ },
      { name: "Docker", color: colors.docker },
    ],
    category: "back",
    github: "https://github.com/bcolorado/tutoacademy_ag",
    member: arquiMembers,
  },
  {
    id: 3,
    title: "Sistema basado en microservicios",
    date: "Febrero 2023 - Junio 2023",
    description: `Tuto Academy es un sistema de software web diseñado para simplificar el proceso de ofrecer y solicitar servicios de tutorías académicas. Esta plataforma permite a los usuarios crear perfiles para exhibir su experiencia académica y los servicios que ofrecen, así como buscar y contactar a otros usuarios que satisfagan sus necesidades de aprendizaje. Además, ofrece una herramienta integrada de programación de sesiones de tutorías con un calendario para coordinar reuniones en línea. La aplicación también incluye un sistema de calificaciones y valoraciones que permite a los usuarios consultar las opiniones de otros sobre el servicio ofrecido por cada tutor. Dada la escala del proyecto, se ha dividido en microservicios para facilitar el desarrollo y mantenimiento. Cada microservicio se encarga de aspectos específicos del sistema, como la gestión de usuarios, la programación de sesiones de tutorías, la gestión de mensajes y la orquestación de solicitudes. Por otra parte, para garantizar atributos de calidad como seguridad, alta disponibilidad, rendimiento e interoperabilidad, hemos implementado diversas estrategias arquitectónicas, como el uso de proxys inversos, balanceadores de cargar, replicamiento de bases de datos, escalamiento élastico en componentes críticos, autenticación mediante Google OAuth y el diseño de un entorno de despliegue en la nube (GCP). Aunque la aplicación ya no está disponible en producción debido a los costos asociados con su mantenimiento en la nube (GCP), contamos con un video demostrativo que ilustra su funcionamiento en una etapa específica del desarrollo y las diferentes vistas arquitectónicas desarrolladas a lo largo de todo el ciclo de vida del sistema.`,
    image: "https://i.im.ge/2024/04/08/WkzMnT.image.png",
    tags: [
      { name: "Arquitectura software", color: colors.arquitectura },
      { name: "REST", color: colors.rest },
      { name: "SOAP", color: colors.soap },
      { name: "GCP", color: colors.gcp },
      { name: "Nube", color: colors.nube },
      { name: "Microservicios", color: colors.microservicios },
    ],
    category: "arch",
    webapp:
      "https://drive.google.com/drive/folders/1XICgmD71D3Gq7ZotqapI12Q27bkgrHu7?usp=sharing",
    member: arquiMembers,
  },
  {
    id: 4,
    title: "Curso AWS Academy Cloud Architecting",
    date: "Noviembre 2023 - Diciembre 2023",
    description:
      "En el curso AWS Academy Cloud Architecting aprendí cómo utilizar de forma básica y eficaz Amazon WebServices (AWS) para crear infraestructuras de TI en la nube. Se cubren prácticas recomendadas, revisión de los 6 pilares del well architected framework, patrones de diseño y casos prácticos para optimizar soluciones basadas en la nube.",
    image: "https://i.im.ge/2024/04/08/WHWXuh.image.png",
    tags: [
      ,
      { name: "AWS", color: colors.aws },
      { name: "Arquitectura software", color: colors.arquitectura },
      { name: "Nube", color: colors.nube },
    ],
    category: "cert",
    member: [
      {
        name: "Bryan Colorado",
        img: Bio.githubPic,
        linkedin: Bio.linkedin,
        github: Bio.github,
      },
    ],
    webapp:
      "https://drive.google.com/file/d/1ne2U5WS6mU6mSCOUvoI30qrEnEsI9C_p/view",
  },
  {
    id: 5,
    title: "Curso Cisco Cybersecurity Essentials",
    date: "Agosto 2023 - Noviembre 2023",
    description:
      "En este curso he adquirido comprensión en seguridad de redes, encriptación y leyes de ciberseguridad. Además, he sido introducido a tácticas utilizadas por ciberatacantes y en los principios seguidos por los defensores para proteger redes, incluyendo Confidencialidad, Integridad y Disponibilidad",
    image: "https://i.im.ge/2024/04/08/WHJw7h.image.png",
    tags: [
      ,
      { name: "Ciberseguridad", color: colors.typeScript },
      { name: "Cisco", color: colors.nube },
      { name: "Integridad", color: colors.graphQL },
      { name: "Confidencialidad", color: colors.nodeJs },
      { name: "Disponibilidad", color: colors.javascript },
    ],
    category: "cert",
    member: [
      {
        name: "Bryan Colorado",
        img: Bio.githubPic,
        linkedin: Bio.linkedin,
        github: Bio.github,
      },
    ],
    webapp:
      "https://drive.google.com/file/d/15NB1nzntq4MNHoMbJf7kOxvuMAynDpUH/view",
  },
];

export const education = [
  {
    id: 0,
    img: img3,
    school: "Universidad Nacional de Colombia, Bogotá",
    date: "Febrero 2020 - Mayo 2025",
    grade: " 4.5/5.0",
    desc: "Pregrado finalizado en Ingeniería de Sistemas y computación en la Universidad Nacional de Colombia, Bogotá. He enfocado gran parte de mi trayectoría al desarrollo y la arquitectura de software. He tomado cursos de Estructuras de Datos, Algoritmos, Programación orientada a Objetos, Bases de Datos, Criptografia, Redes de Computadores, Arquitectura de Software, entre muchos otros.",
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
    desc: "Institución educativa en la que hice mi bachillerato y me gradué de once.",
    degree: "Colegio - Bachillerato",
  },
];

export const quote = [
  {
    quote:
      "«El paso más importante que puede dar alguien. No es el primero, ¿verdad?»\n\n«Es el próximo. Siempre el próximo paso»",
    author: "Brandon Sanderson",
    source: "Oathbringer",
  },
];
