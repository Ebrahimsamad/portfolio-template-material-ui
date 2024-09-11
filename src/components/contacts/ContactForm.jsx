import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "500px",
        mx: "auto",
        mt: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", mb: 4 }}
      >
        Contact Us
      </Typography>

      <TextField
        {...register("name", { required: "Name is required" })}
        label="Name"
        variant="outlined"
        fullWidth
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : null}
      />

      <TextField
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email address",
          },
        })}
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : null}
      />

      <TextField
        {...register("message", { required: "Message is required" })}
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        error={!!errors.message}
        helperText={errors.message ? errors.message.message : null}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          py: 1.5,
        }}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
