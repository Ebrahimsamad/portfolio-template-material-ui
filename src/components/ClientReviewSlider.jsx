import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Card,
  Typography,
  Box,
  Avatar,
  Rating,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const reviews = [
  {
    id: 1,
    name: "Adam Smith, CEO",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Doe, CTO",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "John Doe, Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Connor, Designer",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
  },
];

const ClientReviewSlider = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % reviews.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevStep) => (prevStep - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "400px" }}>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "#fff",
        }}
        onClick={handleBack}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "#fff",
        }}
        onClick={handleNext}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Carousel
        index={activeStep}
        indicators={false} // Hide default indicators since we are using custom arrows
        navButtonsAlwaysInvisible={true} // Hide default navigation buttons
        autoPlay={false} // Prevent auto sliding, you can enable it if needed
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Carousel>
    </Box>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`, // Online background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "#fff",
          borderRadius: "12px",
        }}
      >
        <Avatar
          alt={review.name}
          src={review.image}
          sx={{ width: 80, height: 80, marginRight: "20px" }}
        />
        <Box>
          <Typography
            variant="body1"
            sx={{ marginBottom: "10px", fontStyle: "italic" }}
          >
            "{review.review}"
          </Typography>
          <Rating name="read-only" value={review.rating} readOnly />
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            {review.name}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default ClientReviewSlider;
