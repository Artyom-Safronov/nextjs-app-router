'use client';
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#2f2f2f",
      dark: "#ba000d",
      contrastText: "#eee",
    },
  },
  typography: {
    h6: {
      fontSize: "1.2rem"
    },
    h5: {
      fontSize: "1.4rem"
    },
    h4: {
      fontSize: "1.6rem"
    },
    h3: {
      fontSize: "1.8rem"
    },
    h2: {
      fontSize: "2rem"
    },
    h1: {
      fontSize: "2.2rem"
    },
  }
});

export default theme;