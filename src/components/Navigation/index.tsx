import { Client, Content, isFilled } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle("main_menu");

  return (
    <nav>
      {isFilled.group(navigation.data.menu_items) &&
        navigation.data.menu_items.map((item) => {
          return (
            <PrismicLink key={item.label} field={item.link}>
              {item.label}
            </PrismicLink>
          );
        })}
    </nav>
  );
};
