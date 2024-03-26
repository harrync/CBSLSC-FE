'use client';

import React from 'react';
import './cb-header.scss';
import { CbLayout } from '@/stories/CbLayout';
import { CbLogo } from '@/stories/CbLogo';

interface Props {
  children: React.ReactNode;
}

export const CbHeader = ({ children, ...props }: Props) => {
  return (
    <header className="a-header">
      <CbLayout container classes="col-sm-12 col-bleed-y">
        <div className="a-header__inner">
          <CbLogo />
          {children}
        </div>
      </CbLayout>
    </header>
  );
};
