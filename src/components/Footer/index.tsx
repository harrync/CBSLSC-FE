import { CbFooter } from '@/stories/CbFooter';
import { Client, Content } from '@prismicio/client';

export const Footer = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const footer = await client.getSingle('footer');

  return (
    <CbFooter
      footerText={footer.data.copyright_text}
      socialLinks={footer.data.social_links}
    />
  );
};
