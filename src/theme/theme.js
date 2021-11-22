import { createTheme } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

// const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[600],
    },
  },
});

export default theme;
