'use client';

import React from 'react';
import './cb-image.scss';
import { ImageField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { CbLayout } from '@/stories/CbLayout';

interface Props {
  variant: 'default' | 'inline';
  field: ImageField;
}

/**
 * Primary UI component for user interaction
 */
export const CbImage = ({ variant, field, ...props }: Props) => {
  if (variant === 'inline') {
    return (
      <CbLayout container classes="col-sm-11 col-md-10 col-lg-8">
        <figure className="a-image a-image--inline">
          <PrismicNextImage field={field} {...props} />
        </figure>
      </CbLayout>
    );
  }
  return (
    <section className={`a-image a-image--full`}>
      <PrismicNextImage field={field} {...props} />
    </section>
  );
};
