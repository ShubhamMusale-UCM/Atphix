export const tokens = {
  colors: {
    void: '#060608',
    surface: '#0D0D12',
    border: '#1A1A2E',
    muted: '#2A2A40',
    accent1: '#6C63FF',
    accent2: '#00D4AA',
    accentGlow: 'rgba(108, 99, 255, 0.2)',
    textHi: '#F2F2F7',
    textMid: '#8E8EA0',
    textLo: '#45455A',
  },
  typography: {
    fonts: {
      syne: 'var(--font-syne), sans-serif',
      inter: 'var(--font-inter), sans-serif',
      mono: 'var(--font-mono), monospace',
    },
  },
  easing: [0.16, 1, 0.3, 1] as const,
  borderRadius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
} as const;
