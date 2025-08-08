import { mainLandingList, mainLandingListContainer } from '@/style/component/MainLandingList.css';
import { fontStyles } from '@/style/font.css';
import { MainResponse } from '@/types';
import { Button } from './Button';

type MainLandingListProps = {
  data: MainResponse['banners'];
};

export const MainLandingList = ({
  data,
  additionalStyles,
}: MainLandingListProps & { additionalStyles?: React.CSSProperties }) => {
  return (
    <div style={additionalStyles} className={mainLandingListContainer}>
      {data.map((banner) => (
        <div className={mainLandingList} style={{ backgroundImage: `url(${banner.imageUrl})` }} key={banner.id}>
          <div>
            <p className={fontStyles.display1semibold}>{banner.title}</p>
            <p style={{ marginTop: '12px' }} className={fontStyles.body1regular}>
              {banner.description}
            </p>
          </div>
          <Button additionalStyle={{ marginTop: 'auto' }} text='보러가까' iconName='' />
        </div>
      ))}
    </div>
  );
};
