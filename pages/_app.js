
import { createContext, useReducer } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
import Head from "next/head";

const initialState = {
  dialog: true,
  payloadSelect: "none",
  fileUpload: [],
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "closeDialog":
      return { ...state, dialog: false };
    case "setPayloadSelect":
      return { ...state, payloadSelect: action.payload };
    case "setFileUpload":
      return { ...state, fileUpload: action.payload };
    default:
      return { ...state };
  }
};

export const AppContext = createContext();

export default function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Fusée Launcher</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
