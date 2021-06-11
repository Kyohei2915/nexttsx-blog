import Link from 'next/link';
import ThemeSwitch from './theme-switch';


const Header: React.FC = () => {
  return (
    <header className="py-2">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-green-500">{'Kyohei Test'}</a>
        </Link>

        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header
