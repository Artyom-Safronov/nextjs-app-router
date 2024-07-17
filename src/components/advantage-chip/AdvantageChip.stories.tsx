import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import { AdvantageChip } from "./AdvantageChip";
import { Box } from "@mui/material";

const meta = {
  component: AdvantageChip,
} satisfies Meta<typeof AdvantageChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Chip advantage",
    coords: {
      x: 0,
      y: 0,
    },
  },
  decorators: [
    (Story) => (
      <Box width={200} height={200} position={"relative"}>
        {Story()}
      </Box>
    ),
  ],
};

export const Admin: Story = {
  args: {
    title: "Chip advantage",
    coords: {
      x: 0,
      y: 0,
    },
  },
  decorators: [
    (Story) => (
      <Box width={640} height={480} position={"relative"}>
        <Image
          src={"/nike-1.png"}
          alt={"Next Image"}
          width={640}
          height={480}
        />
        {Story()}
      </Box>
    ),
  ],
};
