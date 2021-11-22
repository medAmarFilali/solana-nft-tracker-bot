import { useState } from "react";
import { Typography, Container, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const App = () => {
  const classes = useStyles();
  const [nftKey, setNftKey] = useState("");
  return (
    <div className={classes.pageContainer}>
      <Container maxWidth="xl">
        <div className={classes.headerContainer}>
          <div className={classes.formContainer}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Enter your NFT Key
            </Typography>
            <TextField
              variant="outlined"
              value={nftKey}
              onChange={(e) => setNftKey(e.target.value)}
              label="NFT KEY"
              sx={{ marginTop: 2, width: "600px" }}
              fullWidth
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    // backgroundColor: grey[100],
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(8),
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default App;
