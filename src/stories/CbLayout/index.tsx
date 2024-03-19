"use client";

import React from "react";
import "./cb-layout.scss";

interface Props {
  container?: boolean;
  classes: string;
  children: React.ReactNode;
}

export const CbLayout = ({ container, classes, children, ...props }: Props) => {
  let content = <div className={classes}>{children}</div>;

  if (container) {
    content = <div className="grid justify-center">{content}</div>;
  }

  return (
    <section className={container ? `container` : `grid justify-center`}>
      {content}
    </section>
  );
};
