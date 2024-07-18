import React from "react";
import type { Preview } from "@storybook/react";
import theme from "../src/app/theme"
import { ThemeProvider } from "@mui/material";

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
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        // </body>
      );
    },
  ],
};

export default preview;
