import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value;

  if (!locale) {
    const headersList = await headers();
    locale = headersList.get('x-locale') || undefined;
  }

  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'pt';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
