
import '../index.css';
import { LanguageProvider } from '../i18n';
import AIChat from '../components/AIChat';
import type { AppProps } from 'next/app';

import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <main className="flex-grow pt-20">
        <Component {...pageProps} />
      </main>
      <AIChat />
    </LanguageProvider>
  );
}
