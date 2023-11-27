import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import LogoSrc from '../assets/transcribee-logo.svg';
import { ComponentProps } from 'react';

const NavLink = ({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
} & ComponentProps<typeof Link>) => (
  <li>
    <Link href={href} className={clsx('text-gray-500 hover:text-black hover:underline', className)} {...props}>
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

      <ul className="hidden md:flex gap-2.5 items-center order-last">
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

function SidebarMenu() {
  return (
    <div>
      <label
        htmlFor="menu-checkbox"
        className="w-6 h-6 mt-5 md:hidden flex items-center justify-center opacity-60 hover:opacity-100 cursor-pointer"
      >
        <FaBars className="w-full h-full" />
      </label>

      <input type="checkbox" name="" id="menu-checkbox" className="peer opacity-0 w-0 h-0 md:hidden" />
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
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full max-w-7xl mx-auto my-4 px-4">
      <MainNav />
      <SidebarMenu />
    </nav>
  );
}


function Footer({ }) {
  return (
    <footer className='bg-neutral-100  py-12 px-10 mt-20'>
      <div className='flex flex-row gap-5 flex-wrap max-w-7xl mx-auto px-4'>
        <div className='flex-grow w-full sm:w-[unset]'>
          <h2 className='font-bold text-lg place-content-evenly'>transcribee</h2>
        </div>
        <div className='flex-grow'>
          <h3 className='font-semibold text-neutral-500'>Product</h3>
          <ul className='mt-1'>
            <NavLink href='/'>Features</NavLink>
            <NavLink target="_blank" href='https://github.com/bugbakery/transcribee'>Github</NavLink>
          </ul>
        </div>
        <div className='flex-grow'>
          <h3 className='font-semibold text-neutral-500'>Pricing</h3>
          <ul className='mt-1'>
            <NavLink href='/pricing'>Standard</NavLink>
            <NavLink href='/pricing'>Educational</NavLink>
            <NavLink href='/contact'>Contact Us</NavLink>
          </ul>
        </div>
        <div className='flex-grow'>
          <h3 className='font-semibold text-neutral-500'>Legal</h3>
          <ul className='mt-1'>
            <NavLink target="_blank" href='https://transcribee.net/page/tos'>Terms of Service</NavLink>
            <NavLink target="_blank" href='https://transcribee.net/page/privacy'>Privacy Policy</NavLink>
            <NavLink target="_blank" href='/contact'>Imprint</NavLink>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen items-stretch place-content-stretch'>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4">{children}</main>
      <div className='flex-grow' />
      <Footer />
    </div>
  );
}
