import type { MainResponse } from '@/types';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${import.meta.env.VITE_API_ENDPOINT}/main`, () => {
    return HttpResponse.json<MainResponse>({
      banners: [
        {
          id: '1',
          title: 'Welcome to Our Service',
          description: 'We provide the best service for you.',
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
];
