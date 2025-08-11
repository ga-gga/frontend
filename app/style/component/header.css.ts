import { globalStyle, style } from '@vanilla-extract/css';

export const header = style({
  position: 'sticky',
  top: 0,
  backgroundColor: '#f9f9f9', // 임시 배경색
  padding: '20px 80px',
  textAlign: 'left',
  fontWeight: 'bold',
  zIndex: 1000,
});

globalStyle(`${header} a[href]`, {
  textDecoration: 'none',
  color: 'inherit',
});
