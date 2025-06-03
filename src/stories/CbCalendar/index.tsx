'use client';

import React from 'react';
import Calendar from '@ericz1803/react-google-calendar';

import './cb-calendar.scss';
import { CbLayout } from '../CbLayout';

const calendars = [
  {
    calendarId: process.env.GOOGLE_CAL_CALENDAR_ID,
    color: '#DF302A',
  },
];

interface Props {}

export const CbCalendar = ({ ...props }: Props) => {
  return (
    <CbLayout container classes="col-sm-12">
      <div className="calendar">
        <Calendar
          apiKey={process.env.GOOGLE_CAL_API_KEY}
          calendars={calendars}
        />
      </div>
    </CbLayout>
  );
};
