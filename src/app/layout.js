import GoogleAdsense from '@/src/app/components/GoogleAdsense';
import Header from '@/src/app/components/Header';
import { Petit_Formal_Script, Mulish, Nunito_Sans } from 'next/font/google';

import './globals.css';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mulish',
  style: ['normal'],
  preload: true,
});

const peti = Petit_Formal_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-petit-formal-script',
  style: ['normal'],
  preload: true,
});

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito-sans',
  style: ['normal'],
  preload: true,
});

export const metadata = {
  title: 'Lucaread',
  description: 'Your daily does of articles',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${mulish.variable} ${peti.variable} ${nunito.variable} `}>
      <body className='bg-background font-sans text-foreground/90'>
        <Header />
        <main>{children}</main>
      </body>

      <GoogleAdsense />
    </html>
  );
}
