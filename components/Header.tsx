import Link from "next/link";
import ThemeSwitch from "./theme-switch";

const Header: React.FC = () => {
  return (
    <header className="py-2">
      <div className="flex justify-between items-center">
        <ThemeSwitch />
          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-black">
              Next.js Starter Tailwind
            </a>
          </Link>
        </div>
    </header>
  );
}

export default Header;
