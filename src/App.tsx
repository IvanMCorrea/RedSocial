import React from "react";
import "./index.css";
import { SnackbarProvider } from "notistack";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <SnackbarProvider
      autoHideDuration={1500}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <AppRouter />
    </SnackbarProvider>
  );
}

export default App;
