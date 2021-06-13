import Link from "next/link";
import ThemeSwitch from "./theme-switch";

const Header: React.FC = () => {
  return (
    <header className="py-2">
      <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-gray-900 dark:text-white">
              Kyohei Blog
            </a>
          </Link>
          <ThemeSwitch />
        </div>
    </header>
  );
}

export default Header;
