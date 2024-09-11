import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
  Container,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#0f2c4e",
          color: "#ffffff",
          padding: "60px 20px",
          mt: 8,
        }}
      >
        <Grid container spacing={5}>
          {/* About Us Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officiis
              perferendis rem, aut aliquam neque nam?
            </Typography>
            <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
              <IconButton href="#" sx={{ color: "#ffffff" }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" sx={{ color: "#ffffff" }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" sx={{ color: "#ffffff" }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="#" sx={{ color: "#ffffff" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          {/* Company Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                Team
              </Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                Pricing
              </Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                Project
              </Link>
            </Box>
          </Grid>

          {/* Useful Links Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Useful Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                Terms of Service
              </Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                Privacy Policy
              </Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                Documentation
              </Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                Changelog
              </Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">
                Components
              </Link>
            </Box>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
              Sign up for the latest news
            </Typography>
            <Box component="form" sx={{ display: "flex", gap: "10px", mt: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Your Email"
                InputProps={{
                  startAdornment: <Email sx={{ color: "#ffffff" }} />,
                  sx: {
                    backgroundColor: "#1b3a5a",
                    borderColor: "#ffffff55",
                    color: "#ffffff",
                    "&:hover": {
                      borderColor: "#ffffffaa",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#ffffff55",
                      },
                      "&:hover fieldset": {
                        borderColor: "#ffffffaa",
                      },
                    },
                  },
                }}
                fullWidth
                sx={{ input: { color: "#ffffff" } }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#506AD4",
                  color: "#ffffff",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "#3f59c4",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
