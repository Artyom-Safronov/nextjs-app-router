import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { Box, Link } from "@mui/material";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [
    (Story) => <Box width={300}>{Story()}</Box>
  ],
  args: {
    options: [
      { id: "First option", label: "First option" },
      { id: "Second option", label: "Second option" },
    ],
    label: "Select option:",
    link: (
      <Link href={"javascript:void(0)"} underline="none" variant="caption">
        link component
      </Link>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: ({ label, link, options }) => {
    return <Select label={label} link={link} options={options} />;
  },
  args: {},
};
