'use client';

import React from 'react';
import './cb-footer.scss';
import { KeyTextField } from '@prismicio/client';
import { CbLayout } from '@/stories/CbLayout';
import { PrismicNextImage } from '@prismicio/next';

interface Props {
  socialLinks?: any;
  footerText?: string | KeyTextField;
}

export const CbFooter = ({ socialLinks, footerText, ...props }: Props) => {
  const socialLinksList = socialLinks?.map((link: any, index: number) => (
    <a
      key={index}
      href={link.link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="a-footer__social-link"
      title={link.type}
    >
      <PrismicNextImage field={link.icon} />
    </a>
  ));

  return (
    <footer className="a-footer">
      <CbLayout container classes="col-sm-12">
        <div className="a-footer__inner">
          <small>
            &copy; {new Date().getFullYear()} {footerText}
          </small>

          <div className="a-footer__social">{socialLinksList}</div>
        </div>
      </CbLayout>
    </footer>
  );
};
