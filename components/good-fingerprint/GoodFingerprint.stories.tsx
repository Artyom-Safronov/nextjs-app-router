import type { Meta, StoryObj } from "@storybook/react";
import { GoodFingerprint } from "./GoodFingerprint";

const meta: Meta<typeof GoodFingerprint> = {
  title: "GoodFingerprint",
  component: GoodFingerprint,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [],
  args: {
    brand: "Nike",
    name: "WMNS Airmax 270 \"Ocean Bliss\""
  }
};

export default meta;

type Story = StoryObj<typeof GoodFingerprint>;

export const Default: Story = {
  render: ({brand, name}) => {
    return <GoodFingerprint brand={brand} name={name} />;
  },
  args: {},
};
