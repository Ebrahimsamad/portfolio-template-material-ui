import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  LinearProgress,
  Avatar,
} from "@mui/material";

const skills = [
  { name: "JAVASCRIPT", icon: "JS", value: 90 },
  { name: "Node JS", icon: "NO", value: 85 },
  { name: "React JS", icon: "RE", value: 80 },
  { name: "Angular", icon: "AN", value: 75 },
  { name: "Next JS", icon: "Ne", value: 70 },
  { name: "Nest ", icon: "NE", value: 95 },
];

const AboutMe = () => {
  return (
    <Box sx={{ padding: "40px", marginLeft: "130px", marginRight: "100px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ marginBottom: "20px" }}>
            About Me
          </Typography>
          <Typography variant="h6" color="primary">
            I am a Full Stack Web Developer
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum rem
            nulla voluptatum, qui cum necessitatibus veritatis amet fuga nam,
            nemo dolor fugit accusamus sequi. Deserunt corrupti, iusto illum
            sequi neque sint quibusdam beatae, odio numquam fuga assumenda dicta
            explicabo ex, provident consectetur! Velit amet quos quas
            voluptatibus debitis quidem? In.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
          >
            Contact Me
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          {skills.map((skill) => (
            <Box
              key={skill.name}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#e0e0e0",
                  color: "#2a5ece",
                  width: "40px",
                  height: "40px",
                }}
              >
                {skill.icon}
              </Avatar>
              <Typography
                variant="body1"
                sx={{ marginLeft: "10px", width: "150px" }}
              >
                {skill.name}
              </Typography>
              <LinearProgress
                sx={{ flexGrow: 1, marginLeft: "10px" }}
                variant="determinate"
                value={skill.value}
                color="primary"
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
