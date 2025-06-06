export const translations = {
  es: {
    Bio: {
      name: "Bryan Smith",
      roles: ["Ingeniero de Sistemas", "Desarrollador de software"],
      description:
        "Mente motivada y versátil, siempre preparado para afrontar nuevos y grandes desafíos. Mi pasión por el aprendizaje me impulsa a ofrecer resultados de alta calidad en cada proyecto. Con una actitud positiva y una mentalidad de crecimiento, estoy listo para hacer una contribución significativa y alcanzar grandes logros.",
      resume:
        "https://drive.google.com/file/d/1qpnq9cCwOHPqGdXNnWX1nCWkRozlZFCH/view?usp=drive_link",
      github: "https://github.com/bcolorado",
      linkedin: "https://www.linkedin.com/in/smith-colorado/",
      githubPic:
        "https://avatars.githubusercontent.com/u/82072673?s=400&u=279ceb80de20e50e1dbbd92cb9ae154bb39881d8&v=4",
    },
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Educación",
    },
    buttons: {
      viewCV: "Ver CV",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      viewCertificate: "Ver Certificado",
    },
    technologies: {
      "Software Engineer": "Ingeniero de Software",
      "Software Architecture": "Arquitectura de software",
      "Requirements Analysis": "Análisis de requerimientos",
      "Among others": "Entre otros",
      "Software Architect": "Arquitecto de Software",
      Microservices: "Microservicios",
      Cloud: "Nube",
      Cybersecurity: "Ciberseguridad",
      Integrity: "Integridad",
      Confidentiality: "Confidencialidad",
      Availability: "Disponibilidad",
    },
    sections: {
      about: {
        iAm: "Soy",
        myNameIs: "Mi nombre es",
      },
      skills: {
        title: "Habilidades",
        description:
          "Estas son algunas de las habilidades que he adquirido a lo largo de mi carrera profesional:",
        frontend: "Frontend",
        backend: "Backend",
        others: "Otros",
      },
      experience: {
        title: "Experiencia",
        description:
          "Mi experiencia como desarrollador e ingeniero de Sistemas en diferentes puestos y proyectos:",
        technologies: "Tecnologías",
        items: {
          s4l: {
            role: "Ingeniero de Software",
            company: "Science for Life (S4L)",
            date: "Mayo 2024 - Actualidad",
            desc: "Desempeño el rol de ingeniero de software, participando en el diseño, desarrollo y mantenimiento de diversos proyectos tecnológicos enfocados en el sector salud. Mi trabajo abarca desde la creación de soluciones backend con Python, hasta el desarrollo de interfaces frontend con Angular, e implementación en la nube utilizando AWS. Utilizo una amplia gama de herramientas y tecnologías para construir sistemas robustos, escalables y alineados con las necesidades del cliente.",
          },
          lab101: {
            role: "Desarrollador FrontEnd",
            company: "LAB101 UNAL",
            date: "Noviembre 2023 - Agosto 2024",
            desc: "Trabajando en el desarrollo de las interfaces gráficas de usuario para proyectos web usando React y Chakra.",
          },
          sitlen: {
            role: "Desarrollador Backend",
            company: "Sitlen",
            date: "Agosto 2023 - Septiembre 2024",
            desc: "Trabajando en el backend de la plataforma Sitlen, respaldando la creación y mejora continua de servicios esenciales para el proyecto.",
          },
          unal_architect: {
            role: "Arquitecto de Software",
            company: "Universidad Nacional de Colombia",
            date: "Febrero 2023 - Junio 2023",
            desc: "Estuve cumpliendo el rol de Arquitecto de software en un proyecto colaborativo para la materia arquitectura de software en la Universidad Nacional de Colombia.",
          },
          unal_degree: {
            role: "Ingeniería de Sistemas y Computación",
            company: "Universidad Nacional de Colombia",
            date: "Febrero 2020 - Mayo 2025",
            desc: "Ingeniero de sistemas y computación de la Universidad Nacional de Colombia.",
          },
        },
      },
      projects: {
        title: "Proyectos, insignias y certificados",
        description:
          "He trabajado en varios proyectos. Desde el desarrollo de aplicaciones web (Front/Back) hasta el diseño de bases de datos y arquitecturas de software.",
        filters: {
          all: "Todos",
          frontend: "Frontend",
          backend: "Backend",
          architecture: "Arquitectura",
          certificates: "Certificados",
        },
        labels: {
          members: "Miembros",
          technologies: "Tecnologías",
        },
        items: {
          notecrafter: {
            title: "NoteCrafter",
            date: "Marzo 2024",
            description:
              "Aplicación que permite tomar notas con soporte para Markdown, búsqueda y filtrado por categorías desarrollada con React y TypeScript. Es importante destacar que este proyecto marca mi incursión en el uso de TypeScript, lo que representa un hito significativo en mi desarrollo profesional. A través de este proyecto, he tenido la oportunidad de familiarizarme con las características y ventajas de TypeScript, fortaleciendo así mis habilidades como desarrollador y abriendo nuevas oportunidades para futuros proyectos y colaboraciones.",
          },
          chat_ms: {
            title: "Microservicio Chats",
            date: "Marzo 2023",
            description:
              "Este microservicio forma parte integral de un sistema compuesto por microservicios y está diseñado para administrar la funcionalidad de chat dentro de la aplicación. Su principal responsabilidad es manejar los mensajes enviados por los usuarios utilizando una cola de mensajería (RabbitMQ), y se implementa mediante contenedores Docker. Actualmente, no está en ejecución debido a labores de mantención de la base de datos y cambios en las variables de entorno.",
          },
          api_gateway: {
            title: "Componente lógico Api Gateway",
            date: "Abril 2023 - Junio 2023",
            description:
              "Este componente lógico es una parte esencial de un sistema basado en microservicios que se realizó de manera conjunta. Su función principal es orquestar y coordinar todas las solicitudes que llegan desde el cliente, así como gestionar los diferentes microservicios. Utiliza el lenguaje de consulta GraphQL para armar y enviar solicitudes conjuntas a estos microservicios. Además, se despliega en un contenedor Docker para facilitar su implementación y gestión.",
          },
          tuto_academy: {
            title: "Sistema basado en microservicios",
            date: "Febrero 2023 - Junio 2023",
            description:
              "Tuto Academy es un sistema de software web diseñado para simplificar el proceso de ofrecer y solicitar servicios de tutorías académicas. Esta plataforma permite a los usuarios crear perfiles para exhibir su experiencia académica y los servicios que ofrecen, así como buscar y contactar a otros usuarios que satisfagan sus necesidades de aprendizaje. Además, ofrece una herramienta integrada de programación de sesiones de tutorías con un calendario para coordinar reuniones en línea. La aplicación también incluye un sistema de calificaciones y valoraciones que permite a los usuarios consultar las opiniones de otros sobre el servicio ofrecido por cada tutor. Dada la escala del proyecto, se ha dividido en microservicios para facilitar el desarrollo y mantenimiento. Cada microservicio se encarga de aspectos específicos del sistema, como la gestión de usuarios, la programación de sesiones de tutorías, la gestión de mensajes y la orquestación de solicitudes. Por otra parte, para garantizar atributos de calidad como seguridad, alta disponibilidad, rendimiento e interoperabilidad, hemos implementado diversas estrategias arquitectónicas, como el uso de proxys inversos, balanceadores de cargar, replicamiento de bases de datos, escalamiento élastico en componentes críticos, autenticación mediante Google OAuth y el diseño de un entorno de despliegue en la nube (GCP). Aunque la aplicación ya no está disponible en producción debido a los costos asociados con su mantenimiento en la nube (GCP), contamos con un video demostrativo que ilustra su funcionamiento en una etapa específica del desarrollo y las diferentes vistas arquitectónicas desarrolladas a lo largo de todo el ciclo de vida del sistema.",
          },
          aws_course: {
            title: "Curso AWS Academy Cloud Architecting",
            date: "Noviembre 2023 - Diciembre 2023",
            description:
              "En el curso AWS Academy Cloud Architecting aprendí cómo utilizar de forma básica y eficaz Amazon WebServices (AWS) para crear infraestructuras de TI en la nube. Se cubren prácticas recomendadas, revisión de los 6 pilares del well architected framework, patrones de diseño y casos prácticos para optimizar soluciones basadas en la nube.",
          },
          cisco_course: {
            title: "Curso Cisco Cybersecurity Essentials",
            date: "Agosto 2023 - Noviembre 2023",
            description:
              "En este curso he adquirido comprensión en seguridad de redes, encriptación y leyes de ciberseguridad. Además, he sido introducido a tácticas utilizadas por ciberatacantes y en los principios seguidos por los defensores para proteger redes, incluyendo Confidencialidad, Integridad y Disponibilidad",
          },
        },
      },
      education: {
        title: "Educación",
        description:
          "Mi educación ha sido un viaje de autodescubrimiento y crecimiento. Mis estudios importantes han sido los siguientes.",
        grade: "Promedio",
        items: {
          unal: {
            school: "Universidad Nacional de Colombia, Bogotá",
            date: "Febrero 2020 - Mayo 2025",
            grade: "4.5/5.0",
            desc: "Pregrado finalizado en Ingeniería de Sistemas y computación en la Universidad Nacional de Colombia, Bogotá. He enfocado gran parte de mi trayectoría al desarrollo y la arquitectura de software. He tomado cursos de Estructuras de Datos, Algoritmos, Programación orientada a Objetos, Bases de Datos, Criptografia, Redes de Computadores, Arquitectura de Software, entre muchos otros.",
            degree:
              "Pregrado universitario - Ingeniería de Sistemas y Computación.",
          },
          sena: {
            school: "Servicio Nacional de Aprendizaje SENA, Soacha",
            date: "Febrero 2015 - Noviembre 2017",
            grade: "4.5/5.0",
            desc: "Técnico en Sistemas en el que aprendí las bases lógicas de la programación, así como un primer acercamiento a lenguajes básicos como DFD y LPP. De igual forma, obtuve conocimientos básicos de componentes de harware y su correcto mantenimiento preventivo y correctivo.",
            degree: "Técnico - Sistemas",
          },
          school: {
            school: "Gimnasio Moderno Robinson Crusoe, Soacha",
            date: "Febrero 2015 - Noviembre 2017",
            grade: "N/A",
            desc: "Institución educativa en la que hice mi bachillerato y me gradué de once.",
            degree: "Colegio - Bachillerato",
          },
        },
      },
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
    quote: {
      text: "«El paso más importante que puede dar alguien. No es el primero, ¿verdad?»\n\n«Es el próximo. Siempre el próximo paso»",
      author: "Brandon Sanderson",
      source: "Oathbringer",
    },
  },
  en: {
    Bio: {
      name: "Bryan Smith",
      roles: ["Systems Engineer", "Software Developer"],
      description:
        "Motivated and versatile mind, always ready to face new and big challenges. My passion for learning drives me to deliver high-quality results in every project. With a positive attitude and a growth mindset, I'm ready to make a significant contribution and achieve great accomplishments.",
      resume:
        "https://drive.google.com/file/d/1FLZ9N-y3cqQfm_a7bLz0kRePXqeRj_It/view?usp=drive_link",
      github: "https://github.com/bcolorado",
      linkedin: "https://www.linkedin.com/in/smith-colorado/",
      githubPic:
        "https://avatars.githubusercontent.com/u/82072673?s=400&u=279ceb80de20e50e1dbbd92cb9ae154bb39881d8&v=4",
    },
    nav: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
    },
    buttons: {
      viewCV: "View CV",
      viewProject: "View Project",
      viewCode: "View Code",
      viewCertificate: "View Certificate",
    },
    technologies: {
      "Software Engineer": "Software Engineer",
      "Software Architecture": "Software Architecture",
      "Requirements Analysis": "Requirements Analysis",
      "Among others": "Among others",
      "Software Architect": "Software Architect",
      Microservices: "Microservices",
      Cloud: "Cloud",
      Cybersecurity: "Cybersecurity",
      Integrity: "Integrity",
      Confidentiality: "Confidentiality",
      Availability: "Availability",
    },
    sections: {
      about: {
        iAm: "I am a",
        myNameIs: "My name is",
      },
      skills: {
        title: "Skills",
        description:
          "These are some of the skills I have acquired throughout my professional career:",
        frontend: "Frontend",
        backend: "Backend",
        others: "Others",
      },
      experience: {
        title: "Experience",
        description:
          "My experience as a developer and Systems Engineer in different positions and projects:",
        technologies: "Technologies",
        items: {
          s4l: {
            role: "Software Engineer",
            company: "Science for Life (S4L)",
            date: "May 2024 - Present",
            desc: "I perform the role of software engineer, participating in the design, development, and maintenance of various technology projects focused on the healthcare sector. My work ranges from creating backend solutions with Python to developing frontend interfaces with Angular, and cloud implementation using AWS. I use a wide range of tools and technologies to build robust, scalable systems aligned with client needs.",
          },
          lab101: {
            role: "Frontend Developer",
            company: "LAB101 UNAL",
            date: "November 2023 - August 2024",
            desc: "Working on the development of graphical user interfaces for web projects using React and Chakra.",
          },
          sitlen: {
            role: "Backend Developer",
            company: "Sitlen",
            date: "August 2023 - September 2024",
            desc: "Working on the backend of the Sitlen platform, supporting the creation and continuous improvement of essential services for the project.",
          },
          unal_architect: {
            role: "Software Architect",
            company: "Universidad Nacional de Colombia",
            date: "February 2023 - June 2023",
            desc: "I was fulfilling the role of Software Architect in a collaborative project for the software architecture course at the National University of Colombia.",
          },
          unal_degree: {
            role: "Systems Engineering and Computing",
            company: "Universidad Nacional de Colombia",
            date: "February 2020 - May 2025",
            desc: "Systems and Computing Engineer from the National University of Colombia.",
          },
        },
      },
      projects: {
        title: "Projects, badges and certificates",
        description:
          "I have worked on various projects. From web application development (Front/Back) to database design and software architectures.",
        filters: {
          all: "All",
          frontend: "Frontend",
          backend: "Backend",
          architecture: "Architecture",
          certificates: "Certificates",
        },
        labels: {
          members: "Members",
          technologies: "Technologies",
        },
        items: {
          notecrafter: {
            title: "NoteCrafter",
            date: "March 2024",
            description:
              "Application that allows taking notes with Markdown support, search, and category filtering developed with React and TypeScript. It's important to highlight that this project marks my foray into using TypeScript, which represents a significant milestone in my professional development. Through this project, I've had the opportunity to familiarize myself with TypeScript's features and advantages, thus strengthening my skills as a developer and opening new opportunities for future projects and collaborations.",
          },
          chat_ms: {
            title: "Chats Microservice",
            date: "March 2023",
            description:
              "This microservice is an integral part of a microservices-based system and is designed to manage the chat functionality within the application. Its main responsibility is to handle messages sent by users using a message queue (RabbitMQ), and it is implemented using Docker containers. Currently, it is not running due to database maintenance work and changes in environment variables.",
          },
          api_gateway: {
            title: "Api Gateway Logical Component",
            date: "April 2023 - June 2023",
            description:
              "This logical component is an essential part of a microservices-based system that was developed collaboratively. Its main function is to orchestrate and coordinate all requests coming from the client, as well as manage the different microservices. It uses the GraphQL query language to build and send joint requests to these microservices. Additionally, it is deployed in a Docker container to facilitate its implementation and management.",
          },
          tuto_academy: {
            title: "Microservices-based System",
            date: "February 2023 - June 2023",
            description:
              "Tuto Academy is a web software system designed to simplify the process of offering and requesting academic tutoring services. This platform allows users to create profiles to showcase their academic experience and the services they offer, as well as search for and contact other users who meet their learning needs. Additionally, it offers an integrated tutoring session scheduling tool with a calendar to coordinate online meetings. The application also includes a rating and review system that allows users to consult others' opinions about the service offered by each tutor. Given the scale of the project, it has been divided into microservices to facilitate development and maintenance. Each microservice handles specific aspects of the system, such as user management, tutoring session scheduling, message management, and request orchestration. Moreover, to ensure quality attributes such as security, high availability, performance, and interoperability, we have implemented various architectural strategies, such as the use of reverse proxies, load balancers, database replication, elastic scaling in critical components, Google OAuth authentication, and the design of a cloud deployment environment (GCP). Although the application is no longer available in production due to costs associated with its maintenance in the cloud (GCP), we have a demo video that illustrates its operation at a specific stage of development and the different architectural views developed throughout the system's lifecycle.",
          },
          aws_course: {
            title: "AWS Academy Cloud Architecting Course",
            date: "November 2023 - December 2023",
            description:
              "In the AWS Academy Cloud Architecting course, I learned how to effectively use Amazon WebServices (AWS) to create cloud IT infrastructures at a basic level. It covers best practices, review of the 6 pillars of the well-architected framework, design patterns, and practical cases to optimize cloud-based solutions.",
          },
          cisco_course: {
            title: "Cisco Cybersecurity Essentials Course",
            date: "August 2023 - November 2023",
            description:
              "In this course, I have gained understanding in network security, encryption, and cybersecurity laws. Additionally, I have been introduced to tactics used by cyber attackers and the principles followed by defenders to protect networks, including Confidentiality, Integrity, and Availability",
          },
        },
      },
      education: {
        title: "Education",
        description:
          "My education has been a journey of self-discovery and growth. My important studies have been the following.",
        grade: "Academic average",
        items: {
          unal: {
            school: "Universidad Nacional de Colombia, Bogotá",
            date: "February 2020 - May 2025",
            grade: "4.5/5.0",
            desc: "Completed undergraduate degree in Systems Engineering and Computing at the National University of Colombia, Bogotá. I have focused a large part of my career on software development and architecture. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Databases, Cryptography, Computer Networks, Software Architecture, among many others.",
            degree:
              "University Undergraduate - Systems Engineering and Computing.",
          },
          sena: {
            school: "National Learning Service SENA, Soacha",
            date: "February 2015 - November 2017",
            grade: "4.5/5.0",
            desc: "Systems Technician where I learned the logical foundations of programming, as well as a first approach to basic languages such as DFD and LPP. Similarly, I gained basic knowledge of hardware components and their correct preventive and corrective maintenance.",
            degree: "Technical Degree - Systems",
          },
          school: {
            school: "Gimnasio Moderno Robinson Crusoe, Soacha",
            date: "February 2015 - November 2017",
            grade: "N/A",
            desc: "Educational institution where I completed my high school education and graduated.",
            degree: "High School - Secondary Education",
          },
        },
      },
    },
    footer: {
      rights: "All rights reserved",
    },
    quote: {
      text: "«The most important step a person can take. It's not the first one, is it?»\n\n«It's the next one. Always the next step»",
      author: "Brandon Sanderson",
      source: "Oathbringer",
    },
  },
};
