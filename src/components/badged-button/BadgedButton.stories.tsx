import type { Meta, StoryObj } from '@storybook/react';
import ProfileIcon from "@mui/icons-material/PersonOutlined";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeliveryIcon from "@mui/icons-material/DeliveryDiningOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";

import { BadgedButton } from './BadgedButton';

const meta = {
  component: BadgedButton,
  args: {
    icon: <ProfileIcon />
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['person', 'cart', 'delivery', 'notifications'],
      mapping: {
        person: <ProfileIcon />,
        cart: <CartIcon />,
        delivery: <DeliveryIcon />,
        notifications: <NotificationsIcon />,
      }
    }
  }
} satisfies Meta<typeof BadgedButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};