import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin,  Rss, Crop, Pencil, Computer, Book, Rocket, Speech,Instagram } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    // {
    //     id: 3,
    //     logo: <Twitter size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    {
        id: 3,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    // {
    //     id: 4,
    //     logo: <Twitch size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
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
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer - HTML, CSS, SAS",
        subtitle: "Mi primera pagina CreArte ",
        description: "He creado esta página para mi cuñada, una talentosa artesana que trabaja con diversos materiales, encontrarás sus piezas únicas y elaboradas con mucha dedicación",
        date: "Apr 2023 ",
    },
    {
        id: 2,
        title: "Frontend Develope - React - JS ",
        subtitle: "React E-Commerce Glamur!",
        description: "Un proyecto innovador de tienda de ropa en línea, desarrollado durante mi segundo curso de React. Permite la compra de productos y su almacenamiento en una base de datos Firebase. Aunque es un proyecto básico, me brindó un valioso aprendizaje al fusionar creatividad y tecnología.",
        date: "Jul 2023",
    },
    {
        id: 3,
        title: "Frontend Develope - React - JS",
        subtitle: "To-do-li",
        description: "Desarrollé una lista de tareas básica en React, aprovechando recursos como YouTube y otros tutoriales. Este proyecto, realizado de manera autodidacta, me permitió profundizar en mis conocimientos de React y mejorar mis habilidades en el desarrollo web. Fue una experiencia enriquecedora y fundamental para mi aprendizaje.",
        date: "Jul 2019",
    },
    // {
    //     id: 4,
    //     title: "Backend-app",
    //     subtitle: "WebWizards Inc.",
    //     description: "Bienvenido a ShopEase, una tienda online básica que desarrollé durante mi curso de backend. La API muestra productos desde una base SQL como MongoDB, permite iniciar y cerrar sesión con Google o Git, y hashea las contraseñas. Al finalizar la compra, se envía un correo. Actualmente en periodo de prueba. ",
    //     date: "Mar 2018",
    // },
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
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

// export const dataTestimonials = [
//     {
//         id: 1,
//         name: "George Snow",
//         description:
//             "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
//         imageUrl: "/profile1.png",
//     },
//     {
//         id: 2,
//         name: "Juan Pérez",
//         description:
//             "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
//         imageUrl: "/profile2.png",
//     },
//     {
//         id: 3,
//         name: "María García",
//         description:
//             "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
//         imageUrl: "/profile3.png",
//     },
//     {
//         id: 4,
//         name: "Laura Snow",
//         description:
//             "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
//         imageUrl: "/profile4.png",
//     },
//     {
//         id: 5,
//         name: "Carlos Sánchez",
//         description:
//             "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
//         imageUrl: "/profile5.png",
//     },
//     {
//         id: 6,
//         name: "Antonio Martínez",
//         description:
//             "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
//         imageUrl: "/profile6.png",
//     },
// ];