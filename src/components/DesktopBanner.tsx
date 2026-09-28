'use client';

import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function DesktopBanner() {
  const [hideDesktopBanner, setHideDesktopBanner] = useLocalStorage('hide-desktop-banner', '');

  if (hideDesktopBanner != '') {
    return null;
  }

  return (
    <div className="bg-[#ffd468]">
      <div className="flex items-center mx-auto my-1 px-4">
        <div className="text-center grow text-sm">
          <Link className="hover:underline" href="/desktop">
            We are excited to announce <b>transcribee desktop</b>. Our new application for fully
            local transcriptions.
          </Link>
        </div>
        <button className="ml-4" type="button" onClick={() => setHideDesktopBanner('1')}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}
