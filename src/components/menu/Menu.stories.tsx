import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';

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
    items: [
      {
        label: 'New Arrivals',
        link: '/'
      },
      {
        label: 'Best Sellers',
        link: '/'
      },
      {
        label: 'Footwear',
        link: '/'
      },
      {
        label: 'Hype',
        link: '/'
      },
      {
        label: 'Men',
        link: '/'
      },
      {
        label: 'Woman',
        link: '/'
      },
      {
        label: 'Kids',
        link: '/'
      },
      {
        label: 'Brands',
        link: '/'
      },
      {
        label: 'Apparel',
        link: '/'
      },
      {
        label: 'Sale',
        link: '/'
      },
      {
        label: 'Gifts',
        link: '/'
      },
      {
        label: 'Sale',
        link: '/'
      },
      {
        label: 'Outlet',
        link: '/'
      },
    ]
  }
};