import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  CardActionArea,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import { styled } from "@mui/material/styles";
const newsData = [
  {
    id: 1,
    date: "12 Feb",
    title: "Lorem ipsum dolor sit elitdo",
    description:
      "Lorem ipsum dolor sit elitdo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1725986070936-0e914dd38a52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 23,
    comments: 45,
  },
  {
    id: 2,
    date: "12 Feb",
    title: "Lorem ipsum dolor sit elitdo",
    description:
      "Lorem ipsum dolor sit elitdo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1725829879131-1780c5291059?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 23,
    comments: 45,
  },
  {
    id: 3,
    date: "12 Feb",
    title: "Lorem ipsum dolor sit elitdo",
    description:
      "Lorem ipsum dolor sit elitdo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1725976404931-84e8421d9710?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 23,
    comments: 45,
  },
  {
    id: 4,
    date: "12 Feb",
    title: "Lorem ipsum dolor sit elitdo",
    description:
      "Lorem ipsum dolor sit elitdo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1725815091639-de43b766199d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 23,
    comments: 45,
  },
];
// Custom styled component for the image container
const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: 180,
  width: "100%",
  overflow: "hidden",
  "&:hover .overlay": {
    opacity: 1,
  },
}));

// Custom styled component for the overlay
const ImageOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
}));

const NewsCard = ({ news }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px", position: "relative" }}>
      <ImageContainer>
        <img
          alt={news.title}
          src={news.image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "filter 0.3s ease-in-out",
          }}
        />
        <ImageOverlay className="overlay">
          <Typography variant="h6">Click to Get More</Typography>
        </ImageOverlay>
      </ImageContainer>
      <CardContent>
        <Typography
          sx={{
            backgroundColor: "#E0E0E0",
            width: "fit-content",
            padding: "4px 12px",
            borderRadius: 4,
          }}
        >
          {news.date}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ marginTop: "10px" }}
        >
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {news.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="small">
              <VisibilityIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ marginLeft: "5px" }}>
              {news.views}
            </Typography>
            <IconButton size="small" sx={{ marginLeft: "10px" }}>
              <BookmarkBorderIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ marginLeft: "5px" }}>
              {news.comments}
            </Typography>
          </Box>
          <IconButton size="small">
            <ShareIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const LatestNewsSection = () => {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#F5F5F5" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Latest News
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: "600px", margin: "auto", marginBottom: "40px" }}
      >
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {newsData.map((news) => (
          <Grid item key={news.id} xs={12} sm={6} md={4} lg={3}>
            <NewsCard news={news} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNewsSection;
