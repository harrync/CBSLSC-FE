import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

// import "@/public/static/fonts.css";
import "@/styles/reset.scss";
import "@/styles/global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
