/* ============================================================
   SKILLS — catálogo con iconos de marca y agrupación por tipo
   ============================================================ */
import {
  siHtml5,
  siCss,
  siJavascript,
  siReact,
  siSass,
  siTailwindcss,
  siPhp,
  siNodedotjs,
  siOpenjdk,
  siPython,
  siMysql,
  siPostgresql,
  siSupabase,
  siDotnet,
  siPhpmyadmin,
  siXampp,
  siApachenetbeanside,
  siGit,
  siGithub,
  siGnubash,
  siNpm,
} from "simple-icons";
import {
  CSharpIcon,
  VisualBasicIcon,
  VisualStudioIcon,
  WindowsFormsIcon,
  SwingIcon,
  SqlServerIcon,
  VsCodeIcon,
} from "../components/techIcons";

/* Si el color oficial es casi negro (GitHub, OpenJDK), en modo
   oscuro se usa un gris claro para que el icono no desaparezca. */
const DARK_BRAND_HEXES = new Set(["#181717", "#000000"]);

const brand = (name, icon, hexOverride) => ({
  name,
  icon,
  hex: hexOverride ? hexOverride.toUpperCase() : "#" + icon.hex,
  themeAware: DARK_BRAND_HEXES.has("#" + icon.hex.toUpperCase()),
});

const custom = (name, CustomIcon, hex) => ({
  name,
  CustomIcon,
  hex,
  custom: true,
});

export const skillMeta = {
  html5: brand("HTML5", siHtml5),
  css3: brand("CSS3", siCss),
  javascript: brand("JavaScript", siJavascript),
  react: brand("React", siReact),
  sass: brand("Sass", siSass),
  tailwind: brand("Tailwind CSS", siTailwindcss),
  php: brand("PHP", siPhp),
  nodejs: brand("Node.js", siNodedotjs),
  java: brand("Java", siOpenjdk, "#5382A1"),
  python: brand("Python", siPython),
  mysql: brand("MySQL", siMysql),
  postgresql: brand("PostgreSQL", siPostgresql),
  supabase: brand("Supabase", siSupabase),
  dotnet: brand(".NET", siDotnet),
  phpmyadmin: brand("phpMyAdmin", siPhpmyadmin),
  xampp: brand("XAMPP", siXampp),
  netbeans: brand("NetBeans", siApachenetbeanside),
  git: brand("Git", siGit),
  github: brand("GitHub", siGithub),
  terminal: brand("Terminal", siGnubash),
  npm: brand("npm", siNpm),
  csharp: custom("C#", CSharpIcon, "#68217A"),
  visualbasic: custom("Visual Basic", VisualBasicIcon, "#512BD4"),
  windowsforms: custom("Windows Forms", WindowsFormsIcon, "#512BD4"),
  javaswing: custom("Java Swing", SwingIcon, "#5382A1"),
  sqlserver: custom("SQL Server", SqlServerIcon, "#CC2927"),
  vscode: custom("VS Code", VsCodeIcon, "#007ACC"),
  visualstudio: custom("Visual Studio", VisualStudioIcon, "#5C2D91"),
};

/* Agrupación por tipo — nombres y descripciones de categorías en content.js */
export const skillsByCategory = {
  frontend: ["html5", "css3", "javascript", "react", "sass", "tailwind"],
  backend: ["php", "nodejs", "java", "python"],
  desktop: ["csharp", "visualbasic", "windowsforms", "dotnet", "javaswing"],
  database: ["mysql", "sqlserver", "postgresql", "supabase"],
  tools: [
    "git",
    "github",
    "terminal",
    "npm",
    "vscode",
    "visualstudio",
    "netbeans",
    "phpmyadmin",
    "xampp",
  ],
};

/* Total de tecnologías para la stat del hero — las herramientas
   (Git, VS Code, etc.) no cuentan como tecnologías */
export const skillCount = Object.entries(skillsByCategory)
  .filter(([category]) => category !== "tools")
  .reduce((total, [, list]) => total + list.length, 0);

/* Skills del marquee del hero: selección de las más importantes */
export const marqueeSkills = [
  "php",
  "html5",
  "css3",
  "javascript",
  "java",
  "csharp",
  "mysql",
  "sqlserver",
  "postgresql",
  "python",
];
