"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState, useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      const newPathname = newLocale === 'pt'
        ? pathname  
        : `/${newLocale}${pathname}`;  

      router.replace(newPathname);
      setIsOpen(false);
    });
  };

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isPending}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200 backdrop-blur-sm group"
        >
          <Globe className="w-4 h-4 text-purple-200 group-hover:text-purple-100 transition-colors" />
          <span className="text-sm text-purple-200 group-hover:text-purple-100 transition-colors">
            {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
          </span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 rounded-xl bg-purple-950/95 border border-purple-500/30 backdrop-blur-md shadow-lg">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                disabled={isPending || locale === language.code}
                className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-purple-900/50 transition-colors ${
                  locale === language.code
                    ? 'text-neon-purple font-semibold'
                    : 'text-purple-200'
                }`}
              >
                <span className="text-xl">{language.flag}</span>
                <span className="text-sm">{language.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
