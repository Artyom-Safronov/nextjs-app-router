import type { Meta, StoryObj } from '@storybook/react';

import { Like } from './Like';

const meta = {
  component: Like,
} satisfies Meta<typeof Like>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};