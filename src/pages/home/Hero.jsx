import React from "react";
import { Box, Grid, Typography, Paper, useTheme } from "@mui/material";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

export default function Hero() {
  const theme = useTheme();

  const features = [
    {
      title: "Managed Marketplace",
      description:
        "A curated selection of prime lending opportunities, backed by meticulous due diligence.",
      icon: <PieChartOutlineIcon sx={{ fontSize: 40, color: "#ffa500" }} />,
    },
    {
      title: "Transparent Lending",
      description:
        "Complete visibility into lending terms and conditions for informed decision-making.",
      icon: <VisibilityIcon sx={{ fontSize: 40, color: "#ffa500" }} />,
    },
    {
      title: "Institutional Focus",
      description:
        "Tailored financial solutions for institutions demanding the highest compliance and security standards.",
      icon: <BusinessCenterIcon sx={{ fontSize: 40, color: "#ffa500" }} />,
    },
    {
      title: "Designed for Lenders",
      description:
        "Optimized lending processes designed for ease, efficiency, and excellence in service.",
      icon: (
        <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "#ffa500" }} />
      ),
    },
    {
      title: "User Voting",
      description:
        "Empower your investment by voting for asset managers' borrow strategies, driving community-led financial decisions.",
      icon: <HowToVoteIcon sx={{ fontSize: 40, color: "#ffa500" }} />,
    },
    {
      title: "Cross-Chain Interactions",
      description:
        "Experience fast and secure transactions across various blockchains with Movement Labs M1 blockchain, enhancing interoperability.",
      icon: <SyncAltIcon sx={{ fontSize: 40, color: "#ffa500" }} />,
    },
  ];

  // Enhanced live data for the ticker
  const tickerData = [
    "🌟 New Pool Opened: Tech Innovators Fund",
    "💸 Transaction: 250 ETH in DeFi Pool",
    "📈 Pool Growth: Green Energy Fund +3.5%",
    "💰 New Loan: $1.2M to XYZ Startups",
    "🔒 Security Upgrade: Enhanced Smart Contract Safety",
    "🔄 Pool Status: Stablecoin Pool - High Liquidity",
    "🗳️ Vote Results: Green Bond Strategy Approved",
    // Add more items as needed
  ];

  return (
    <Box
      sx={{ backgroundColor: "#000", color: "#fff", padding: theme.spacing(4) }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ color: "#ffa500", fontWeight: "bold" }}
          >
            Empower Your Capital with DeFi Innovation
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Welcome to the forefront of financial revolution, where innovation
            meets liquidity to redefine what's possible in the DeFi space. Our
            platform stands as a beacon for institutions and investors alike,
            offering a gateway to unparalleled opportunities. Dive into a world
            where your capital is not just stored but empowered, grown, and
            safeguarded through cutting-edge decentralized finance technologies.
            Join us in paving the way for a future where finance is more
            accessible, transparent, and aligned with the digital age, powered
            by Movement Labs M1 blockchain.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={4}
                  sx={{
                    padding: theme.spacing(2),
                    backgroundColor: "#121212",
                    minHeight: "180px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {feature.icon}
                  <Typography
                    variant="h6"
                    sx={{ color: "#ffa500", fontWeight: "bold" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ mt: 8, textAlign: "center", py: 4 }}>
        <Typography variant="h5" sx={{ color: "#ffa500", mb: 2 }}>
          Live Data Feed
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            bgcolor: "#121212",
            p: 1,
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              animation: "marquee 20s linear infinite",
              "@keyframes marquee": {
                "0%": { transform: "translateX(100%)" },
                "100%": { transform: "translateX(-100%)" },
              },
            }}
          >
            {tickerData.map((data, index) => (
              <Typography
                key={index}
                sx={{ whiteSpace: "nowrap", color: "#fff", mx: 4 }}
              >
                {data}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
