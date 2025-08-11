type DistrictInfoProps = {
  metricsData: {
    congestion: string;
    maxTemperature?: number;
    minTemperature?: number;
    temperature: number;
    weather: string;
  };
};
export const DistrictInfoLabel = ({ metricsData }: DistrictInfoProps) => {
  console.log(metricsData);
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {/* 추후 이미지로 대체 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 10,
          height: 10,
          background: 'white',
          borderRadius: '100px',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        🌞
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 10,
          height: 10,
          background: 'white',
          borderRadius: '100px',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        🌡️
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 10,
          height: 10,
          background: 'white',
          borderRadius: '100px',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        🧑‍🤝‍🧑
      </div>
    </div>
  );
};
