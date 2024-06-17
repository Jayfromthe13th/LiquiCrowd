import React from "react";
import { Avatar, Box, Button, Grid, Link } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ConnectButton, useWallet } from "@suiet/wallet-kit";

const ROUTES = ["Home", "Explore", "Pool Details", "Borrow"];

export default function TopNav() {
  const { status, disconnect } = useWallet(); // Utilizing the useWallet hook
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[1];

  const handleRoute = (route) => {
    const routePath =
      route === "Pool Details" ? "pool-details" : route.toLowerCase();
    navigate("/" + routePath);
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {" "}
      {/* Remove overflow or set it to "hidden" */}
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        style={{ height: "120px", padding: "0 40px" }}
      >
        <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
          <img
            src="Logo.png"
            alt="LiquidCrwd Logo"
            style={{ height: "160px", width: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={8}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {ROUTES.map((route) => (
            <Link
              key={route}
              onClick={() => handleRoute(route)}
              sx={{
                cursor: "pointer",
                color:
                  currentRoute === route.toLowerCase() ||
                  (currentRoute === "" && route === "Home")
                    ? "#FCB808"
                    : "#969696",
                "&:hover": { color: "#FFFFFF" },
                textDecoration: "none",
                mx: 1.5,
                fontSize: "1rem",
              }}
            >
              {route}
            </Link>
          ))}
        </Grid>
        <Grid
          item
          xs={2}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {/* Conditional rendering based on wallet connection status */}
          {status === "connected" ? (
            <Button
              variant="outlined"
              sx={{
                borderColor: "orange",
                color: "orange",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
                mr: 2,
              }}
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          ) : (
            <ConnectButton
              style={{
                backgroundColor: "orange",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
                marginRight: "8px",
                fontWeight: "bold",
              }}
            />
          )}
          <Avatar alt="user" sx={{ bgcolor: "#424242", ml: 2 }} />
        </Grid>
      </Grid>
    </Box>
  );
}
