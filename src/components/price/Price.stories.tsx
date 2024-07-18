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
  args: {
    value: '100',
    oldPrice: '200'
  }
};

export default meta;

type Story = StoryObj<typeof Price>;

export const Default: Story = {
  render: ({ value, oldPrice }) => {
    return <Price value={value} oldPrice={oldPrice} />;
  },
  args: {},
};

export const NewPrice: Story = {
  args: {
    value: "1001111",
    oldPrice: "200"
  },

  render: (
    {
      value,
      oldPrice
    }
  ) => {
    return <Price value={value} oldPrice={oldPrice} />;
  }
};
