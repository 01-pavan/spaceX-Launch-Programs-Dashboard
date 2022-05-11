import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

//initial state
const initialState = {
  URL: "https://api.spacexdata.com/v3/launches?limit=100",
};

//CREATE CONTEXT
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function updateUrl(url) {
    dispatch({
      type: "UPDATE_URL",
      payload: url,
    });
  }

  return (
    <GlobalContext.Provider value={{ url: state.URL, updateUrl }}>
      {children}
    </GlobalContext.Provider>
  );
};
