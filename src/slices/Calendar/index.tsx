import { CbCalendar } from '@/stories/CbCalendar';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Calendar`.
 */
export type CalendarProps = SliceComponentProps<Content.CalendarSlice>;

/**
 * Component for "Calendar" Slices.
 */
const Calendar = ({ slice }: CalendarProps): JSX.Element => {
  return <CbCalendar />;
};

export default Calendar;
