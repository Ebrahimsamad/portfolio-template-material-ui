import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const ProjectCard = ({ title, description, buttonText, number }) => {
  return (
    <Card
      sx={{
        height: "100%",
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: 3,
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#6c63ff",
            mb: 3,
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
        <Button variant="text" sx={{ color: "#6c63ff", fontWeight: "bold" }}>
          {buttonText}
        </Button>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          right: 16,
          color: "#ececec",
          fontSize: "5rem",
          fontWeight: 900,
          zIndex: -1,
          userSelect: "none",
        }}
      >
        {number}
      </Box>
    </Card>
  );
};

export default ProjectCard;
