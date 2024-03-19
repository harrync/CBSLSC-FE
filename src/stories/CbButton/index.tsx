'use client';

import React from 'react';
import './cb-button.scss';
import { KeyTextField, LinkField } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';

interface ButtonProps {
  primary?: boolean;
  label: string | KeyTextField;
  link: LinkField;
}

/**
 * Primary UI component for user interaction
 */
export const CbButton = ({
  primary = false,
  label,
  link,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'a-button--primary' : 'a-button--secondary';
  return (
    <PrismicNextLink
      field={link}
      className={['a-button', mode].join(' ')}
      {...props}
    >
      {label}
    </PrismicNextLink>
  );
};
