import type { Meta, StoryObj } from "@storybook/react";
import { CbImage } from ".";

const meta = {
  title: "Image",
  component: CbImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    field: {
      dimensions: { width: 3000, height: 1500 },
      alt: "testing",
      copyright: null,
      url: "https://images.prismic.io/cbslsc/ZfoB2w4qyfNhFy_l_3000x1500.jpg?auto=format,compress",
      id: "ZfoB2w4qyfNhFy_l",
      edit: { x: 0, y: 0, zoom: 1, background: "transparent" },
    },
  },
} satisfies Meta<typeof CbImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};
export const Inline: Story = {
  args: {
    variant: "inline",
  },
};
