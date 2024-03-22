import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';

import '@/styles/reset.scss';
import '@/styles/global.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://embed.typeform.com/next/embed.js" async></script>
      </head>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
