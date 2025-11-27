import { createTheme, alpha, PaletteMode, Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}
declare module '@mui/material/styles' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    baseShadow: string;
  }
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

// Gruvbox-inspired color scheme
export const brand = {
  50: 'hsl(45, 70%, 95%)',    // Light yellow/beige
  100: 'hsl(45, 70%, 90%)',   // Light yellow
  200: 'hsl(45, 65%, 83%)',   // Cream
  300: 'hsl(39, 77%, 65%)',   // Light yellow
  400: 'hsl(39, 77%, 47%)',   // Yellow (Gruvbox yellow)
  500: 'hsl(39, 77%, 42%)',   // Darker yellow
  600: 'hsl(39, 77%, 37%)',   // Even darker yellow
  700: 'hsl(30, 8%, 35%)',    // Brown
  800: 'hsl(30, 8%, 25%)',    // Dark brown
  900: 'hsl(30, 8%, 16%)',    // Very dark brown (Gruvbox bg)
};

export const gray = {
  50: 'hsl(45, 70%, 97%)',    // Very light cream
  100: 'hsl(45, 65%, 94%)',   // Light cream
  200: 'hsl(45, 60%, 88%)',   // Cream
  300: 'hsl(45, 55%, 80%)',   // Light tan
  400: 'hsl(30, 12%, 65%)',   // Gruvbox gray
  500: 'hsl(30, 12%, 55%)',   // Medium gray
  600: 'hsl(30, 12%, 45%)',   // Gruvbox gray
  700: 'hsl(30, 12%, 35%)',   // Dark gray
  800: 'hsl(30, 8%, 25%)',    // Dark brown
  900: 'hsl(30, 8%, 16%)',    // Very dark brown
};

export const green = {
  50: 'hsl(60, 73%, 98%)',    // Very light green
  100: 'hsl(60, 73%, 94%)',   // Light green
  200: 'hsl(60, 73%, 87%)',   // Lighter green
  300: 'hsl(60, 73%, 77%)',   // Light Gruvbox green
  400: 'hsl(60, 73%, 53%)',   // Medium green
  500: 'hsl(60, 73%, 37%)',   // Gruvbox green (#98971a)
  600: 'hsl(60, 70%, 30%)',   // Darker green
  700: 'hsl(60, 75%, 25%)',   // Dark green
  800: 'hsl(60, 84%, 18%)',   // Very dark green
  900: 'hsl(60, 87%, 12%)',   // Almost black green
};

export const orange = {
  50: 'hsl(22, 82%, 97%)',    // Very light orange
  100: 'hsl(22, 82%, 90%)',   // Light orange
  200: 'hsl(22, 82%, 80%)',   // Lighter orange
  300: 'hsl(22, 82%, 65%)',   // Light Gruvbox orange
  400: 'hsl(22, 82%, 55%)',   // Medium orange
  500: 'hsl(22, 82%, 45%)',   // Gruvbox orange (#d65d0e)
  600: 'hsl(22, 80%, 35%)',   // Darker orange
  700: 'hsl(22, 75%, 28%)',   // Dark orange
  800: 'hsl(22, 70%, 22%)',   // Very dark orange
  900: 'hsl(22, 65%, 16%)',   // Almost black orange
};

export const red = {
  50: 'hsl(7, 73%, 97%)',     // Very light red
  100: 'hsl(7, 73%, 90%)',    // Light red
  200: 'hsl(7, 73%, 80%)',    // Lighter red
  300: 'hsl(7, 73%, 65%)',    // Light Gruvbox red
  400: 'hsl(7, 73%, 55%)',    // Medium red
  500: 'hsl(7, 73%, 46%)',    // Gruvbox red (#cc241d)
  600: 'hsl(7, 70%, 35%)',    // Darker red
  700: 'hsl(7, 75%, 28%)',    // Dark red
  800: 'hsl(7, 80%, 22%)',    // Very dark red
  900: 'hsl(7, 85%, 16%)',    // Almost black red
};

export const getDesignTokens = (mode: PaletteMode) => {
  customShadows[1] =
    mode === 'dark'
      ? 'hsla(30, 8%, 10%, 0.7) 0px 4px 16px 0px, hsla(30, 8%, 5%, 0.8) 0px 8px 16px -5px'
      : 'hsla(30, 8%, 20%, 0.15) 0px 4px 16px 0px, hsla(30, 12%, 45%, 0.1) 0px 8px 16px -5px';

  return {
    palette: {
      mode,
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: brand[50],
        ...(mode === 'dark' && {
          contrastText: brand[50],
          light: brand[300],
          main: brand[400],
          dark: brand[700],
        }),
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
        ...(mode === 'dark' && {
          contrastText: brand[300],
          light: brand[500],
          main: brand[700],
          dark: brand[900],
        }),
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
        ...(mode === 'dark' && {
          light: orange[400],
          main: orange[500],
          dark: orange[700],
        }),
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
        ...(mode === 'dark' && {
          light: red[400],
          main: red[500],
          dark: red[700],
        }),
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
        ...(mode === 'dark' && {
          light: green[400],
          main: green[500],
          dark: green[700],
        }),
      },
      grey: {
        ...gray,
      },
      divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
      background: {
        default: 'hsl(45, 70%, 90%)',  // Gruvbox light background
        paper: 'hsl(45, 65%, 95%)',    // Slightly lighter paper
        ...(mode === 'dark' && { default: 'hsl(30, 8%, 16%)', paper: 'hsl(30, 8%, 20%)' }), // Gruvbox dark backgrounds
      },
      text: {
        primary: 'hsl(30, 8%, 20%)',  // Gruvbox dark brown for light mode
        secondary: 'hsl(30, 12%, 45%)', // Gruvbox gray
        warning: orange[400],
        ...(mode === 'dark' && { primary: 'hsl(45, 65%, 83%)', secondary: 'hsl(30, 12%, 65%)' }), // Cream and light gray for dark mode
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
        ...(mode === 'dark' && {
          hover: alpha(gray[600], 0.2),
          selected: alpha(gray[600], 0.3),
        }),
      },
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2,
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
      },
      subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(14),
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
      },
      caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
      },
    },
    shape: {
      borderRadius: 8,
    },
    shadows: customShadows,
  };
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: brand[50],
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[300], 0.4),
      background: {
        default: 'hsl(45, 70%, 90%)',  // Gruvbox light background
        paper: 'hsl(45, 65%, 95%)',    // Slightly lighter paper
      },
      text: {
        primary: 'hsl(30, 8%, 20%)',   // Gruvbox dark brown
        secondary: 'hsl(30, 12%, 45%)', // Gruvbox gray
        warning: orange[400],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
      baseShadow:
        'hsla(30, 8%, 20%, 0.15) 0px 4px 16px 0px, hsla(30, 12%, 45%, 0.1) 0px 8px 16px -5px',
    },
  },
  dark: {
    palette: {
      primary: {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700],
      },
      info: {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900],
      },
      warning: {
        light: orange[400],
        main: orange[500],
        dark: orange[700],
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[400],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[700], 0.6),
      background: {
        default: 'hsl(30, 8%, 16%)',  // Gruvbox dark background
        paper: 'hsl(30, 8%, 20%)',    // Slightly lighter paper
      },
      text: {
        primary: 'hsl(45, 65%, 83%)', // Gruvbox cream
        secondary: 'hsl(30, 12%, 65%)', // Light gray
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),
      },
      baseShadow:
        'hsla(30, 8%, 10%, 0.7) 0px 4px 16px 0px, hsla(30, 8%, 5%, 0.8) 0px 8px 16px -5px',
    },
  },
};

export const typography = {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(36),
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(30),
    lineHeight: 1.2,
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600,
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18),
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500,
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(14),
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400,
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
  },
};

export const shape = {
  borderRadius: 8,
};

// @ts-ignore
const defaultShadows: Shadows = [
  'none',
  'var(--template-palette-baseShadow)',
  ...defaultTheme.shadows.slice(2),
];
export const shadows = defaultShadows;
