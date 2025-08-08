import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { MainLandingList } from '@/components/MainLandingList';
import { MainResponse } from '@/types';

export async function loader() {
  try {
    const data: MainResponse = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/main`).then((res) => res.json());
    return data;
  } catch (error) {
    console.error('메인 데이터 로딩 실패:', error);
  }
}
const MainPage = ({ loaderData }: { loaderData: MainResponse }) => {
  console.log(loaderData);

  return (
    <>
      <Header />
      <main style={{ marginTop: '24px', padding: '20px' }}>
        <Button additionalStyle={{ marginLeft: 'auto' }} iconName='' text='어디로 가까' />
        {loaderData?.banners && loaderData.banners.length > 0 && (
          <MainLandingList additionalStyles={{ marginTop: '24px' }} data={loaderData.banners} />
        )}
      </main>
    </>
  );
};

export default MainPage;
