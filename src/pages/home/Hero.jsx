import { Button, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://pbs.twimg.com/profile_images/1751202251836674048/kfnYQuS2_400x400.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://pbs.twimg.com/profile_banners/1469030615303528455/1706469243/1500x500",
    },
  ];

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      height={"85vh"}
    >
      <Grid item sm={12} md={6} sx={{ p: 4 }}>
        <Carousel
          IndicatorIcon={<>XXXXXX</>}
          autoPlay={false}
          fullHeightHover
          animation="slide"
          interval={5000}
          sx={{
            background: "#161616",
            borderRadius: "13px",
            borderColor: "lightgray",
            padding: "10px",
          }}
        >
          {items.map((item) => (
            <div key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                height={500}
                width={"100%"}
                style={{ borderRadius: "16px", padding: "10px" }}
              />
              <Typography variant="subtitle2" sx={{ padding: "10px" }}>
                {item.name}
              </Typography>
            </div>
          ))}
        </Carousel>
      </Grid>
      <Grid item sm={12} md={6} sx={{ p: 4 }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Discover the unique digital art of NFT
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          Digital marketplace for crypto collectibles and non-fungible tokens.
          Buy, sell, and discover exclusive digital assets.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          onClick={() => navigate("/explore")}
        >
          Explore
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/create")}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
