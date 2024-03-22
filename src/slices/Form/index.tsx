import { CbForm } from '@/stories/CbForm';
import { CbLayout } from '@/stories/CbLayout';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;

/**
 * Component for "Form" Slices.
 */
const Form = ({ slice }: FormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <div data-tf-live={slice.primary.form_id}></div> */}
      <CbForm title={slice.primary.form_id} />
    </section>
  );
};

export default Form;
