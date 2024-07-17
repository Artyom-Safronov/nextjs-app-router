import type { Meta, StoryObj } from '@storybook/react';

import { Search } from './Search';

const meta = {
  component: Search,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};