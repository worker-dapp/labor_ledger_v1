import React, { useState } from "react";
import { Box, Typography, Switch, Card, CardContent, TextField } from "@mui/material";

const EmployeeSchedule = () => {
  const [inOutToggle, setInOutToggle] = useState(true); // State to handle toggle switch

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "600px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          emp id : 11111
        </Typography>
        <img
          src="/assets/profile-icon.png"
          alt="Profile"
          style={{ width: "30px", height: "30px" }}
        />
      </Box>

      {/* Schedule of the Week */}
      <Card
        sx={{
          width: "100%",
          maxWidth: "600px",
          marginBottom: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{ color: "#FF7043", fontWeight: "bold", marginBottom: "10px" }}
          >
            Schedule of the Week
          </Typography>
          <TextField
            label="Search for a day"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "10px" }}
          />
          <Typography>Weekly schedule data table goes here...</Typography>
        </CardContent>
      </Card>

      {/* Clock IN/OUT */}
      <Card
        sx={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "15px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#FF7043", fontWeight: "bold" }}
            >
              clock in/out
            </Typography>
            <Switch
              checked={inOutToggle}
              onChange={() => setInOutToggle(!inOutToggle)}
              color="default"
            />
          </Box>
          <Typography>
            {inOutToggle ? "IN schedule data table goes here..." : "OUT schedule data table goes here..."}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeeSchedule;
