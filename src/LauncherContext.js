import { createContext } from "react";

const LauncherContext = createContext();

const LauncherReducer = (state, action) => {
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

export { LauncherContext, LauncherReducer };
