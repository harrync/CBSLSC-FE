import type { Meta, StoryObj } from "@storybook/react";
import { CbButton } from ".";

const meta = {
  title: "Button",
  component: CbButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { label: "Button", link: undefined },
} satisfies Meta<typeof CbButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
  },
};
