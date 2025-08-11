import { fontStyles } from '@/style/font.css';
import { MainResponse } from '@/types';
import { backgroundColor, textColor } from '@/style/color.css';
import {
  districtInfoContainer,
  districtInfoItem,
  districtInfoItemImage,
  districtInfoList,
} from '@/style/component/districtInfoList.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { DistrictInfoLabel } from './DistrictInfoLabel';
import {
  mainCategoryList,
  mainCategoryListContainer,
  mainCategoryListItem,
  mainCategoryListItemImage,
} from '@/style/component/mainCategoryList.css';

type MainCategoryListProps = {
  categoryData: MainResponse['categories'];
};
type MainRegionProps = {
  regionData: MainResponse['regions'];
};

export const MainCategoryList = ({
  categoryData,
  regionData,
  additionalStyles,
  districtInfoBlockOrder = 1,
}: MainCategoryListProps &
  MainRegionProps & { additionalStyles?: React.CSSProperties } & { districtInfoBlockOrder?: number }) => {
  //
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...additionalStyles }}>
      {categoryData.map((category, idx) => (
        <div key={idx}>
          {/* 실시간 동별 날씨, 온도, 교통 정보 영역  */}
          {idx === districtInfoBlockOrder && (
            <div
              className={districtInfoContainer}
              style={{ backgroundColor: backgroundColor.surface.subtle, marginTop: '40px' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 20px',
                }}
              >
                <p className={fontStyles.heading1semibold}>너 민감하구나? 가려는 동네 교통 확인하고가</p>
                <p style={{ color: textColor.secondary }} className={fontStyles.body1regular}>
                  너 민감하구나? 가려는 동네 교통 확인하고가
                </p>
              </div>
              <p
                style={{
                  color: textColor.secondary,
                  marginTop: 8,
                  padding: '0 20px',
                }}
                className={fontStyles.body1regular}
              >
                시끌벅적한 거리, 웃음소리 가득한 공간, 지금 가장 핫한 도심의 활기를 그대로 느껴보세요
              </p>
              <Swiper
                slidesPerView='auto'
                slidesOffsetAfter={24}
                slidesOffsetBefore={24}
                spaceBetween={24}
                freeMode
                modules={[FreeMode]}
                className={districtInfoList}
              >
                {regionData.map((region, idx) => (
                  <SwiperSlide className={districtInfoItem} key={idx}>
                    <img className={districtInfoItemImage} src={region.thumbnailUrl} alt={region.name + '_img'} />
                    <p style={{ width: 'max-content' }} key={idx} className={fontStyles.body2medium}>
                      {region.name}
                    </p>
                    <DistrictInfoLabel metricsData={region.metrics} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          <div style={{ marginTop: '40px' }}>
            <div style={{ padding: '0 20px' }}>
              <p className={fontStyles.heading1semibold}>{category.title}</p>
              <p style={{ color: textColor.secondary, marginTop: 4 }} className={fontStyles.body1regular}>
                {category.description}
              </p>
            </div>
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1920: {
                  slidesPerView: 5,
                },
              }}
              style={{ padding: '20px' }}
              className={mainCategoryListContainer}
            >
              <div className={mainCategoryList}>
                {category.contents.map((categoryItem, contentsIdx) => (
                  <SwiperSlide className={mainCategoryListItem} key={contentsIdx}>
                    <div>
                      <img
                        className={mainCategoryListItemImage}
                        src={categoryItem.imageUrl}
                        alt={categoryItem.name + '_img'}
                      />
                      <div style={{ position: 'absolute', top: '16px', right: '20px' }}>
                        <DistrictInfoLabel metricsData={categoryItem.metrics} />
                      </div>
                    </div>

                    <div style={{ marginTop: '8px' }}>
                      <p className={fontStyles.body2bold}>{categoryItem.name}</p>
                      <p className={fontStyles.body2regular}>{categoryItem.description}</p>
                      <p style={{ color: textColor.secondary }} className={fontStyles.body2regular}>
                        {categoryItem.address}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
};
