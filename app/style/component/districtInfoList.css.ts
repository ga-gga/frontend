import { style } from '@vanilla-extract/css';

// main page 랜딩 리스트
export const districtInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '40px 0',

  '@media': {
    'screen and (max-width: 768px)': {
      padding: '20px 0',
    },
  },
});

export const districtInfoList = style({
  selectors: {
    [`${districtInfoContainer} > &`]: {
      display: 'flex',
      width: '100%',
      marginTop: '32px',
      gap: '16px',
    },
  },
});

export const districtInfoItem = style({
  selectors: {
    [`${districtInfoList} &`]: {
      display: 'flex',
      padding: '12px',
      backgroundColor: '#ffffff',
      gap: '8px',
      borderRadius: '100px',
      alignItems: 'center',
      width: 'max-content',
    },
  },
});

export const districtInfoItemImage = style({
  selectors: {
    [`${districtInfoItem} > &`]: {
      borderRadius: '100%',
      width: '40px',
      aspectRatio: '1 / 1',
    },
  },
});
