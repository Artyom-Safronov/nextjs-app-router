import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";
import { Box } from "@mui/material";
import { fakeGoods } from "@/app/card/[id]/page";

const meta: Meta<typeof ProductCard> = {
  title: "ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [
    (Story) => (
      <Box width={200}>
        <Story />
      </Box>
    ),
  ],
  args: {
    name: fakeGoods[0].name,
    brand: fakeGoods[0].brand,
    price: fakeGoods[0].price,
    imageSrc: fakeGoods[0].imageSrc,
  },
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  render: ({ name, brand, imageSrc, price }) => {
    return (
      <ProductCard
        name={name}
        brand={brand}
        imageSrc={imageSrc}
        price={price}
      />
    );
  },
  args: {},
};
