import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Line, Pie, Scatter } from "react-chartjs-2";
import faker from "faker";
import "chart.js/auto";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { PACKAGE_ID, LIQUIDITY_POOL } from "../../utils/constants";
import { useWallet } from "@suiet/wallet-kit";
import { MIST_PER_SUI } from "@mysten/sui.js/utils";

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

const chartOptionsLine = {
  maintainAspectRatio: true,
  aspectRatio: 2,
  scales: {
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "rgba(255,255,255,0.1)",
      },
    },
    y: {
      ticks: {
        color: "white",
        callback: function (value) {
          return value + " SUI";
        },
      },
      grid: {
        color: "rgba(255,255,255,0.1)",
      },
    },
  },
  elements: {
    point: {
      radius: 5,
      backgroundColor: "white",
    },
    line: {
      tension: 0.3,
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
};

const chartOptionsPie = {
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
      position: "bottom",
    },
  },
};

const interestData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Accumulated Interest (SUI)",
      data: [200, 380, 600, 790, 950, 1200],
      borderColor: "#FF6384",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      pointBackgroundColor: "#FF6384",
    },
    {
      label: "Paid-off Interest (SUI)",
      data: [100, 280, 450, 680, 800, 1100],
      borderColor: "#36A2EB",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      pointBackgroundColor: "#36A2EB",
    },
  ],
};

const poolData = {
  labels: ["Pool Amount", "Amount Paid Off"],
  datasets: [
    {
      data: [1500000, 500000],
      backgroundColor: ["#FFCE56", "#FF6384"],
    },
  ],
};

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// const data =[

// {
// x: 1
// y: 2
// },
// ]

export const data = {
  datasets: [
    {
      label: "Payment Size vs. Frequency of Overpayments",
      data: Array.from({ length: 100 }, () => ({
        // Assuming the x value can represent payment size, adjust according to your needs
        x: faker.datatype.number({ min: 1, max: 150000 }),
        // Assuming the y value represents frequency or some metric of overpayments, adjust as needed
        y: faker.datatype.number({ min: 1, max: 12 }),
      })),
      backgroundColor: "rgba(255, 99, 132, 1)",
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
      pointBorderColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const Borrow = () => {
  const wallet = useWallet();
  const withdrawFromPool = async () => {
    console.log("Withdrawing from pool");
    const txb = new TransactionBlock();

    // Example amount
    const amount = 1;

    txb.moveCall({
      arguments: [txb.object(LIQUIDITY_POOL), txb.pure.u64(amount)],
      target: `${PACKAGE_ID}::bank_pool::withdraw_from_pool`,
    });
    const tx = await wallet.signAndExecuteTransactionBlock({
      transactionBlock: txb,
    });
    console.log(tx);
  };
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "black", padding: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "white", textAlign: "center" }}
      >
        Borrow Overview
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "orange" }}>
                Loan Details
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <List sx={{ width: "30%" }}>
                  <ListItem>
                    <ListItemText
                      primary="Total Borrowed"
                      secondary="2M SUI"
                      primaryTypographyProps={{ style: { color: "orange" } }}
                      secondaryTypographyProps={{ style: { color: "white" } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Accumulated Interest"
                      secondary="300k SUI"
                      primaryTypographyProps={{ style: { color: "orange" } }}
                      secondaryTypographyProps={{ style: { color: "white" } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Monthly Payment"
                      secondary="50k SUI"
                      primaryTypographyProps={{ style: { color: "orange" } }}
                      secondaryTypographyProps={{ style: { color: "white" } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Total Paid"
                      secondary="500k SUI"
                      primaryTypographyProps={{ style: { color: "orange" } }}
                      secondaryTypographyProps={{ style: { color: "white" } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Loan Duration"
                      secondary="36 months"
                      primaryTypographyProps={{ style: { color: "orange" } }}
                      secondaryTypographyProps={{ style: { color: "white" } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Remaining Balance"
                      secondary="1.5M SUI"
                      primaryTypographyProps={{ style: { color: "orange" } }}
                      secondaryTypographyProps={{ style: { color: "white" } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Addresses Financed"
                      secondary="120 addresses"
                      primaryTypographyProps={{ style: { color: "orange" } }}
                      secondaryTypographyProps={{ style: { color: "white" } }}
                    />
                  </ListItem>
                </List>
                <Box sx={{ width: "70%" }}>
                  <Scatter options={options} data={data} />
                </Box>
              </Box>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "orange", mt: 2 }}
              >
                Next Payment Due
              </Typography>
              <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                July 15th, 2024 - 55k SUI
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "orange",
                  "&:hover": { bgcolor: "white", color: "black" },
                }}
                onClick={withdrawFromPool}
              >
                Initiate Payment
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ color: "orange" }}>
                Interest Over Time (SUI)
              </Typography>
              <Line data={interestData} options={chartOptionsLine} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ color: "orange" }}>
                Pool Amount Overview
              </Typography>
              <Pie data={poolData} options={chartOptionsPie} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Borrow;
