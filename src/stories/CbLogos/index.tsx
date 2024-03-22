'use client';

import React from 'react';
import './cb-logos.scss';
import { ImageField, KeyTextField, LinkField } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { CbLayout } from '@/stories/CbLayout';

interface Logo {
  logo: ImageField;
  link: LinkField;
}

interface Props {
  title: string | KeyTextField;
  logos: Logo[];
}

export const CbLogos = ({ title, logos, ...props }: Props) => {
  const logosList = logos.map((logo, index) => {
    return (
      <PrismicNextLink
        key={index}
        field={logo.link}
        className="a-logos__logo"
        {...props}
      >
        <PrismicNextImage field={logo.logo} />
      </PrismicNextLink>
    );
  });

  return (
    <CbLayout container classes="col-sm-9">
      <div className="a-logos">
        <h2>{title}</h2>
        <div className="a-logos__list">{logosList}</div>
      </div>
    </CbLayout>
  );
};
