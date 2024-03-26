'use client';

import React from 'react';
import './cb-navigation.scss';
import { KeyTextField, LinkField } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';

interface Link {
  label: string | KeyTextField;
  link: LinkField;
  items?: Link[];
}

interface Props {
  links: Link[];
  currentPath?: string;
}

export const CbNavigation = ({ links, currentPath, ...props }: Props) => {
  const navigation = links.map((navLink) => {
    return (
      <li key={JSON.stringify(navLink.link)}>
        <PrismicNextLink
          field={navLink.link}
          className={
            navLink.items && navLink.items.length > 0 ? 'dropdown' : ''
          }
        >
          {navLink.label}
        </PrismicNextLink>

        {navLink.items && navLink.items.length > 0 && (
          <ul>
            {navLink?.items.map((subNavLink) => {
              return (
                <li key={JSON.stringify(subNavLink)}>
                  <PrismicNextLink field={subNavLink.link}>
                    {subNavLink.label}
                  </PrismicNextLink>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  });
  return (
    <nav className="a-navigation">
      <ul>{navigation}</ul>
    </nav>
  );
};
