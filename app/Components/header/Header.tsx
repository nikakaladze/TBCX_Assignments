import Link from "next/link";
import AuthButton from "./AuthButton";
import ThemeSwitcher from "../ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <nav>
      <div className="main-container w-full flex justify-end py-5 bg-[#030127] items-center text-white cursor-pointer">
        <div className="end">
          <ThemeSwitcher />
          <Link href="/">
            <span className="text-[20px] mr-[30px] hover:text-white hover:bg-gradient-to-r from-blue-500 to-green-500 active:bg-gradient-to-r from-blue-500 to-green-500 p-[10px] rounded-[10px]">
              Home
            </span>
          </Link>

          <Link href="/blog">
            <span className="text-[20px] mr-[30px] hover:text-white hover:bg-gradient-to-r from-blue-500 to-green-500 active:bg-gradient-to-r from-blue-500 to-green-500 p-[10px] rounded-[10px]">
              Blog
            </span>
          </Link>

          <Link href="/profile">
            <span className="text-[20px] mr-[30px] hover:text-white hover:bg-gradient-to-r from-blue-500 to-green-500 active:bg-gradient-to-r from-blue-500 to-green-500 p-[10px] rounded-[10px]">
              Profile
            </span>
          </Link>

          <Link href="/contact">
            <span className="text-[20px] mr-[30px] hover:text-white hover:bg-gradient-to-r from-blue-500 to-green-500 active:bg-gradient-to-r from-blue-500 to-green-500 p-[10px] rounded-[10px]">
              Contact
            </span>
          </Link>

          <Link href="/products">
            <span className="text-[20px] mr-[30px] hover:text-white hover:bg-gradient-to-r from-blue-500 to-green-500 active:bg-gradient-to-r from-blue-500 to-green-500 p-[10px] rounded-[10px]">
              Products
            </span>
          </Link>

          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
