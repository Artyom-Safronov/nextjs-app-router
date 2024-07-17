import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';
import { Header } from './Header';

const meta = {
  component: Header,
  decorators: [
    (Story) => <Box width={1200}>{Story()}</Box>
  ]
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};