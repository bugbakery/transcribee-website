import Link from 'next/link';

import LogoSrc from '../assets/transcribee-logo.svg';
import Image from 'next/image';

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <li>
    <Link href={href} className="text-gray-500 hover:text-black hover:underline">
      {children}
    </Link>
  </li>
);

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex justify-between max-w-6xl mx-auto my-4 px-4">
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/" className="flex items-center font-bold text-lg mr-8">
              <Image src={LogoSrc} className="w-8 mr-3" alt="transcribee logo" /> transcribee
            </Link>
          </li>
          <NavLink href="/">Product</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
        </ul>
        <ul className="flex gap-2.5 items-center">
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
      </nav>
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </>
  );
}
