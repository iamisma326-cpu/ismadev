/* Iconos de tecnología personalizados para marcas que simple-icons
   ya no incluye (C#, SQL Server, VS Code, Visual Basic) */

export function CSharpIcon({ size = 18, color = "#68217A" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <polygon
        points="12 1.5, 21.1 6.75, 21.1 17.25, 12 22.5, 2.9 17.25, 2.9 6.75"
        fill={color}
      />
      <text
        x="12"
        y="14.8"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="7.2"
        fontWeight="700"
        fill="#FFFFFF"
      >
        C#
      </text>
    </svg>
  );
}

export function SqlServerIcon({ size = 18, color = "#CC2927" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      role="img"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
    </svg>
  );
}

export function VsCodeIcon({ size = 18, color = "#007ACC" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <path d="m8.5 6.5-5.5 5.5 5.5 5.5" />
      <path d="m15.5 6.5 5.5 5.5-5.5 5.5" />
      <path d="m13.5 3.5-3 17" />
    </svg>
  );
}

export function VisualBasicIcon({ size = 18, color = "#512BD4" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="5"
        fill="none"
        stroke={color}
        strokeWidth={2.4}
      />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="8.4"
        fontWeight="800"
        fill={color}
      >
        VB
      </text>
    </svg>
  );
}

export function VisualStudioIcon({ size = 18, color = "#5C2D91" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="5"
        fill="none"
        stroke={color}
        strokeWidth={2.4}
      />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="8.4"
        fontWeight="800"
        fill={color}
      >
        VS
      </text>
    </svg>
  );
}

export function WindowsFormsIcon({ size = 18, color = "#512BD4" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      role="img"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18" />
      <path d="M17.8 6.2h.01" strokeWidth={2.4} />
      <rect x="6" y="11.5" width="8" height="4.5" rx="1" fill={color} stroke="none" />
      <path d="M16.5 11.5h2M16.5 16h2" />
    </svg>
  );
}

export function SwingIcon({ size = 18, color = "#5382A1" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      role="img"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18" />
      <path d="M17.8 6.2h.01" strokeWidth={2.4} />
      <path d="M6.5 12h6M6.5 15h9" />
    </svg>
  );
}
