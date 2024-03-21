import type { Meta, StoryObj } from "@storybook/react";
import { CbHeader } from ".";

const meta = {
  title: "Header",
  component: CbHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CbHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
