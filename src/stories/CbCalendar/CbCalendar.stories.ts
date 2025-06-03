import type { Meta, StoryObj } from "@storybook/react";
import { CbCalendar } from ".";

const meta = {
  title: "Calendar",
  component: CbCalendar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CbCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
