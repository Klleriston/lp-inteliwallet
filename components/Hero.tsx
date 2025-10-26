"use client";

import { Sparkles, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950 via-purple-900 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 mb-6 sm:mb-8 backdrop-blur-sm">
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-neon-purple" />
          <span className="text-xs sm:text-sm text-purple-200">{t('badge')}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 glow-purple bg-gradient-to-r from-purple-200 via-neon-purple to-purple-200 bg-clip-text text-transparent animate-float px-4">
          {t('title')}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-3 sm:mb-4 max-w-3xl mx-auto px-4">
          {t('subtitle')}
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-gradient-neon bg-clip-text mb-6 sm:mb-8 px-4">
          {t('subtitleHighlight')}
        </p>

        <p className="text-base sm:text-lg text-purple-200/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <a
            href="#waitlist"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-neon-purple rounded-full text-white font-semibold text-base sm:text-lg hover:scale-105 transition-transform duration-200 glow-box flex items-center justify-center gap-2"
          >
            {t('cta')}
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500 rounded-full text-purple-200 font-semibold text-base sm:text-lg hover:bg-purple-900/30 transition-colors duration-200"
          >
            {t('ctaSecondary')}
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon-purple mb-1 sm:mb-2">100%</div>
            <div className="text-xs sm:text-sm text-purple-300">{t('stats.gamified')}</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neon-pink mb-1 sm:mb-2">Multi</div>
            <div className="text-xs sm:text-sm text-purple-300">{t('stats.collaborative')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon-blue mb-1 sm:mb-2">{t('stats.challenges')}</div>
            <div className="text-xs sm:text-sm text-purple-300">{t('stats.monthly')}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full p-1">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
