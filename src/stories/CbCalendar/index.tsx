'use client';

import React from 'react';
// import Calendar from '@ericz1803/react-google-calendar';

import './cb-calendar.scss';
import { CbLayout } from '../CbLayout';

// const calendars = [
//   {
//     calendarId: process.env.GOOGLE_CAL_CALENDAR_ID,
//     color: '#DF302A',
//   },
// ];

export const CbCalendar = () => {
  return (
    <CbLayout container classes="col-sm-12">
      <div className="calendar">
        {/* <Calendar
          apiKey={process.env.GOOGLE_CAL_API_KEY}
          calendars={calendars}
        /> */}
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FLondon&showPrint=0&showTitle=0&showTabs=0&showCalendars=0&showTz=0&src=Y19hZmY0ODdiOWFlZDVjMjMwMjI0MDUzMGFlMDJiMTkxZDdkZDFmNDU0ZGVhNjRlMDNjMDNlODUyMTQzNzhiMjFhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5"></iframe>
      </div>
    </CbLayout>
  );
};
