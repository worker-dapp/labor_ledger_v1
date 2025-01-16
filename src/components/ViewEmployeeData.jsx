import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Collapse,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ViewEmployeeData = () => {
  const [expandEmployees, setExpandEmployees] = useState(false);
  const [expandSchedule, setExpandSchedule] = useState(false);

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
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
        <IconButton>
          <img
            src="/assets/profile-icon.png"
            alt="Profile"
            style={{ width: "30px", height: "30px" }}
          />
        </IconButton>
      </Box>

      {/* View All Employees */}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "#FF7043", fontWeight: "bold" }}>
              View All Employees
            </Typography>
            <Button
              onClick={() => setExpandEmployees(!expandEmployees)}
              endIcon={<ExpandMoreIcon />}
              sx={{
                textTransform: "none",
                color: "#FF7043",
                fontWeight: "bold",
              }}
            >
              {expandEmployees ? "Collapse" : "Expand"}
            </Button>
          </Box>
          <Collapse in={expandEmployees}>
            <Box sx={{ marginTop: "20px" }}>
              <TextField
                label="Search for an employee"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: "10px" }}
              />
              <Typography>Employee data table goes here...</Typography>
            </Box>
          </Collapse>
        </CardContent>
      </Card>

      {/* View Schedule */}
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
            }}
          >
            <Typography variant="h6" sx={{ color: "#FF7043", fontWeight: "bold" }}>
              View Schedule
            </Typography>
            <Button
              onClick={() => setExpandSchedule(!expandSchedule)}
              endIcon={<ExpandMoreIcon />}
              sx={{
                textTransform: "none",
                color: "#FF7043",
                fontWeight: "bold",
              }}
            >
              {expandSchedule ? "Collapse" : "Expand"}
            </Button>
          </Box>
          <Collapse in={expandSchedule}>
            <Box sx={{ marginTop: "20px" }}>
              <TextField
                label="Search for a schedule"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: "10px" }}
              />
              <Typography>Schedule data table goes here...</Typography>
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViewEmployeeData;
