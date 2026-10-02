/* Iconos SVG inline — trazo 1.5px, consistente con el estilo minimalista */

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const SunIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

export const GlobeIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </svg>
);

export const ArrowDownIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4v16m0 0-6-6m6 6 6-6" />
  </svg>
);

export const ArrowUpRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7m0 0H8m9 0v9" />
  </svg>
);

export const ArrowUpIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 20V4m0 0-6 6m6-6 6 6" />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4v10m0 0 4-4m-4 4-4-4M4 18v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const GithubIcon = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M6.5 8.5v12h-4v-12h4Zm.3-3.8a2.3 2.3 0 1 1-4.6 0 2.3 2.3 0 0 1 4.6 0Zm13.2 9.3v7.5h-4v-7c0-1.7-.6-2.9-2.2-2.9-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1v7.3h-4v-12h4v1.7a4.5 4.5 0 0 1 3.9-2.1c2.8 0 4.6 1.8 4.6 5.9Z" />
  </svg>
);

export const WhatsAppIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
    <path d="M9 8.5c-.5 1 .1 2.5 1.2 3.6 1.1 1.1 2.6 1.7 3.6 1.2l.9-.9 1.6 1-1 1.6c-2 .9-4.4-.1-6.1-1.8-1.7-1.7-2.7-4.1-1.8-6.1l1.6-1 1 1.6-.9.9Z" fill="currentColor" stroke="none" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PinIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const AwardIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="m8.5 13.5-1.5 8 5-2.6 5 2.6-1.5-8" />
    <path d="m10.2 9 .9.9 1.9-1.9" strokeWidth={1.8} />
  </svg>
);
