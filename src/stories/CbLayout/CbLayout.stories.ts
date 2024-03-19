import type { Meta, StoryObj } from "@storybook/react";
import { CbLayout } from ".";

const meta = {
  title: "Layout",
  component: CbLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CbLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
