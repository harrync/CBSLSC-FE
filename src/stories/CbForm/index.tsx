'use client';

import React, { useEffect, useState } from 'react';
import './cb-form.scss';
import { KeyTextField } from '@prismicio/client';

interface Props {
  title?: string | KeyTextField;
}

export const CbForm = ({ title, ...props }: Props) => {
  return <div data-tf-live={title}></div>;
};
