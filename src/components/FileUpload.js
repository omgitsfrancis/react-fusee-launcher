import React, { useCallback, useContext } from "react";
import { Select, MenuItem, Box, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from "react-dropzone";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import { AppContext } from "../../pages/_app";
import theme from "../theme";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    outline: "2px dashed black",
    padding: theme.spacing(1),
    width: "720px",
    [theme.breakpoints.down('sm')]: {
      width: "95%"
    },
    '&:hover': {
      background: grey[200],
      cursor: "pointer"
    }
  },
});

export default function FileUpload() {
  const { dispatch } = useContext(AppContext);
  const onDrop = useCallback((acceptedFiles) => {
    dispatch({ type: "setFileUpload", payload: acceptedFiles[0] });
    dispatch({type: "setPayloadSelect", payload: "none"})
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const classes = useStyles();

  return (
    <Box
      {...getRootProps()}
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
    >
      <input {...getInputProps()} />
      <SystemUpdateAltIcon fontSize="large" />

      {isDragActive ? (
        <Typography variant="h5" display="inline" align="center">
          Drop the files here ...
        </Typography>
      ) : (
        <>
          <Typography variant="h6" display="inline" align="center">
            Drag and drop Payload file
          </Typography>
          <Typography variant="h6" display="inline" align="center">or click to choose</Typography>
        </>
      )}
    </Box>
  );
}
