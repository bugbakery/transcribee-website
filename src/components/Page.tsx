import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import LogoSrc from '../assets/transcribee-logo.svg';

const NavLink = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => (
  <li>
    <Link href={href} className={clsx('text-gray-500 hover:text-black hover:underline', className)}>
      {children}
    </Link>
  </li>
);

function MainNav() {
  return (
    <>
      <ul className="flex gap-8 items-center">
        <li>
          <Link href="/" className="flex items-center font-bold text-lg mr-8">
            <Image src={LogoSrc} className="w-8 mr-3" alt="transcribee logo" /> transcribee
          </Link>
        </li>
        <NavLink className="hidden md:block" href="/">
          Product
        </NavLink>
        <NavLink className="hidden md:block" href="/pricing">
          Pricing
        </NavLink>
      </ul>
      <ul className="hidden md:flex gap-2.5 items-center">
        <li>
          <a
            href="https://transcribee.net/signup"
            className="block px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Sign Up
          </a>
        </li>
        <li>
          <a
            href="https://transcribee.net/login"
            className="block px-4 py-2 bg-black hover:bg-gray-700 text-white rounded-md"
          >
            Sign In
          </a>
        </li>
      </ul>
    </>
  );
}

function SidebarNavButton() {
  return (
    <label
      htmlFor="menu-checkbox"
      className="w-5 h-5 md:hidden flex items-center justify-center opacity-60 hover:opacity-100 cursor-pointer"
    >
      <FaBars className="w-full h-full" />
    </label>
  );
}

function SidebarMenu() {
  return (
    <>
      <input type="checkbox" name="" id="menu-checkbox" className="peer opacity-0 w-0 h-0" />
      <label
        htmlFor="menu-checkbox"
        className="fixed top-0 bottom-0 left-0 w-full pointer-events-none peer-checked:pointer-events-auto bg-black peer-checked:w-full opacity-0 peer-checked:opacity-50 transition-opacity duration-300"
      />
      <div className="fixed flex flex-col right-0 top-0 bottom-0 bg-white p-4 shadow-lg border border-1 border-gray-200 transition-all duration-300 translate-x-[calc(100%+20px)] invisible peer-checked:visible peer-checked:translate-x-0 w-full sm:w-80">
        <label
          htmlFor="menu-checkbox"
          className="block mt-1 w-5 h-5 self-end opacity-60 hover:opacity-100 cursor-pointer"
        >
          <AiOutlineClose className="w-full h-full" />
        </label>

        <ul className="flex flex-col gap-2">
          <NavLink href="/">Product</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
        </ul>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto my-4 px-4">
      <MainNav />
      <SidebarNavButton />
      <SidebarMenu />
    </nav>
  );
}

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">{children}</div>
    </>
  );
}
