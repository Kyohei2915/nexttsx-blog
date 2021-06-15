import Link from "next/link";
import ThemeSwitch from "./theme-switch";

const Header: React.FC = () => {
  return (
    <header className="py-2">
      <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-lg md:text-xl font-bold ml-3 text-gray-900 dark:text-white">
              Kyohei Blog
            </h1>
          </Link>
          <ThemeSwitch />
        </div>
    </header>
  );
}

export default Header;
