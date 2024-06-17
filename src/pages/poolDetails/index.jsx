import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
} from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { PACKAGE_ID, LIQUIDITY_POOL } from "../../utils/constants";
import { useWallet } from "@suiet/wallet-kit";

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

const chartOptions = {
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
};

const holdingsData = {
  labels: ["1-14 Days", "15-30 Days", "31-60 Days", "61-90 Days", "91+ Days"],
  datasets: [
    {
      label: "Holdings by Maturity",
      data: [52, 35, 8, 0, 0],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    },
  ],
};

const distributionData = {
  labels: ["Lender", "Move Protocol", "RomaoD"],
  datasets: [
    {
      label: "Distribution of Interest",
      data: [4.82, 0.24, 0.25],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const lenders = [
  { address: "0x123...456", amount: 100 },
  { address: "0x789...012", amount: 250 },
  { address: "0x345...678", amount: 150 },
  { address: "0x456...789", amount: 200 },
  { address: "0x567...890", amount: 300 },
  // Additional lenders here as needed
];

const poolTarget = 10000; // Example target
const poolFillPercentage = 95; // Set to 95% as requested

const strategyOptions = [
  {
    value: "conservative",
    label: "Conservative Strategy",
    description: "Low-risk loans with an expected APY of 3-4%.",
    borrowerInterest: "1-2%",
    lenderAPY: "3%",
    monthlyPayment: "$500",
    interestRate: "2%",
    payoffMonths: 24, // Added field for months
  },
  {
    value: "balanced",
    label: "Balanced Strategy",
    description: "Mixed portfolio with an expected APY of 5-6%.",
    borrowerInterest: "2-3%",
    lenderAPY: "5%",
    monthlyPayment: "$700",
    interestRate: "3%",
    payoffMonths: 36, // Added field for months
  },
  // Insert the new strategy here
  {
    value: "dynamic",
    label: "Dynamic Strategy",
    description: "Adaptable risk and return, targeting an APY of 4-7%.",
    borrowerInterest: "2-4%",
    lenderAPY: "4-6%",
    monthlyPayment: "$800",
    interestRate: "3.5%",
    payoffMonths: 42, // Example value
  },
  {
    value: "aggressive",
    label: "Aggressive Strategy",
    description: "High-risk, high-reward loans with an expected APY of 7%+.",
    borrowerInterest: "4-5%",
    lenderAPY: "7%",
    monthlyPayment: "$1000",
    interestRate: "5%",
    payoffMonths: 48, // Added field for months
  },
];

const PoolDetails = () => {
  const [selectedStrategy, setSelectedStrategy] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const wallet = useWallet();

  const handleStrategyChange = (event) => {
    setSelectedStrategy(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const castVote = async () => {
    console.log("Casting Vote");
    const txb = new TransactionBlock();

    // Example inputs
    const voter = "0x0";
    const weight = 0;
    const choice = true;

    txb.moveCall({
      arguments: [
        txb.object(LIQUIDITY_POOL),
        txb.pure.address(voter),
        txb.pure.u64(weight),
        txb.pure.bool(choice),
      ],
      target: `${PACKAGE_ID}::bank_pool::cast_vote`,
    });
    const tx = await wallet.signAndExecuteTransactionBlock({
      transactionBlock: txb,
    });
    console.log(tx);
  };

  const lendToPool = async () => {
    console.log("Lending to pool");
    const txb = new TransactionBlock();

    // Example amount
    const depositAmount = 100;

    const account = "0xSomeObject";
    const [coin] = txb.splitCoins(txb.gas, [depositAmount]);
    txb.moveCall({
      arguments: [
        txb.object(LIQUIDITY_POOL),
        //txb.object(account),
        txb.object(coin),
      ],
      target: `${PACKAGE_ID}::bank_pool::deposit_to_pool`,
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
        Motion DAO
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "orange" }}>
                Pool Overview
              </Typography>
              <Typography variant="body2" sx={{ color: "white", mt: 2 }}>
                {" "}
                {/* Adjust margin as needed */}
                The Motion DAO DeFi Pool is engineered to serve the evolving
                financial needs of decentralized organizations, crypto
                investors, and blockchain enterprises by optimizing their
                digital asset holdings for enhanced returns while maintaining a
                focus on risk mitigation. Leveraging lending strategies, the
                Pool aims to generate a competitive APY that outpaces
                traditional savings rates, without compromising on security or
                liquidity. Through a blend of algorithmic lending, stake in
                high-yield DeFi protocols, and participation in liquidity
                mining, the Pool targets sustainable growth and income
                generation. Open to contributions in popular cryptocurrencies,
                Motion DAO ensures participants have flexible access to their
                investments, with features like instant withdrawals and
                real-time interest tracking, all within a decentralized and
                transparent ecosystem.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "orange" }}>
                Key Highlights
              </Typography>
              <Typography
                variant="body2"
                paragraph
                sx={{ color: "white", mb: 2 }}
              >
                ✓ Diversified DeFi Strategies: Investments are spread across
                premier DeFi protocols on the Sui blockchain to maximize yield
                while managing risk, avoiding direct exposure to highly volatile
                assets.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                sx={{ color: "white", mb: 2 }}
              >
                ✓ Multi-Currency Contributions: Accepts a variety of digital
                currencies, including SUI, stablecoins, and other major
                cryptocurrencies, to accommodate a broad investor base.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                sx={{ color: "white", mb: 2 }}
              >
                ✓ Immediate Withdrawal Options: Ensures liquidity through the
                provision of instant access to funds, emphasizing our commitment
                to flexibility and user autonomy.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                sx={{ color: "white", mb: 2 }}
              ></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ ...cardStyle, height: "100%" }}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ color: "orange" }}>
                Holdings by Maturity
              </Typography>
              <Doughnut data={holdingsData} options={chartOptions} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ ...cardStyle, height: "100%" }}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ color: "orange" }}>
                Distribution of Interest
              </Typography>
              <Doughnut data={distributionData} options={chartOptions} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: "black", mt: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          textColor="orange"
          indicatorColor="secondary"
          sx={{ borderBottom: "1px solid orange" }}
        >
          <Tab label="Lend to Pool" sx={{ color: "white" }} />
          <Tab label="Vote on Strategy" sx={{ color: "white" }} />
        </Tabs>

        {tabValue === 0 && (
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
              Lenders and Contributions
            </Typography>
            <List
              sx={{
                bgcolor: "black",
                color: "white",
                overflow: "auto",
                maxHeight: 300,
                mb: 2,
                "&::-webkit-scrollbar": { width: "8px" },
                "&::-webkit-scrollbar-track": { background: "black" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "orange",
                  borderRadius: "20px",
                },
              }}
            >
              {lenders.map((lender, index) => (
                <ListItem key={index} sx={{ borderBottom: "1px solid orange" }}>
                  <ListItemText
                    primary={`Address: ${lender.address}`}
                    secondary={`Amount: ${lender.amount} SUI`}
                    secondaryTypographyProps={{ style: { color: "orange" } }}
                  />
                </ListItem>
              ))}
            </List>
            <Typography variant="body2" sx={{ color: "white", mb: 1 }}>
              Pool Fill Level
            </Typography>
            <LinearProgress
              variant="determinate"
              value={poolFillPercentage}
              sx={{ height: 20, borderRadius: 5, backgroundColor: "#FFA50066" }}
            />
            <Typography variant="body2" sx={{ color: "white", mt: 2 }}>
              95% filled of the pool target
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "orange",
                "&:hover": { bgcolor: "white", color: "black" },
                marginTop: 2,
              }}
              onClick={lendToPool}
            >
              Lend
            </Button>
          </Box>
        )}

        {tabValue === 1 && (
          <Box sx={{ padding: 2 }}>
            <Box>
              <RadioGroup
                value={selectedStrategy}
                onChange={handleStrategyChange}
                sx={{ flexDirection: "row" }}
              >
                {strategyOptions.map((option) => (
                  <Box key={option.value} sx={{ width: "50%" }}>
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio sx={{ color: "white" }} />}
                      label={
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "orange" }}
                          >
                            {option.label}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "white" }}>
                            {option.description}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "white" }}>
                            Borrower Interest: {option.borrowerInterest}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "white" }}>
                            Lender APY: {option.lenderAPY}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "white" }}>
                            Monthly Payments: {option.monthlyPayment}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "white" }}>
                            Interest Rate: {option.interestRate}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "white" }}>
                            Payoff Period: {option.payoffMonths} months
                          </Typography>
                        </Box>
                      }
                      sx={{
                        color: "white",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    />
                  </Box>
                ))}
              </RadioGroup>
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "orange",
                "&:hover": { bgcolor: "white", color: "black" },
              }}
              onClick={castVote}
            >
              Submit Vote
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PoolDetails;
