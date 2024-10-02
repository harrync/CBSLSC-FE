import type { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from '@prismicio/react';
import { CbLayout } from '@/stories/CbLayout';

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  console.log(slice);

  return (
    <CbLayout
      container
      classes={`col-sm-10 col-md-6 ${slice.primary.centered_text ? 'text-center' : ''}`}
    >
      <PrismicRichText field={slice.primary.content} components={components} />
    </CbLayout>
  );
};

export default RichText;
