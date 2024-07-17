import type { Meta, StoryObj } from "@storybook/react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import { AdvantageCard } from "./AdvantageCard";

const meta = {
  component: AdvantageCard,
} satisfies Meta<typeof AdvantageCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <PlaceOutlinedIcon />,
    title: "Advantage title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rerum iste, repellendus alias laudantium voluptatum.",
  },
};
