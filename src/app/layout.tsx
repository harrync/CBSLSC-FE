import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';

import '@/styles/reset.scss';
import '@/styles/global.scss';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#df302a" />
        <meta name="msapplication-TileColor" content="#df302a" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GLZD5V2EPD"
        async
      />
      <Script id="gtm" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GLZD5V2EPD');
      `}
      </Script>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
