'use client';

import React from 'react';
import './cb-banner.scss';
import { ImageField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { CbLayout } from '@/stories/CbLayout';

interface Props {
  title: string;
  image?: ImageField;
  logo?: ImageField;
}

export const CbBanner = ({ title, image, logo, ...props }: Props) => {
  return (
    <section className="a-banner">
      <span className="a-banner__underlay"></span>
      <div className="a-banner__overlay">
        {image && (
          <PrismicNextImage field={image} priority className="a-banner__img" />
        )}
        <CbLayout container classes="a-banner__content col-12">
          {logo && <PrismicNextImage field={logo} className="a-banner__logo" />}
          <h1>{title}</h1>
        </CbLayout>
      </div>
    </section>
  );
};
