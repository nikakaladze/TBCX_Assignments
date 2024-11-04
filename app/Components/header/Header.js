import ThemeSwitcher from "@/app/ThemeSwitcher";
import Link from "next/link";

export default function Header() {
  
  return (
    <>
      <nav>
        <div className="main-container w-full flex justify-end py-5 bg-[#030127] items-center text-white cursor-pointer">
          <div className="end">
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
            <a
              href="/api/auth/login"
              className="text-[20px] mr-[30px] hover:text-white hover:bg-gradient-to-r from-blue-500 to-green-500 active:bg-gradient-to-r from-blue-500 to-green-500 p-[10px] rounded-[10px]"
            >
              Login
            </a>
            
          </div>
        </div>
      </nav>
    </>
  );
}
