import React from 'react';
import type { Preview } from "@storybook/react";
import { inter } from "../font";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <body className={inter.className}>
          <Story />
        </body>
      )
    }
  ]
};

export default preview;
