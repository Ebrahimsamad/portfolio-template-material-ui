import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";
import ThemeToggleButton from "./ThemeToggleButton";

function Navbar() {
  return (
    <Container>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              marginRight: 3,
              color: "rgb(31, 118, 177) ",
              cursor: "pointer",
            }}
          >
            Ebrahim
          </Typography>

          {/* Navbar Links */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            {[
              "Demos",
              "Home",
              "Works",
              "Service",
              "Review",
              "Blog",
              "About",
              "Contact",
            ].map((item) => (
              <Button
                variant="a"
                xs={{ marginRight: 4, color: "black" }}
                href="#"
                key={item}
              >
                <Typography variant="body">{item}</Typography>
              </Button>
            ))}
          </Box>

          {/* Login and Signup Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained">Login</Button>
            <Button variant="contained">Signup</Button>
            <ThemeToggleButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Navbar;
