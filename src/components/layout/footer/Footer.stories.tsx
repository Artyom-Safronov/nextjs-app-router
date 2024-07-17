import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';
import { Box } from '@mui/material';

const meta = {
  component: Footer,
  decorators: [
    (Story) => <Box width={1200}>{Story()}</Box>
  ]
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};