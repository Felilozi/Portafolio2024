import { BookText, CodeSquare,Phone ,Mail  ,  Building2 , HomeIcon, UserRound, Linkedin, Rss, Crop, Pencil, Computer, Book, Rocket, SmilePlus, Instagram } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: process.env.REACT_APP_INSTAGRAM_URL,
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: process.env.REACT_APP_LINKEDIN_URL,
    },
 
    {
        id: 3,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
  
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Portafolio",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portafolio",
    },
    {
        id: 5,
        title: "Otras-Habilidades ",
        icon: <SmilePlus size={25} color="#fff" strokeWidth={1} />,
        link: "/habilidades",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer - HTML, CSS, SASS",
        subtitle: "CreArte ",
        description: "He creado esta página para mi cuñada, una talentosa artesana que trabaja con diversos materiales, encontrarás sus piezas únicas y elaboradas con mucha dedicación",
        date: "Apr 2022 ",
    },
    {
        id: 2,
        title: "Frontend Developer - React - JS ",
        subtitle: "React E-Commerce Glamur!",
        description: "Un proyecto innovador de tienda de ropa en línea, desarrollado durante mi segundo curso de React. Permite la compra de productos y su almacenamiento en una base de datos Firebase. Aunque es un proyecto básico, me brindó un valioso aprendizaje al fusionar creatividad y tecnología.",
        date: "Jul 2023",
    },
    {
        id: 3,
        title: "Backend-app",
        subtitle: "API-REST",
        description: "Desarrollé una API como parte de un curso integral de backend. La API permite la gestión de usuarios, productos y pedidos, integrando funcionalidades avanzadas como autenticación con JWT , manejo de archivos con Multer, y persistencia de datos con MongoDB y Mongoose. Incluye soporte para sesiones y cookies, y emplea Websockets para actualizaciones en tiempo real. Actualmente en fase de pruebas.",
        date: "Mar 2024",
    },
    {
        id: 4,
        title: "Frontend Developer - React - JS",
        subtitle: "To-do-li",
        description: "Desarrollé una lista de tareas básica en React, aprovechando recursos como YouTube y otros tutoriales. Este proyecto, realizado de manera autodidacta, me permitió profundizar en mis conocimientos de React y mejorar mis habilidades en el desarrollo web. Fue una experiencia enriquecedora y fundamental para mi aprendizaje.",
        date: "Jul 2024",
    },

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Experiencia en programación",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 5,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 7,
        text: "Certificaciones completadas",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 4,
        text: "Idiomas hablados",
        lineRight: true,
        lineRightMobile: true,
    },

];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "Analítica de Datos",
        description: "Análisis de datos estratégico para decisiones empresariales informadas y efectivas.",
    },
];

export const dataPortfolio = [

    {
        id: 1,
        title: "Glamur",
        image: "/image-1.png",
        urlGithub: "https://github.com/Felilozi/Glamur", 
      
    },
    {
        id: 2,
        title: "CreArte",
        image: "/image-2.png",
        urlGithub: "https://github.com/Felilozi/CreArte_Lozinski_Felicia",
       
    },
    {
        id: 3,
        title: "To-do-list box",
        image: "/image-3.png",
        urlGithub: "https://github.com/Felilozi/Todolist2",
       
    },
    {
        id: 4,
        title: "Dulce Éxtasis",
        image: "/image-4.png",
        urlGithub: "https://github.com/Felilozi/Chocolateria.java",
       
    },
    {
        id: 5,
        title: "Lista de tarea",
        image: "/image-5.png",
        urlGithub: "https://github.com/Felilozi/to-do-list",
      
    },
    {
        id: 6,
        title: "Backend javascript",
        image: "/image-6.png",
        urlGithub: "https://github.com/Felilozi/backendcoder/tree/EntregaFinal",
       
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "https://github.com/Felilozi/Chocolateria",
        
    }
];

export const dataExtra = [
    {
        id: 1,
        name:"Microsoft Excel",
        description:
            "Experta en análisis de datos, creación de gráficos y tablas dinámicas, y uso avanzado de fórmulas y funciones.",
        imageUrl: "/excel.png",
    },
    {
        id: 2,
        name:"Microsoft Word",
        description:
            "Dominio en la creación y edición de documentos, incluyendo formatos avanzados, estilos y plantillas.",
        imageUrl: "/word.png",
    },
    {
        id: 3,
        name: "Microsoft PowerPoint",
        description:
            "Habilidad para diseñar presentaciones profesionales con transiciones, animaciones y gráficos avanzados.",
        imageUrl: "/powerpoint.png",
    },
    {
        id: 4,
        name:"Microsoft Publisher",
        description:
            "Capacidad para crear publicaciones impresas y digitales, como boletines, folletos y tarjetas.",
        imageUrl: "/publisher.png",
    },
    {
        id: 5,
        name:"Microsoft SharePoint",
        description:
            "Experiencia en la administración y configuración de sitios de SharePoint para colaboración y gestión documental.",
        imageUrl: "/sharepoint.png",
    },
    {
        id: 6,
        name:"CorelDRAW",
        description:
            "Proficiencia en el diseño gráfico vectorial, creación de logotipos, ilustraciones y material publicitario.",
        imageUrl: "/coreldraw.png",
    },
    {
        id: 7,
        name:"Power BI",
        description: "Experiencia en exportación/importación de bases de datos, filtrado de contenido importante y creación de dashboards interactivos e informes analíticos.",
        imageUrl: "/powerbi.png",
    },
    {
        id: 8,
        name:"Canva",
        description:
            "Habilidad para diseñar gráficos atractivos y contenido visual para redes sociales, presentaciones y material de marketing.",
        imageUrl: "/canva.png",
    },
    {
        id: 9,
        name:"Photoshop",
        description:
            "Experiencia en edición y manipulación de imágenes, diseño de gráficos y retoque fotográfico.",
        imageUrl: "/photoshop.png",
    },
    {
        id: 10,
        name:"PaintTool SAI",
        description:
            "Habilidad en la creación de ilustraciones digitales, dibujos y arte conceptual con herramientas avanzadas.",
        imageUrl: "/painttool-sai.png",
    },
    {
        id: 11,
        name:"Adobe Illustrator",
        description:
            "Proficiencia en diseño vectorial, creación de ilustraciones detalladas y desarrollo de gráficos escalables.",
        imageUrl: "/illustrator.png",
    },
];




/*********************** */
export const dataContacto = [
    {
        id: 1,
        logo: <Building2 />,
        description:"Villa Madero,Buenos Aries,Argentina ",
        
    },
    {
        id: 2,
        logo: <Phone />,
        description:"(+59) 11-25363944 ",
    },
    {
        id: 3,
        logo:<Mail  />,
        description:"felicia.programa@hotmail.com",
    },


];