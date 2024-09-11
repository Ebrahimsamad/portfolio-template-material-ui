// PortfolioSection.jsx
import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
} from "@mui/material";

const portfolioItems = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  },
];

const PortfolioSection = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "4rem 0" }}>
      {/* Section Title */}
      <Typography variant="h4" align="center" gutterBottom>
        My Works And Portfolios
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        gutterBottom
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      {/* Portfolio Grid */}
      <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
        {portfolioItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt="portfolio image"
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* View More Button */}
      <Grid container justifyContent="center" sx={{ marginTop: "2rem" }}>
        <Button variant="contained" color="primary">
          View More
        </Button>
      </Grid>
    </Container>
  );
};

export default PortfolioSection;
