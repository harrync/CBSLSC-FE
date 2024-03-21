'use client';

import React from 'react';
import './cb-banner.scss';
import { ImageField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { CbLayout } from '@/stories/CbLayout';

interface Props {
  title: string;
  image?: ImageField;
}

export const CbBanner = ({ title, image, ...props }: Props) => {
  return (
    <section className="a-banner">
      {image && <PrismicNextImage field={image} priority />}
      <CbLayout container classes="a-banner__content col-12">
        <h1>{title}</h1>
      </CbLayout>
    </section>
  );
};
