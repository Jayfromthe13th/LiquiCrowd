import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import { router } from "./router";
import { theme } from "./styles/theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <WalletProvider>
        <RouterProvider router={router} />
      </WalletProvider>
    </ThemeProvider>
  </React.StrictMode>
);
