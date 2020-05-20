import { useState, createContext, useContext, useReducer } from "react";
import Head from "next/head";
import CustomizedDialogs from "../src/components/DisclaimerModal";
import PayloadPicker from "../src/components/PayloadPicker";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
import { LauncherContext, LauncherReducer } from "../src/LauncherContext";

const initialState = {
  dialog: true,
  payloadSelect: "none",
  fileUpload: []
}

export default function Home() {
  const [state, dispatch] = useReducer(LauncherReducer, initialState)
  const {dialog} = state;

  return (
    <LauncherContext.Provider value={{state, dispatch}}>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Head>
            <title>Fusée Launcher</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <CustomizedDialogs onClose={() => dispatch({type: "closeDialog"})} open={dialog} />
          <PayloadPicker />
        </div>
      </ThemeProvider>
    </LauncherContext.Provider>
  );
}
