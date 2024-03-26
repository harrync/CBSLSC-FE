import type { Meta, StoryObj } from "@storybook/react";
import { CbLogo } from ".";

const meta = {
  title: "Logo",
  component: CbLogo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CbLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
