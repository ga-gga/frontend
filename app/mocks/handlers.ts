import type { MainResponse } from '@/types';
import { http, HttpResponse, passthrough } from 'msw';

export const handlers = [
  http.get(`${import.meta.env.VITE_API_ENDPOINT}/api/main`, () => {
    return HttpResponse.json<MainResponse>({
      banners: [
        {
          id: '1',
          title: '핫플 말고 노플 모음.zip',
          description: '멀리 떠나지 않아도 괜찮아요. 사람 적고 조용한 도심 속 휴식 공간을 소개합니다.',
          imageUrl: 'https://picsum.photos/1600/900',
          icon: 'https://picsum.photos/200',
        },
        {
          id: '1',
          title: '핫플 말고 노플 모음.zip',
          description: '멀리 떠나지 않아도 괜찮아요. 사람 적고 조용한 도심 속 휴식 공간을 소개합니다.',
          imageUrl: 'https://picsum.photos/1600/900',
          icon: 'https://picsum.photos/200',
        },
        {
          id: '1',
          title: '핫플 말고 노플 모음.zip',
          description: '멀리 떠나지 않아도 괜찮아요. 사람 적고 조용한 도심 속 휴식 공간을 소개합니다.',
          imageUrl: 'https://picsum.photos/1600/900',
          icon: 'https://picsum.photos/200',
        },
        {
          id: '1',
          title: '핫플 말고 노플 모음.zip',
          description: '멀리 떠나지 않아도 괜찮아요. 사람 적고 조용한 도심 속 휴식 공간을 소개합니다.',
          imageUrl: 'https://picsum.photos/1600/900',
          icon: 'https://picsum.photos/200',
        },
      ],
      categories: [
        {
          id: '1',
          title: 'Category 1',
          description: 'This is the first category.',
          contents: [
            {
              name: 'Content 1',
              description: 'This is the first content.',
              address: '123 Main St',
              imageUrl: 'https://picsum.photos/1600/900',
              metrics: {
                weather: 'clear',
                temperature: 25,
                congestion: 'normal',
              },
            },
          ],
        },
      ],
      regions: [
        {
          id: '1',
          name: 'Region 1',
          thumbnailUrl: 'https://picsum.photos/1600/900',
          metrics: {
            weather: 'cloud',
            temperature: 22,
            minTemperature: 18,
            maxTemperature: 26,
            congestion: 'slightly_crowded',
          },
        },
      ],
    });
  }),
  http.all('*', () => {
    return passthrough();
  }),
];
