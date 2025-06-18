'use client';

import { useState, useEffect } from 'react';
import { LuSunMedium, LuMoon } from "react-icons/lu";
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const SignGuestBook = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter()

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex sm:justify-end justify-between sm:gap-5 items-center sm:px-0 px-5 sm:py-0 py-6">
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <LuSunMedium className="w-5 h-5 text-slate-400" />
        ) : (
          <LuMoon className="w-5 h-5 text-slate-400" />
        )}
      </button>
      <button onClick={()=> router.push('/guestbook')} className="bg-blue-500 hover:bg-blue-600 transition-colors py-2 px-4 rounded-full text-xs font-medium text-white">
        Sign my guestbook
      </button>
    </div>
  );
};

export default SignGuestBook;
