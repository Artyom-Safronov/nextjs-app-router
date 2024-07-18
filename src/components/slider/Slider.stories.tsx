import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { fakeGoodImages } from "@/mock";

const meta: Meta<typeof Slider> = {
  title: "Slider",
  component: Slider,
  parameters: {
    // layout: "centered",
    controls: {
      // exclude: ['slides']
    },
  },
  decorators: [],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    }
  },
  args: {
    position: "left"
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: ({position}) => {
    return <Slider
    slides={fakeGoodImages}
    position={position}
    />;
  },
  // args: {},
};
