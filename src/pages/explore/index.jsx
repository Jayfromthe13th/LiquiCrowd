import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Explore() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  // Updated placeholder data with 'SUI Move'
  const lendingPools = [
    {
      title: "Motion DAO",
      type: "SUI Move - SUI",
      apy: "4.82%",
      securedBy: "Global Treasury Bonds",
      liquidity: "3 Hours",
      description:
        "Efficient cash management secured by high-grade bonds with daily liquidity.",
    },
    {
      title: "Kraken Finance",
      type: "Ethereum - ETH",
      apy: "8.46%",
      securedBy: "Diverse Digital Collaterals",
      liquidity: "30 Days",
      description:
        "Financing solutions for institutions with robust collateralization in digital assets.",
    },
  ];

  const cardStyle = {
    bgcolor: "black",
    color: "white",
    borderColor: "orange",
    borderWidth: 2,
    borderStyle: "solid",
    "&:hover": {
      borderColor: "white",
    },
  };
 const handleLearnMoreClick = (poolId) => {
   navigate(`/poolDetails/${poolId}`); // Replace with your actual path and parameter
 };
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "black", padding: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "white", textAlign: "center" }}
      >
        Explore Lending Pools
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4}>
        {lendingPools.map((pool, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              raised
              sx={{
                ...cardStyle,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pool.title}
                </Typography>
                <Typography sx={{ mb: 1.5, color: "orange" }}>
                  {pool.type}
                </Typography>
                <Divider light sx={{ my: 2, bgcolor: "orange" }} />
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {pool.description}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "orange" }}
                >
                  {pool.apy} APY
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    color: "orange",
                  }}
                >
                  <AccountBalanceIcon sx={{ mr: 1, color: "orange" }} />
                  Secured by {pool.securedBy}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    color: "orange",
                  }}
                >
                  <TrendingUpIcon sx={{ mr: 1, color: "orange" }} />
                  Liquidity: {pool.liquidity}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    color: "orange",
                    borderColor: "orange",
                    "&:hover": { bgcolor: "orange", color: "black" },
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {/* Chart placeholder */}
        <Grid item xs={12}>
          <Card raised sx={{ ...cardStyle, p: 2 }}>
            <Typography variant="h5" component="div">
              Total Value Locked
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{ my: 2, color: "orange" }}
            >
              3.6M USCD
            </Typography>
            {/* Chart component goes here */}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
