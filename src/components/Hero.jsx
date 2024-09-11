import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
} from "@mui/material";

const EvelynnDesigns = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", mb: 2, color: "#007bff" }}
            >
              Ebrahim Samad
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mb: 3 }}>
              Looking for a Full Stack Web Developer?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, lineHeight: 1.7, color: "white" }}
            >
              I specialize in creating stunning visual content that resonates
              with your audience. Whether you need branding, web design, or
              promotional materials, I have the skills to bring your vision to
              life.
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ mb: 2, fontWeight: "bold", color: "white" }}
            >
              FEATURED PHOTOS
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    alt="Featured Photo 1"
                    height="140"
                    image="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce"
                  />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    alt="Featured Photo 2"
                    height="140"
                    image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                  />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    alt="Featured Photo 3"
                    height="140"
                    image="https://images.unsplash.com/photo-1496483648148-47c686dc86a8"
                  />
                </Card>
              </Grid>
            </Grid>
            <Button
              variant="outlined"
              sx={{
                mt: 3,
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "20px",
                textTransform: "none",
                borderColor: "#007bff",
                color: "#007bff",
                "&:hover": {
                  backgroundColor: "#007bff",
                  color: "#fff",
                },
              }}
            >
              CLICK TO VIEW MORE
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                ml: 2,
                fontWeight: "bold",
                padding: "10px 30px",
                borderRadius: "20px",
                textTransform: "none",
                backgroundColor: "#007bff",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              HIRE ME
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EvelynnDesigns;
