import { CbNavigation } from '@/stories/CbNavigation';
import { Client, Content } from '@prismicio/client';

export const Navigation = async ({
  currentPath,
  client,
}: {
  currentPath?: string;
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle('navigation');

  const links = navigation.data.slices.map((slice) => {
    return {
      label: slice.primary.label,
      link: slice.primary.link,
      items: slice.items.map((item) => {
        return {
          label: item.child_label,
          link: item.child_link,
        };
      }),
    };
  });

  return <CbNavigation links={links} currentPath={currentPath} />;
};
