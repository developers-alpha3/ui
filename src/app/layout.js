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

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${aleo.variable} ${quattrocento.variable} `}>
      <body className='font-sans'>{children}</body>
    </html>
  );
}
