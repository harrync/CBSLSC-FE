'use client';

import React, { useState } from 'react';
import './cb-accordion.scss';
import { CbLayout } from '@/stories/CbLayout';
import { KeyTextField, RichTextField } from '@prismicio/client';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

interface Faq {
  question: KeyTextField;
  answer: RichTextField;
}

interface Props {
  faqs: Faq[];
  title?: KeyTextField;
}

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

export const AccordionItem = ({ question, answer }: Faq) => {
  const [rowOpen, setRowOpen] = useState(false);

  const handleToggle = () => {
    setRowOpen(!rowOpen);
  };

  const id = Math.random().toString(36).substring(7);

  return (
    <div>
      <button
        className={`a-accordion__question ${rowOpen ? 'a-accordion__question-open' : 'a-accordion__question-closed'}`}
        type="button"
        onClick={handleToggle}
        aria-expanded={rowOpen}
        aria-controls={`answer-${id}`}
        id={`question-${id}`}
      >
        {question} {rowOpen ? '-' : '+'}
      </button>
      <div
        className={`a-accordion__answer ${rowOpen ? 'a-accordion__answer-open' : 'a-accordion__answer-closed'}`}
        id={`answer-${id}`}
        aria-labelledby={`question-${id}`}
      >
        <PrismicRichText field={answer} components={components} />
      </div>
    </div>
  );
};

export const CbAccordion = ({ faqs, title, ...props }: Props) => {
  const faqsList = faqs.map((faq: any, index: number) => {
    return (
      <AccordionItem key={index} question={faq.question} answer={faq.answer} />
    );
  });

  return (
    <CbLayout container classes="col-sm-8">
      {title ? <h2 className="text-center">{title}</h2> : null}
      <section className="a-accordion">{faqsList}</section>
    </CbLayout>
  );
};
