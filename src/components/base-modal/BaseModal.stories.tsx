import type { Meta, StoryObj } from "@storybook/react";
import { BaseModal } from "./BaseModal";
import { Typography } from "@mui/material";

const meta: Meta<typeof BaseModal> = {
  title: "BaseModal",
  component: BaseModal,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [],
  args: {
    open: true,
  },
};

export default meta;

type Story = StoryObj<typeof BaseModal>;

export const Default: Story = {
  render: ({ open }) => {
    return (
      <BaseModal open={open} onClose={() => {}}>
        <Typography>Modal content</Typography>
      </BaseModal>
    );
  },
  args: {},
};
