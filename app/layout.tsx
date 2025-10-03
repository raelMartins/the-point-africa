import type { Metadata } from 'next';

import './globals.css';
import { Providers } from '@/app/providers';
import { manrope, playfair_display } from '@/themes/fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://the-point-africa.vercel.app'),
  title: {
    default: 'The Point Africa',
    template: '%s | The Point Africa'
  },
  description: 'The Point Africa'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preload'
          href='/images/home_hero.jpg'
          as='image'
          type='image/png'
          fetchPriority='high'
        />
      </head>
      <body
        className={`${manrope.variable} ${playfair_display.variable} ${manrope.className}`}
        style={{ maxWidth: `2000px`, margin: `0 auto`, overflowX: `clip` }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
