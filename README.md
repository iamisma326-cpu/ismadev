# Portafolio — Ismael Espinoza

Portafolio web personal minimalista en escala de grises. Estudiante de
Computación e Informática, Lima — Perú.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # generar versión de producción en dist/
npm run preview  # previsualizar la build de producción
```

## Estructura

```
src/
├── assets/isma.png        # foto del hero
├── components/            # Navbar, Hero, About, Skills, Projects,
│                          # Education, Contact, Footer, TechMarquee
├── context/LanguageContext.jsx  # idioma ES/EN con persistencia
├── data/content.js        # ⭐ TODO el contenido editable está aquí
├── hooks/useTheme.js      # modo claro/oscuro con persistencia
├── hooks/useReveal.js     # animaciones de aparición al hacer scroll
└── styles/index.css       # tokens de diseño (paleta, tipografía)
```

## Cómo editar tu información

Casi todo se cambia en **un solo archivo**: `src/data/content.js`.

- **Contacto** (arriba del archivo): correo, número de WhatsApp (formato
  internacional sin `+`, ej. `51999888777`), GitHub y LinkedIn.
- **Textos ES/EN**: cada idioma tiene su bloque completo (`content.es` y
  `content.en`).
- **Proyectos, habilidades, educación y stats del hero**: listas dentro de
  cada bloque de idioma.
- **Foto**: reemplaza `src/assets/isma.png` (mantiene el nombre).

## Características

- Bilingüe ES/EN con toggle instantáneo
- Modo claro/oscuro (respeta la preferencia del sistema)
- Marquee de tecnologías, timeline de educación, botones WhatsApp/Gmail
- Totalmente responsivo con menú móvil
- Build de producción lista para desplegar (Netlify, Vercel, GitHub Pages)
