import type { Meta, StoryObj } from "@storybook/react";
import { Price } from "./price";

const meta: Meta<typeof Price> = {
  title: "Price",
  component: Price,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [],
  argTypes: {
    // variant: {
    //   control: "select",
    //   options: ["standard", "filled", "outlined"],
    // },
  },
  args: {
    value: "100",
  },
};

export default meta;

type Story = StoryObj<typeof Price>;

export const Default: Story = {
  render: ({ value, oldPrice }) => {
    return <Price value={value} oldPrice={oldPrice} />;
  },
  args: {},
};
