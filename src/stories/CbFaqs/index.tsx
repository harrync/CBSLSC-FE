'use client';

import React from 'react';
import './cb-faqs.scss';
import { CbLayout } from '@/stories/CbLayout';
import { KeyTextField, RichTextField } from '@prismicio/client';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

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

const questionSlug = (question: string) => {
  return question
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

export const CbFaqs = ({ faqs, title, ...props }: Props) => {
  const faqsLinks = faqs.map((faq: any, index: number) => {
    return (
      <Link
        key={index}
        href={`#${questionSlug(faq.question)}`}
        className="a-faqs__link"
      >
        {faq.question}
      </Link>
    );
  });

  const faqsList = faqs.map((faq: any, index: number) => {
    return (
      <div
        key={index}
        className="a-faqs__item"
        id={`${questionSlug(faq.question)}`}
      >
        <h3 className="a-faqs__question">{faq.question}</h3>
        <div className="a-faqs__answer">
          <PrismicRichText field={faq.answer} components={components} />
        </div>
        <Link className="a-faqs__top" href="#top">
          Back to top
        </Link>
      </div>
    );
  });

  return (
    <section className="a-faqs">
      <CbLayout container classes="col-sm-9">
        {title ? <h2>{title}</h2> : null}
        <div id="top" className="a-faqs__links">
          {faqsLinks}
        </div>
        <div className="a-faqs__items">{faqsList}</div>
      </CbLayout>
    </section>
  );
};
