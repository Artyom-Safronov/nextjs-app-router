import type { Meta, StoryObj } from '@storybook/react';

import { AvailableOption } from './AvailableOption';

const meta = {
  component: AvailableOption,
} satisfies Meta<typeof AvailableOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "stock",
    price: 200,
    checked: false
  }
};