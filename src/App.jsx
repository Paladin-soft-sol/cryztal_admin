import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import RouterPage from "./route";
import theme from "./assets/theme";
import store from "./reducers";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
