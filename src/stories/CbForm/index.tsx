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
  const titleMarkup = title && (
    <CbLayout container classes="col-sm-10 col-md-6">
      <h2>{title}</h2>
    </CbLayout>
  );

  return (
    <section className="a-form">
      {titleMarkup}
      <CbLayout container classes="col-sm-12 col-md-8">
        <Widget
          id={String(form_id)}
          // className="a-form__form"
          autoResize
          // inlineOnMobile
          // noScrollbars
          // hideFooter
          // hideHeaders
          // style={{
          //   width: '100%',
          //   height: '100%',
          // }}
        />
      </CbLayout>
    </section>
  );
};
