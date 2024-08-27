'use client';

import React from 'react';
import './cb-image-text.scss';
import { CbLayout } from '../CbLayout';
import { PrismicImage, PrismicRichText } from '@prismicio/react';

interface Props {
  slice: any;
  alignRight?: boolean;
}

export const CbImageText = ({ slice, alignRight, ...props }: Props) => {
  const classes = ['a-image-text'] as string[];

  if (alignRight) {
    classes.push('a-image-text__right');
  }

  return (
    <CbLayout classes="col-sm-10 col-md-7">
      <div className={classes.join(' ')}>
        <PrismicImage field={slice.primary.image} />
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </CbLayout>
  );
};
