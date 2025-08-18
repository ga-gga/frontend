import { header } from '@/style/component/header.css';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <header className={header}>
      <Link to='/'>Gagga</Link>
    </header>
  );
};
