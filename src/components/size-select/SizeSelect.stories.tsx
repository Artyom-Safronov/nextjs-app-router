import type { Meta, StoryObj } from "@storybook/react";
import { SizeSelect } from "./SizeSelect";
import { Box, Link } from "@mui/material";

const meta: Meta<typeof SizeSelect> = {
  title: "SizeSelect",
  component: SizeSelect,
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
    label: "SizeSelect option:",
    link: (
      <Link href={"javascript:void(0)"} underline="none" variant="caption">
        link component
      </Link>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof SizeSelect>;

export const Default: Story = {
  render: () => {
    return <SizeSelect />;
  },
  args: {},
};
