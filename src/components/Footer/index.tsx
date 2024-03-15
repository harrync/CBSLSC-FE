import { Client, Content, isFilled } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";

export const Footer = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const footer = await client.getSingle("footer");

  return (
    <footer>
      <small>
        &copy; {new Date().getFullYear()} {footer.data.copyright_text}
      </small>
    </footer>
  );
};
