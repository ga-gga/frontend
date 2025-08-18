import { style } from '@vanilla-extract/css';
import { textColor } from '../color.css';

// main page 랜딩 리스트
export const mainLandingListContainer = style({
  display: 'flex',
  gap: '24px',
});

export const mainLandingList = style({
  selectors: {
    [`${mainLandingListContainer} &`]: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '32px',
      padding: '28px',
      color: textColor.default,
      height: '400px',
    },
  },
});
