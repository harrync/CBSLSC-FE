import { Client, Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';

export const Navigation = async ({
  currentPath,
  client,
}: {
  currentPath?: string;
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle('navigation');

  return (
    <nav>
      <ul>
        {navigation.data.slices.map((slice) => {
          console.log(slice.primary.link);

          return (
            <li key={slice.id}>
              <PrismicNextLink
                field={slice.primary.link}
                className={slice.items.length > 0 ? 'dropdown' : ''}
              >
                {slice.primary.label}
              </PrismicNextLink>

              {slice.items.length > 0 && (
                <ul>
                  {slice.items.map((item) => {
                    return (
                      <li key={JSON.stringify(item)}>
                        <PrismicNextLink field={item.child_link}>
                          {item.child_label}
                        </PrismicNextLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
