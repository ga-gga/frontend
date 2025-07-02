// global.css.ts
import { globalFontFace, globalStyle } from '@vanilla-extract/css';

// 글로벌 폰트
const pretendard = 'pretendard';

globalFontFace(pretendard, {
  src: 'url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff")',
  fontStyle: 'normal',
});

// 글로벌 스타일
globalStyle('*', {
  margin: 0,
  padding: 0,
});
