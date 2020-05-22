import React, { useCallback, useContext } from "react";
import { Select, MenuItem, Box, Typography } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { AppContext } from "../../pages/_app";

export default function FileUpload() {
  const { dispatch } = useContext(AppContext);
  const onDrop = useCallback((acceptedFiles) => {
    dispatch({type: "setFileUpload", payload: acceptedFiles})
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box {...getRootProps()} display="flex" flexDirection="column" alignItems="center" style={{ outline: "2px dashed black" }}>
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

