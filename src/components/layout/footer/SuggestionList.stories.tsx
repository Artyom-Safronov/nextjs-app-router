import type { Meta, StoryObj } from "@storybook/react";

import { SuggestionList } from "./SuggestionList";
import { bestSelleres } from "@/mock";

const meta = {
  component: SuggestionList,
  args: {
    title: "Best sellers",
    suggestions: bestSelleres,
  },
} satisfies Meta<typeof SuggestionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
