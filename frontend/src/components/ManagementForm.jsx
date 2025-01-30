import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ManagementForm = () => {
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
        Management Registration
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
        <TextField label="Username" variant="outlined" fullWidth />
        <TextField label="Ship ID" variant="outlined" fullWidth />
        <TextField label="Email ID" variant="outlined" fullWidth />
        <TextField label="Password" type="password" variant="outlined" fullWidth />
        <TextField label="Retype Password" type="password" variant="outlined" fullWidth />
        <Button
          variant="contained"
          onClick={() => navigate("/management-verification")} 
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
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default ManagementForm;
