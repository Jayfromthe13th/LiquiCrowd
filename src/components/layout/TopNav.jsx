import { Avatar, Box, Button, Grid, Stack } from "@mui/material";
import logo from "../../assets/logo.svg";

export default function TopNav() {
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
            <div>Home</div>
            <div>Explore</div>
            <div>Pages</div>
            <div>Community</div>
            <div>Contact</div>
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
