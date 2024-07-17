import { faker } from "@faker-js/faker";

export const menuItems = [
  {
    label: 'New Arrivals',
    link: '/'
  },
  {
    label: 'Best Sellers',
    link: '/'
  },
  {
    label: 'Footwear',
    link: '/'
  },
  {
    label: 'Hype',
    link: '/'
  },
  {
    label: 'Men',
    link: '/'
  },
  {
    label: 'Woman',
    link: '/'
  },
  {
    label: 'Kids',
    link: '/'
  },
  {
    label: 'Brands',
    link: '/'
  },
  {
    label: 'Apparel',
    link: '/'
  },
  {
    label: 'Sale',
    link: '/'
  },
  {
    label: 'Gifts',
    link: '/'
  },
  {
    label: 'Sale',
    link: '/'
  },
  {
    label: 'Outlet',
    link: '/'
  },
];

export const sizes = {
  xs: {
    int: "xs",
    us: 10,
    eu: 11,
  },
  s: {
    int: "s",
    us: 10,
    eu: 11,
  },
  m: {
    int: "m",
    us: 10,
    eu: 11,
  },
  l: {
    int: "l",
    us: 10,
    eu: 11,
  },
  xl: {
    int: "xl",
    us: 10,
    eu: 11,
  },
};

export const bestSelleres = [
  "Jordan1",
  "Jordan2",
  "Jordan3",
  "Jordan4",
  "Jordan5",
  "Nike",
  "Adidas",
  "Reebok",
  "Puma",
];

export const fakeGoods = Array(20)
  .fill(null)
  .map((element) => {
    // const image = faker.image.urlPicsumPhotos({ blur: 1, grayscale: true });
    const image = '/nike-1.png'
    return {
      imageSrc: image,
      name: faker.commerce.productName(),
      brand: faker.company.name(),
      price: faker.commerce.price({dec: 0})
    };
  });