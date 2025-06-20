const Banner = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
      }}
    >
      <div>
        <p>핫플 말고 노플 모음.zip</p>
        <p>멀리떠나지 않아도 괜찮아요. 사람 적고 조용한 도심 속 휴식 공간을 소개합니다.</p>
      </div>
      <a href='#'>{`보러가까 >`}</a>
    </div>
  );
};

export default Banner;
