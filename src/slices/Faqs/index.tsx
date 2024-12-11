import { CbAccordion } from '@/stories/CbAccordion';
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

  if (slice.variation === 'accordion') {
    return <CbAccordion faqs={faqs} title={slice.primary.title} />;
  }

  return <CbFaqs faqs={faqs} title={slice.primary.title} />;
};

export default Faqs;
