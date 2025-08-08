import { style } from '@vanilla-extract/css';
import { textColor } from '../color.css';

export const mainLandingListContainer = style({
  display: 'flex',
  gap: '24px',
});

export const mainLandingList = style({
  selectors: {
    [`${mainLandingListContainer} > &`]: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: '32px',
      padding: '28px',
      color: textColor.default,
      height: '400px',
    },
  },
});
