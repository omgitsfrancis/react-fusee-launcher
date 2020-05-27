import { useContext } from "react";
import { AppContext } from "./_app";
import CustomizedDialogs from "../src/components/DisclaimerModal";
import { Box } from "@material-ui/core";
import Switch from "../src/components/Switch";

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
  const { dialog } = state;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CustomizedDialogs
        onClose={() => dispatch({ type: "closeDialog" })}
        open={dialog}
      />
      <Switch />
    </Box>
  );
}
