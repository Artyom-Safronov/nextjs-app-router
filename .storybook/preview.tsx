import React from 'react';
import type { Preview } from "@storybook/react";
import { inter } from "../font";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      // exclude: ["slides"],
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        // <body className={inter.className}>
          <Story />
        // </body>
      )
    }
  ]
};

export default preview;
