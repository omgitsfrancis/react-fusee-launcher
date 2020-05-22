import { useContext } from "react";
import { AppContext } from "./_app";
import FileUpload from "../src/components/FileUpload";
import { Box, Select, MenuItem, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../src/theme";

const useStyles = makeStyles({
  mb: {
    marginBottom: theme.spacing(1),
  },
  fileUploadedText: {
    marginRight: theme.spacing(2),
  },
});

export default function payload() {
  const { state, dispatch } = useContext(AppContext);
  const { payloadSelect } = state;
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginBottom="0.25rem"
      >
        <Select
          value={payloadSelect}
          onChange={(e) => {
            dispatch({ type: "setPayloadSelect", payload: e.target.value });
            dispatch({ type: "setFileUpload", payload: null });
          }}
          className={classes.mb}
        >
          <MenuItem value="none">Select Payload</MenuItem>
          <MenuItem value="sxos">SX OS</MenuItem>
          <MenuItem value="sample">Fusee Gelee Sample</MenuItem>
        </Select>
        <Typography variant="h6" className={classes.mb}>
          or
        </Typography>
        <FileUpload />
      </Box>
      {state.fileUpload && (
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography variant="body1" className={classes.fileUploadedText}>
            File uploaded: {state.fileUpload.name}
          </Typography>
          <Button
            variant="contained"
            onClick={() => dispatch({ type: "setFileUpload", payload: null })}
          >
            Clear
          </Button>
        </Box>
      )}
    </Box>
  );
}
