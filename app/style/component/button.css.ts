import { globalStyle, style } from '@vanilla-extract/css';
import { backgroundColor, textColor } from '@/style/color.css';

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  width: 'max-content',
  textAlign: 'left',
  fontWeight: 'bold',
  padding: '8px 20px',
  borderRadius: '100px',
  border: 'none',
  backgroundColor: backgroundColor.elevated.button,
  color: textColor.elevatedPrimary,
  cursor: 'pointer',
});

// 이미지 아이콘 스타일
globalStyle(`${icon} > div`, {});
