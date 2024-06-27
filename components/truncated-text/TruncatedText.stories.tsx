import type { Meta, StoryObj } from "@storybook/react";
import { TruncatedText } from "./TruncatedText";
import { Link } from "@mui/material";

const meta: Meta<typeof TruncatedText> = {
  title: "TruncatedText",
  component: TruncatedText,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [],
  args: {

  },
};

export default meta;

type Story = StoryObj<typeof TruncatedText>;

export const Default: Story = {
  render: ({ lines }) => {
    return <TruncatedText lines={lines} />;
  },
  args: {},
};
