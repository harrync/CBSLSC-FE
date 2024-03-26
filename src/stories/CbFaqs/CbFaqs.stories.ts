import type { Meta, StoryObj } from "@storybook/react";
import { CbFaqs } from ".";

const meta = {
  title: "Faqs",
  component: CbFaqs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CbFaqs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
