import { Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <Typography variant="subtitle2">Hello World</Typography>
      <Button variant="contained" color="primary">
        Salut tout le monde
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: grey[100],
  },
}));

export default App;
