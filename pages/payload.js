import { useContext } from "react";
import { AppContext } from "./_app";
import FileUpload from "../src/components/FileUpload";
import { Box, Select, MenuItem, Typography } from "@material-ui/core";

export default function payload() {
  const { state, dispatch } = useContext(AppContext);
  const { payloadSelect } = state;
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Select
          value={payloadSelect}
          onChange={(e) =>
            dispatch({ type: "setPayloadSelect", payload: e.target.value })
          }
        >
          <MenuItem value="none">Select Payload</MenuItem>
          <MenuItem value="sxos">SX OS</MenuItem>
          <MenuItem value="sample">Fusee Gelee Sample</MenuItem>
        </Select>
        <Typography>or</Typography>
        <FileUpload />
      </Box>
    </Box>
  );
}
