'use client';

import React from 'react';
import './cb-button.scss';
import { KeyTextField, LinkField } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';

interface ButtonProps {
  type: string;
  label: string | KeyTextField;
  link: LinkField;
}

/**
 * Primary UI component for user interaction
 */
export const CbButton = ({ type, label, link, ...props }: ButtonProps) => {
  return (
    <PrismicNextLink
      field={link}
      className={['a-button', `a-button--${type}`].join(' ')}
      {...props}
    >
      {label}
    </PrismicNextLink>
  );
};
