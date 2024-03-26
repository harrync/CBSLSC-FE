'use client';

import React, { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleLayout = () => {
    const windowWidth = window.innerWidth;
    setIsMobile(windowWidth < 768);
  };

  useEffect(() => {
    handleLayout();
    window.addEventListener('resize', handleLayout);
  }, []);

  const handleNavOpen = () => {
    if (!isMobile) {
      setNavOpen(true);
    } else {
      setNavOpen(!navOpen);
    }
  };

  const navIconClosed = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 18L20 18" stroke-width="2" stroke-linecap="round"/>
  <path d="M4 12L20 12" stroke-width="2" stroke-linecap="round"/>
  <path d="M4 6L20 6" stroke-width="2" stroke-linecap="round"/>
  </svg>`;

  const navIconOpen = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 8L8 16M8 8L16 16" stroke-width="2" stroke-linecap="round"/>
  </svg>`;

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

  if (isMobile) {
    return (
      <>
        <button
          className="a-nav-toggle"
          onClick={handleNavOpen}
          aria-label="Toggle navigation"
        >
          {navOpen ? (
            <span
              dangerouslySetInnerHTML={{ __html: navIconOpen }}
              aria-hidden="true"
            />
          ) : (
            <span
              dangerouslySetInnerHTML={{ __html: navIconClosed }}
              aria-hidden="true"
            />
          )}
        </button>
        <nav
          className={`a-tray ${navOpen ? 'a-tray--open' : 'a-tray--closed'} `}
        >
          <ul>{navigation}</ul>
        </nav>
      </>
    );
  }

  return (
    <nav className="a-navigation">
      <ul>{navigation}</ul>
    </nav>
  );
};
