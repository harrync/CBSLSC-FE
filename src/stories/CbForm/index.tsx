'use client';

import React from 'react';
import './cb-form.scss';
import { KeyTextField } from '@prismicio/client';
import { CbLayout } from '@/stories/CbLayout';

interface Props {
  title?: string | KeyTextField;
  form_id: string | KeyTextField;
}

export const CbForm = ({ title, form_id, ...props }: Props) => {
  return (
    <CbLayout container classes="col-sm-10 col-md-9 col-lg-7">
      <h2>{title}</h2>
      <div data-tf-live={form_id}></div>
    </CbLayout>
  );
};
