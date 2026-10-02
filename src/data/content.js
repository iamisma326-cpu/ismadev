/* ============================================================
   CONTENIDO DEL PORTAFOLIO (ES / EN)
   Editar aquí los textos, proyectos, habilidades y contacto.
   ============================================================ */
import { skillCount } from "./skills.js";

export const contact = {
  // ⚠️ PLACEHOLDERS — reemplazar por tus datos reales:
  email: "ismael.espinoza@gmail.com",
  whatsappNumber: "51999888777", // formato internacional sin "+", para wa.me
  whatsappDisplay: "+51 999 888 777",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
};

export const content = {
  es: {
    nav: {
      skip: "Saltar al contenido",
      links: [
        { id: "sobre-mi", label: "Sobre mí" },
        { id: "habilidades", label: "Habilidades" },
        { id: "proyectos", label: "Proyectos" },
        { id: "certificaciones", label: "Certificaciones" },
      ],
      cta: "Contáctame",
    },
    hero: {
      eyebrow: "Desarrollador Web",
      location: "Lima, Perú",
      titleA: "Ismael",
      titleB: "Espinoza",
      subtitle:
        "Construyo experiencias web limpias y funcionales. Me enfoco en el detalle, la simplicidad y el código que se lee tan bien como se ve.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Escríbeme por WhatsApp",
      stats: [
        { value: "6+", label: "Proyectos construidos" },
        { value: String(skillCount), label: "Tecnologías dominadas" },
        { value: "3", label: "Años de experiencia" },
      ],
      scroll: "Desliza para explorar",
    },
    marquee: {
      label: "Tecnologías con las que trabajo",
    },
    about: {
      index: "01",
      bgWord: "SOBRE MÍ",
      title: "Sobre mí",
      bio1: "Soy desarrollador con base en Lima, Perú. Mi enfoque principal es el desarrollo web, pero también construyo aplicaciones de escritorio para Windows — cuidando desde la estructura y el estilo de una interfaz hasta la lógica que la hace funcionar.",
      bio2: "He desarrollado diversos proyectos en mi trayectoria, lo que me ha dado experiencia práctica resolviendo problemas reales con soluciones limpias y funcionales. Actualmente busco una oportunidad laboral profesional donde aportar mis habilidades, aprender de un equipo y crecer como desarrollador.",
      facts: [
        { term: "Ubicación", value: "Lima, Perú" },
        { term: "Enfoque", value: "Desarrollo web y apps de escritorio" },
        { term: "Idiomas", value: "Español · Inglés" },
      ],
    },
    skills: {
      index: "02",
      bgWord: "HABILIDADES",
      title: "Habilidades",
      subtitle:
        "Tecnologías que uso para construir desde interfaces web hasta aplicaciones de escritorio y bases de datos.",
      categories: [
        {
          id: "frontend",
          name: "Frontend",
          description:
            "Interfaces limpias, responsivas y modernas para la web.",
        },
        {
          id: "backend",
          name: "Backend",
          description:
            "Lógica del servidor y APIs que sostienen la experiencia.",
        },
        {
          id: "desktop",
          name: "Escritorio",
          description: "Aplicaciones de escritorio para Windows.",
        },
        {
          id: "database",
          name: "Base de datos",
          description: "Diseño, consulta y administración de datos.",
        },
        {
          id: "tools",
          name: "Herramientas",
          description: "Flujo de trabajo diario de desarrollo.",
        },
      ],
    },
    projects: {
      index: "03",
      bgWord: "PROYECTOS",
      title: "Proyectos",
      subtitle:
        "Una selección de proyectos académicos y personales. Pronto los tuyos aquí.",
      viewCode: "Ver código",
      viewLive: "Ver demo",
      items: [
        {
          title: "Proyecto uno",
          description:
            "Descripción breve del proyecto: problema que resuelve, tecnologías usadas y tu rol en el equipo.",
          tags: ["React", "CSS", "API REST"],
          github: "https://github.com/",
          demo: "#",
        },
        {
          title: "Proyecto dos",
          description:
            "Descripción breve del proyecto: problema que resuelve, tecnologías usadas y tu rol en el equipo.",
          tags: ["HTML", "CSS", "JavaScript"],
          github: "https://github.com/",
          demo: "#",
        },
        {
          title: "Proyecto tres",
          description:
            "Descripción breve del proyecto: problema que resuelve, tecnologías usadas y tu rol en el equipo.",
          tags: ["Node.js", "Express", "MySQL"],
          github: "https://github.com/",
          demo: "#",
        },
        {
          title: "Proyecto cuatro",
          description:
            "Descripción breve del proyecto: problema que resuelve, tecnologías usadas y tu rol en el equipo.",
          tags: ["Python", "Figma"],
          github: "https://github.com/",
          demo: "#",
        },
      ],
    },
    certifications: {
      index: "04",
      bgWord: "CERTIFICACIONES",
      title: "Certificaciones",
      subtitle:
        "Formación complementaria que respalda mis habilidades técnicas.",
      viewCredential: "Ver credencial",
      downloadCredential: "Descargar credencial",
      items: [
        {
          title: "Desarrollo Web Frontend",
          issuer: "Plataforma online",
          year: "2025",
          credential: "#",
        },
        {
          title: "Fundamentos de Python",
          issuer: "Curso especializado",
          year: "2025",
          credential: "#",
        },
        {
          title: "Programación con Java",
          issuer: "Curso especializado",
          year: "2024",
          credential: "#",
        },
        {
          title: "Bases de Datos MySQL",
          issuer: "Plataforma online",
          year: "2024",
          credential: "/certificado-sql.pdf",
          fileName: "certificado-sql.pdf",
        },
      ],
    },
    contact: {
      index: "05",
      bgWord: "CONTACTO",
      title: "Contacto",
      heading: "¿Trabajamos juntos?",
      subtitle:
        "Estoy abierto a prácticas, proyectos freelance y colaboraciones. Escríbeme y te respondo pronto.",
      whatsapp: "WhatsApp",
      gmail: "Gmail",
      availability: "Disponible para prácticas y proyectos",
    },
    footer: {
      madeIn: "Hecho con café en Lima, Perú",
      top: "Volver arriba",
    },
  },

  en: {
    nav: {
      skip: "Skip to content",
      links: [
        { id: "sobre-mi", label: "About" },
        { id: "habilidades", label: "Skills" },
        { id: "proyectos", label: "Projects" },
        { id: "certificaciones", label: "Certifications" },
      ],
      cta: "Contact me",
    },
    hero: {
      eyebrow: "Web Developer",
      location: "Lima, Peru",
      titleA: "Ismael",
      titleB: "Espinoza",
      subtitle:
        "I build clean, functional web experiences. I care about detail, simplicity, and code that reads as good as it looks.",
      ctaPrimary: "View projects",
      ctaSecondary: "Message me on WhatsApp",
      stats: [
        { value: "6+", label: "Projects built" },
        { value: String(skillCount), label: "Technologies mastered" },
        { value: "3", label: "Years of experience" },
      ],
      scroll: "Scroll to explore",
    },
    marquee: {
      label: "Technologies I work with",
    },
    about: {
      index: "01",
      bgWord: "ABOUT",
      title: "About me",
      bio1: "I'm a developer based in Lima, Peru. My main focus is web development, but I also build Windows desktop applications — caring about everything from the structure and style of an interface to the logic that makes it work.",
      bio2: "Throughout my journey I've built a variety of projects, gaining hands-on experience solving real problems with clean, functional solutions. I'm now looking for a professional job opportunity where I can contribute my skills, learn from a team, and grow as a developer.",
      facts: [
        { term: "Location", value: "Lima, Peru" },
        { term: "Focus", value: "Web & desktop development" },
        { term: "Languages", value: "Spanish · English" },
      ],
    },
    skills: {
      index: "02",
      bgWord: "SKILLS",
      title: "Skills",
      subtitle:
        "Technologies I use to build everything from web interfaces to desktop applications and databases.",
      categories: [
        {
          id: "frontend",
          name: "Frontend",
          description: "Clean, responsive, modern interfaces for the web.",
        },
        {
          id: "backend",
          name: "Backend",
          description: "Server logic and APIs that power the experience.",
        },
        {
          id: "desktop",
          name: "Desktop",
          description: "Windows desktop applications.",
        },
        {
          id: "database",
          name: "Databases",
          description: "Data design, querying and administration.",
        },
        {
          id: "tools",
          name: "Tools",
          description: "My daily development workflow.",
        },
      ],
    },
    projects: {
      index: "03",
      bgWord: "PROJECTS",
      title: "Projects",
      subtitle:
        "A selection of academic and personal projects. Yours could be next.",
      viewCode: "View code",
      viewLive: "Live demo",
      items: [
        {
          title: "Project one",
          description:
            "Short project description: the problem it solves, technologies used and your role.",
          tags: ["React", "CSS", "REST API"],
          github: "https://github.com/",
          demo: "#",
        },
        {
          title: "Project two",
          description:
            "Short project description: the problem it solves, technologies used and your role.",
          tags: ["HTML", "CSS", "JavaScript"],
          github: "https://github.com/",
          demo: "#",
        },
        {
          title: "Project three",
          description:
            "Short project description: the problem it solves, technologies used and your role.",
          tags: ["Node.js", "Express", "MySQL"],
          github: "https://github.com/",
          demo: "#",
        },
        {
          title: "Project four",
          description:
            "Short project description: the problem it solves, technologies used and your role.",
          tags: ["Python", "Figma"],
          github: "https://github.com/",
          demo: "#",
        },
      ],
    },
    certifications: {
      index: "04",
      bgWord: "CERTIFICATIONS",
      title: "Certifications",
      subtitle: "Complementary training that backs my technical skills.",
      viewCredential: "View credential",
      downloadCredential: "Download credential",
      items: [
        {
          title: "Frontend Web Development",
          issuer: "Online platform",
          year: "2025",
          credential: "#",
        },
        {
          title: "Python Fundamentals",
          issuer: "Specialized course",
          year: "2025",
          credential: "#",
        },
        {
          title: "Java Programming",
          issuer: "Specialized course",
          year: "2024",
          credential: "#",
        },
        {
          title: "MySQL Databases",
          issuer: "Online platform",
          year: "2024",
          credential: "/certificado-sql.pdf",
          fileName: "certificado-sql.pdf",
        },
      ],
    },
    contact: {
      index: "05",
      bgWord: "CONTACT",
      title: "Contact",
      heading: "Let's work together?",
      subtitle:
        "I'm open to internships, freelance work and collaborations. Write to me and I'll reply soon.",
      whatsapp: "WhatsApp",
      gmail: "Gmail",
      availability: "Available for internships and projects",
    },
    footer: {
      madeIn: "Made with coffee in Lima, Peru",
      top: "Back to top",
    },
  },
};

/* Los datos de skills (iconos y categorías) viven en skills.js */
