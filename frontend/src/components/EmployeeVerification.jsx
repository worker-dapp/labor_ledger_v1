import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmployeeVerification = () => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

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
      {/* Progress Indicator */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        {/* Step 1 */}
        <Box
          sx={{
            width: "30px",
            height: "30px",
            backgroundColor: "#FF5722",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            margin: "0 10px",
          }}
        >
          1
        </Box>

        {/* Arrow */}
        <Box
          sx={{
            fontSize: "18px",
            color: "#FF7043",
          }}
        >
          ➔
        </Box>

        {/* Step 2 */}
        <Box
          sx={{
            width: "30px",
            height: "30px",
            backgroundColor: "#FF5722",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            margin: "0 10px",
          }}
        >
          2
        </Box>

        {/* Arrow */}
        <Box
          sx={{
            fontSize: "18px",
            color: "#FF5722",
          }}
        >
          ➔
        </Box>

        {/* Step 3 */}
        <Box
          sx={{
            width: "30px",
            height: "30px",
            backgroundColor: "#FFE0B2",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FF7043",
            fontWeight: "bold",
            fontSize: "16px",
            margin: "0 10px",
          }}
        >
          3
        </Box>
      </Box>

      {/* Form Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Verification
      </Typography>

      {/* Form Fields */}
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
          label="Phone Number"
          variant="outlined"
          fullWidth
          defaultValue="(123)-111-1111"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField label="Verification Code" variant="outlined" fullWidth />
        <Button
          variant="contained"
          onClick={() => navigate("/mobile-login")} // Navigate to the next screen
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
          Verify
        </Button>
      </Box>
    </Box>
  );
};

export default EmployeeVerification;
