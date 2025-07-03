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

export const fontStyles = {
  display1semibold: style(fonts.display1.semibold),
  display2semibold: style(fonts.display2.semibold),
  heading1semibold: style(fonts.heading1.semibold),
  heading2semibold: style(fonts.heading2.semibold),
  heading3semibold: style(fonts.heading3.semibold),
  body1bold: style(fonts.body1.bold),
  body1medium: style(fonts.body1.medium),
  body1regular: style(fonts.body1.regular),
  body2bold: style(fonts.body2.bold),
  body2medium: style(fonts.body2.medium),
  body2regular: style(fonts.body2.regular),
  caption1bold: style(fonts.caption1.bold),
  caption1regular: style(fonts.caption1.regular),
  caption2bold: style(fonts.caption2.bold),
  caption2regular: style(fonts.caption2.regular),
};
