type WeatherTypes = 'clear' | 'mostly_cloud' | 'cloud' | 'rain' | 'snow' | 'wind';

type CongestionTypes = 'crowded' | 'slightly_crowded' | 'normal' | 'relaxed';

export interface MainResponse {
  banners: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    icon: string;
  }>;
  categories: Array<{
    id: string;
    title: string;
    description: string;
    contents: Array<{
      name: string;
      description: string;
      address: string;
      imageUrl: string;
      metrics: {
        weather: WeatherTypes;
        temperature: number;
        congestion: CongestionTypes;
      };
    }>;
  }>;
  regions: Array<{
    id: string;
    name: string;
    thumbnailUrl: string;
    metrics: {
      weather: WeatherTypes;
      temperature: number;
      minTemperature: number;
      maxTemperature: number;
      congestion: CongestionTypes;
    };
  }>;
}
