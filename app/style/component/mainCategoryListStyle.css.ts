import { style } from '@vanilla-extract/css';

// main page 랜딩 리스트
export const mainCategoryListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const mainCategoryList = style({
  selectors: {
    [`${mainCategoryListContainer} > &`]: {
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
    },
  },
});
export const mainCategoryListItem = style({
  selectors: {
    [`${mainCategoryList} > &`]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
  },
});

export const mainCategoryListItemImage = style({
  selectors: {
    [`${mainCategoryListItem} > div > &`]: {
      position: 'relative',
      objectFit: 'cover',
      objectPosition: 'center',
      width: '100%',
      aspectRatio: '1 / 1',
      borderRadius: '32px',
      color: '#fff',
    },
  },
});
