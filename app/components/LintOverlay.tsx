'use client';

/**
 * vite-plugin-checker를 통해 감지되는 에러를 UI에 표시되도록 수동 삽입
 */
const LintOverlay = () => {
  return (
    <>
      <script type='module' src='/@vite/client'></script>
      <script type='module' src='/main.js'></script>
      <script type='module' src='/@vite-plugin-checker-runtime-entry'></script>
    </>
  );
};

export default LintOverlay;
