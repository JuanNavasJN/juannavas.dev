import type { AppProps } from 'next/app';

import '@/i18n/config.ts';
import '@/styles/globals.css';
import '@fontsource/nunito';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
