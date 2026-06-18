/**
 * Design System Constants
 * 
 * Definisi warna, tipografi, dan konstanta desain berdasarkan TECHNICAL_STYLING_GUIDE.md
 */

// Color Palette
export const COLORS = {
  primary: '#005A9C', // Biru profesional - kepercayaan/pemerintahan
  secondary: '#27AE60', // Hijau - transparansi dan pertumbuhan
  alert: '#E74C3C', // Merah - status kendala/terlambat
  neutral: {
    background: '#F4F6F7',
    text: '#2C3E50',
  },
  status: {
    completed: '#27AE60', // Hijau - Selesai
    inProgress: '#F39C12', // Kuning - Berjalan
    planned: '#95A5A6', // Abu-abu - Rencana
  },
} as const;

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    body: 'Inter, Roboto, sans-serif',
  },
  fontSize: {
    body: '14px', // Minimum untuk aksesibilitas
  },
  fontWeight: {
    normal: 400,
    semibold: 600,
    bold: 700,
  },
} as const;

// Border Radius
export const BORDER_RADIUS = {
  default: '8px', // Standard card border-radius
  sm: '4px',
  lg: '12px',
} as const;

// Shadows
export const SHADOWS = {
  soft: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
} as const;

// Spacing
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
} as const;

// Breakpoints (Mobile-First)
export const BREAKPOINTS = {
  mobile: '0px',
  tablet: '768px', // sm in Tailwind
  desktop: '1024px', // lg in Tailwind
  wide: '1280px', // xl in Tailwind
} as const;

// Layout
export const LAYOUT = {
  maxWidth: '1280px',
  headerHeight: '60px',
  bottomNavHeight: '60px',
} as const;
