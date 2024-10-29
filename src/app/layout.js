import GoogleAdsense from '@/src/app/components/GoogleAdsense';
import Header from '@/src/app/components/Header';
import { Quattrocento_Sans, Mulish, Nunito_Sans } from 'next/font/google';
import './globals.css';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mulish',
  style: ['normal'],
  preload: true,
});

const quattrocento = Nunito_Sans({
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
    <html lang='en' className={`${mulish.variable} ${quattrocento.variable} `}>
      <body className='bg-background font-sans text-foreground/90'>
        <Header />
        <main>{children}</main>
      </body>

      <GoogleAdsense />
    </html>
  );
}
