import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SelectRole = () => {
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

      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Please Select Your Role
      </Typography>

      {/* Role Options */}
      <Grid container spacing={4} justifyContent="center">
        {/* Management Role */}
        <Grid item>
          <Button
            variant="contained"
            onClick={() => navigate("/management-form")}
            sx={{
              width: "150px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF7043",
              "&:hover": { backgroundColor: "#FF5722" },
              borderRadius: "20px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              component="img"
              src="/assets/management.png"
              alt="Management"
              sx={{ width: "70px", height: "70px", marginBottom: "10px" }}
            />
            <Typography variant="body1" sx={{ color: "#fff", fontWeight: "bold" }}>
              Management
            </Typography>
          </Button>
        </Grid>

        {/* Employee Role */}
        <Grid item>
          <Button
            variant="contained"
            onClick={() => navigate("/employee-form")}
            sx={{
              width: "150px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF7043",
              "&:hover": { backgroundColor: "#FF5722" },
              borderRadius: "20px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              component="img"
              src="/assets/employee.png"
              alt="Employee"
              sx={{ width: "70px", height: "70px", marginBottom: "10px" }}
            />
            <Typography variant="body1" sx={{ color: "#fff", fontWeight: "bold" }}>
              Employee
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SelectRole;
