import { icon } from '@/style/component/button.css';
import { fontStyles } from '@/style/font.css';

type IconProps = {
  additionalStyle?: React.CSSProperties;
  iconName?: string;
  text?: string;
};

export const Button = ({ additionalStyle, iconName, text }: IconProps) => {
  return (
    <button
      className={icon}
      style={{
        ...additionalStyle, // iconName과 text 순서를 바꾸고 싶다면 props에 flexDirection: 'row-reverse' 속성 추가
      }}
    >
      {iconName && <img src={iconName} alt={iconName} />}
      {text && <span className={fontStyles.body1medium}>{text}</span>}
    </button>
  );
};
