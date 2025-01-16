import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Link } from "@mui/material";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Box
        component="img"
        src="/assets/landing.png"
        alt="AquaTrust Logo"
        sx={{ width: "150px", height: "150px", marginBottom: "20px" }}
      />
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        Welcome to AquaTrust!
      </Typography>
      <Typography variant="body1" sx={{ color: "gray", marginBottom: "30px" }}>
        Please Register or Sign in to continue
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF7043",
          color: "#fff",
          fontSize: "16px",
          padding: "10px 30px",
          borderRadius: "20px",
          marginBottom: "15px",
          "&:hover": { backgroundColor: "#FF5722" },
        }}
        onClick={() => navigate("/select-role")}
      >
        Register
      </Button>
      <Link href="#" underline="hover" sx={{ color: "gray", fontSize: "14px" }}>
        Skip to Login
      </Link>
    </Box>
  );
};

export default WelcomeScreen;
