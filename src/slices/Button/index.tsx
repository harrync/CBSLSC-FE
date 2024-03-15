import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Button as ButtonComp } from "@/stories/Button/Button";
/**
 * Props for `Button`.
 */
export type ButtonProps = SliceComponentProps<Content.ButtonSlice>;

/**
 * Component for "Button" Slices.
 */
const Button = ({ slice }: ButtonProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.link}></PrismicNextLink>
      <ButtonComp
        primary={slice.primary.primary ? true : false}
        size={slice.primary.size}
        label={slice.primary.label}
        link={slice.primary.link}
      />
    </section>
  );
};

export default Button;
