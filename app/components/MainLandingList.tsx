import { fontStyles } from '@/style/font.css';
import { MainResponse } from '@/types';
import { Button } from './Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mainLandingList, mainLandingListContainer } from '@/style/component/mainLandingListStyle.css';

type MainLandingListProps = {
  data: MainResponse['banners'];
};

export const MainLandingList = ({
  data,
  additionalStyles,
}: MainLandingListProps & { additionalStyles?: React.CSSProperties }) => {
  return (
    <Swiper
      style={additionalStyles}
      className={mainLandingListContainer}
      slidesPerView={4}
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 4,
        },
      }}
    >
      {data.map((banner, idx) => (
        <SwiperSlide>
          <div className={mainLandingList} style={{ backgroundImage: `url(${banner.imageUrl})` }} key={idx}>
            <div>
              <p className={fontStyles.display2semibold}>{banner.title}</p>
              <p style={{ marginTop: '12px' }} className={fontStyles.body1regular}>
                {banner.description}
              </p>
            </div>
            <Button additionalStyle={{ marginTop: 'auto' }} text='보러가까' iconName='' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
