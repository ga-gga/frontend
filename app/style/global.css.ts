// global.css.ts
import { globalFontFace, globalStyle } from '@vanilla-extract/css';

// 글로벌 폰트
const pretendard = 'pretendard';

globalFontFace(pretendard, {
  src: 'url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff")',
  fontStyle: 'normal',
});

globalStyle('body', {
  margin: '0 auto',
  maxWidth: '1920px',
});

globalStyle('section', {
  marginTop: '88px',
});
