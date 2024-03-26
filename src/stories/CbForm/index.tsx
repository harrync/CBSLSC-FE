'use client';

import React from 'react';
import './cb-form.scss';
import { KeyTextField } from '@prismicio/client';
import { CbLayout } from '@/stories/CbLayout';
import { Widget } from '@typeform/embed-react';

interface Props {
  title?: string | KeyTextField;
  form_id: string | KeyTextField;
}

export const CbForm = ({ title, form_id, ...props }: Props) => {
  return (
    <section className="a-form">
      <CbLayout container classes="col-sm-10 col-md-9">
        <h2>{title}</h2>
      </CbLayout>
      <CbLayout container classes="col-sm-12">
        <Widget id={String(form_id)} className="a-form__form" />
      </CbLayout>
    </section>
  );
};
