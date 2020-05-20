import React, { useCallback, useContext } from "react";
import { Select, MenuItem, Box, Typography } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import theme from "../theme";
import { LauncherContext } from "../LauncherContext";

function MyDropzone() {
  const { dispatch } = useContext(LauncherContext);
  const onDrop = useCallback((acceptedFiles) => {
    dispatch({type: "setFileUpload", payload: acceptedFiles})
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box {...getRootProps()} display="flex" flexDirection="column" alignItems="center" width="320px" style={{ outline: "2px dashed black" }}>
      <input {...getInputProps()} />
      <SystemUpdateAltIcon fontSize="large" />

      {isDragActive ? (
        <Typography variant="h6" display="inline" align="center">Drop the files here ...</Typography>
      ) : (
        <Typography variant="h6" display="inline" align="center">
          Drag and drop Payload file or click to choose
        </Typography>
      )}
    </Box>
  );
}

export default function PayloadPicker() {
  const { state, dispatch } = useContext(LauncherContext);
  const { payloadSelect } = state;
 
  return (
    <Box>
      <Select value={payloadSelect} onChange={(e) => dispatch({type: "setPayloadSelect", payload: e.target.value})}>
        <MenuItem value="none">Select Payload</MenuItem>
        <MenuItem value="sxos">SX OS</MenuItem>
        <MenuItem value="sample">Fusee Gelee Sample</MenuItem>
      </Select>
      <Typography>or</Typography>
      <MyDropzone />
    </Box>
  );
}
