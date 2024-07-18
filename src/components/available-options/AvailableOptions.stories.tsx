import type { Meta, StoryObj } from '@storybook/react';

import { AvailableOptions } from './AvailableOptions';

const meta = {
  component: AvailableOptions,
} satisfies Meta<typeof AvailableOptions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};