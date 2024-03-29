import { CbFaqs } from '@/stories/CbFaqs';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs = ({ slice }: FaqsProps): JSX.Element => {
  const faqs = slice.items.map((faq, index) => {
    return {
      question: faq.question,
      answer: faq.answer,
    };
  });

  return <CbFaqs faqs={faqs} />;
};

export default Faqs;
