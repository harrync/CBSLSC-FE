"use client";

import React from "react";
import "./button.css";
import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string | KeyTextField;
  target?: string;
  link: LinkField;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  link,
  target,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <PrismicNextLink
      field={link}
      target={target}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
    >
      {label}
    </PrismicNextLink>
  );
};
