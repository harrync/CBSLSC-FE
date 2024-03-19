"use client";

import React from "react";
import "./button.scss";
import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string | KeyTextField;
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
  ...props
}: ButtonProps) => {
  const mode = primary ? "a-button--primary" : "a-button--secondary";
  return (
    <PrismicNextLink
      field={link}
      className={["a-button", `a-button--${size}`, mode].join(" ")}
      {...props}
    >
      {label}
    </PrismicNextLink>
  );
};
