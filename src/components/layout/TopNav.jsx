import { Avatar, Box, Button, Grid, Link, Stack } from "@mui/material";
import logo from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const ROUTES = ["Home", "Explore", "Pages", "Community", "Contact"];

export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[1];
  console.log("currentRoute", currentRoute);

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        height={120}
      >
        <Grid item md={2} sx={{ borderRight: "1px solid #424242" }}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item md={4} sx={{ borderRight: "1px solid #424242" }}>
          <div>Search component</div>
        </Grid>
        <Grid item md={6}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-evenly"
            alignItems="center"
          >
            {ROUTES.map((route) => (
              <Link
                key={route}
                disableElevation
                disableRipple
                onClick={handleRoute.bind(null, route.toLowerCase())}
                sx={{
                  color:
                    currentRoute === route.toLowerCase() ||
                    (currentRoute === "" && route === "Home")
                      ? "#FCB808"
                      : "#969696",
                }}
              >
                {route}
              </Link>
            ))}
            <Button
              variant="contained"
              color="primary"
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              Connect Wallet
            </Button>
            <Avatar alt="user" />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
