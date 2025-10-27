"use client";

import { Wallet, Mail} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-purple-950/30 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-purple-600 to-neon-purple">
                <Wallet className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-purple-200 to-neon-purple bg-clip-text">
                IntelliWallet
              </span>
            </div>
            <p className="text-sm sm:text-base text-purple-200/70 max-w-md">
              {t('description')}
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-purple-100 mb-3 sm:mb-4">{t('contact')}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-center gap-2 text-sm sm:text-base text-purple-200/70">
                <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
                <a href="mailto:ContatoIntelliWallet@gmail.com" className="hover:text-purple-200 transition-colors break-all">
                  InteliWallet@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
