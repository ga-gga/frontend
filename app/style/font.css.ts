import { style } from '@vanilla-extract/css';

type Font = {
  fontSize: number;
  lineHeight: string;
  letterSpacing: number;
  fontWeight: number;
};

const fonts: Record<string, Record<string, Font>> = {
  //dispaly
  display1: {
    semibold: {
      fontSize: 40,
      lineHeight: '48px',
      letterSpacing: -0.5,
      fontWeight: 600,
    },
  },
  display2: {
    semibold: {
      fontSize: 32,
      lineHeight: '40px',
      letterSpacing: -0.5,
      fontWeight: 600,
    },
  },
  // heading
  heading1: {
    semibold: {
      fontSize: 24,
      lineHeight: '32px',
      letterSpacing: -0.25,
      fontWeight: 600,
    },
  },
  heading2: {
    semibold: {
      fontSize: 20,
      lineHeight: '28px',
      letterSpacing: -0.25,
      fontWeight: 600,
    },
  },
  heading3: {
    semibold: {
      fontSize: 18,
      lineHeight: '28px',
      letterSpacing: 0,
      fontWeight: 600,
    },
  },
  body1: {
    bold: {
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    medium: {
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 500,
    },
    regular: {
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 400,
    },
  },
  body2: {
    bold: {
      fontSize: 14,
      lineHeight: '22px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    medium: {
      fontSize: 14,
      lineHeight: '22px',
      letterSpacing: 0,
      fontWeight: 500,
    },
    regular: {
      fontSize: 14,
      lineHeight: '22px',
      letterSpacing: 0,
      fontWeight: 400,
    },
  },
  //caption
  caption1: {
    bold: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    regular: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0,
      fontWeight: 400,
    },
  },
  caption2: {
    bold: {
      fontSize: 11,
      lineHeight: '16px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    regular: {
      fontSize: 11,
      lineHeight: '16px',
      letterSpacing: 0,
      fontWeight: 400,
    },
  },
};

// export용 객체 생성
export const fontStyles: Record<string, string> = {};

for (const font in fonts) {
  for (const weight in fonts[font]) {
    const styleName = `${font}${weight}`;
    fontStyles[styleName] = style(fonts[font][weight]);
  }
}
