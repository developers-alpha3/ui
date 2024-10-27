import Script from 'next/script';
import Header from '@/src/app/components/Header';
import { Quattrocento_Sans, Noto_Serif } from 'next/font/google';
import './globals.css';

const aleo = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-aleo',
  style: ['normal'],
  preload: true,
});

const quattrocento = Quattrocento_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quattrocento-sans',
  style: ['normal'],
  preload: true,
});

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${aleo.variable} ${quattrocento.variable} `}>
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT_ID}`}
          crossOrigin='anonymous'
        />
      </head>

      <body className='bg-background font-sans'>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
