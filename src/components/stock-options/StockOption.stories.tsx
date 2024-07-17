import type { Meta, StoryObj } from "@storybook/react";
import { StockOption } from "./StockOptions";
import { Link } from "@mui/material";

const meta: Meta<typeof StockOption> = {
  title: "StockOption",
  component: StockOption,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [],
  args: {

  },
};

export default meta;

type Story = StoryObj<typeof StockOption>;

export const Default: Story = {
  render: () => {
    return <StockOption />;
  },
  args: {},
};
