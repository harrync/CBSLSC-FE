'use client';

import React from 'react';
import './cb-divider.scss';
import { CbLayout } from '@/stories/CbLayout';

interface Props {
  direction?: 'up' | 'down';
}

export const CbDivider = ({ direction, ...props }: Props) => {
  return (
    <CbLayout classes="col-sm-8">
      <hr className={direction} />
    </CbLayout>
  );
};
