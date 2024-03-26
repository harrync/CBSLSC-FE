'use client';

import React, { useEffect, useState } from 'react';
import './cb-header.scss';
import { CbLogo } from '@/stories/CbLogo';

interface Props {
  children: React.ReactNode;
}

export const CbHeader = ({ children, ...props }: Props) => {
  return (
    <header className="a-header">
      <CbLogo />
      {children}
    </header>
  );
};
