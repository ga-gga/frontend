import { useNavigate } from 'react-router';
import { fontStyles } from '@/style/font.css';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${fontStyles.body1bold}`}>바닐라 익스트랙트</div>
      <button
        onClick={() => {
          navigate('/test');
        }}
      >
        TEST 페이지 이동
      </button>
    </>
  );
};

export default MainPage;
