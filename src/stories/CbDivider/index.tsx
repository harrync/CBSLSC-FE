'use client';

import React from 'react';
import './cb-divider.scss';
import { CbLayout } from '@/stories/CbLayout';

interface Props {}

export const CbDivider = ({ ...props }: Props) => {
  return (
    <CbLayout classes="col-sm-8">
      <hr />
    </CbLayout>
  );
};
