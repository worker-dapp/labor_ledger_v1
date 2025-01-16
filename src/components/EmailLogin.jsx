import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EmailLogin = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Login
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          gap: "20px",
        }}
      >
        <TextField
          label="Email ID"
          variant="outlined"
          fullWidth
          defaultValue="xxxxxxxx@abc.com"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField label="Verification Code" variant="outlined" fullWidth />
        <Button
          variant="contained"
          onClick={() => navigate("/view-employee-data")}
          sx={{
            backgroundColor: "#FF7043",
            "&:hover": { backgroundColor: "#FF5722" },
            color: "#fff",
            fontWeight: "bold",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "25px",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default EmailLogin;
