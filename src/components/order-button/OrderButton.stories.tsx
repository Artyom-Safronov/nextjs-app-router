import type { Meta, StoryObj } from '@storybook/react';
import { OrderButton } from './OrderButton';


const meta = {
  component: OrderButton,
} satisfies Meta<typeof OrderButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "text"
  }
};