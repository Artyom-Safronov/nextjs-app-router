import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';
import { menuItems } from '@/mock';

const meta = {
  component: Menu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: menuItems
  }
};