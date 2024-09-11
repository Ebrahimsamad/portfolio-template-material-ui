import { Container, Box, Typography, Grid } from "@mui/material";
import ContactForm from "./ContactForm.jsx";

const ContactUs = () => {
  return (
    <Container sx={{ py: 8, marginTop: "250px" }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h3" component="h2" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              I am Ebrahim Samad a Full Stack Web Developer Using Mearn Stack
              Feel Free to call me at any time
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Address:
              </Typography>
              <Typography variant="body2" paragraph>
                6th October, Egypt
              </Typography>

              <Typography variant="h6" component="h3" gutterBottom>
                Phone:
              </Typography>
              <Typography variant="body2" paragraph>
                +20 114 436 9646
              </Typography>

              <Typography variant="h6" component="h3" gutterBottom>
                Email:
              </Typography>
              <Typography variant="body2">ebrahim7asn@gmail.com</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
