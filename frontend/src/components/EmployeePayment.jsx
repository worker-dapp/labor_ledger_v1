import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Collapse,
} from "@mui/material";

const EmployeePayment = () => {
  const [expandedRow, setExpandedRow] = useState(null); // Track which row is expanded

  const employees = [
    { id: "11111", salary: "$12,000", due: "2025-01-25", lastPaid: "2025-01-05" },
    { id: "11112", salary: "$10,000", due: "2025-02-15", lastPaid: "2025-01-10" },
    { id: "11113", salary: "$15,000", due: "2025-03-01", lastPaid: "2025-01-15" },
  ];

  const handleRowClick = (id) => {
    setExpandedRow(expandedRow === id ? null : id); // Toggle expansion
  };

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
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FF7043" }}>
          View All Employees
        </Typography>
        <img
          src="/assets/profile-icon.png"
          alt="Profile"
          style={{ width: "30px", height: "30px" }}
        />
      </Box>

      {/* Employee List */}
      <Card
        sx={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "15px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          <TextField
            label="Search for an employee"
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
              },
            }}
          />
          {employees.map((employee) => (
            <Box key={employee.id} sx={{ marginBottom: "10px" }}>
              {/* Employee Row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 15px",
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
                onClick={() => handleRowClick(employee.id)}
              >
                <Typography sx={{ fontWeight: "bold" }}>{employee.id}</Typography>
                <Typography sx={{ fontWeight: "bold", color: "#FF7043" }}>
                  {employee.salary}
                </Typography>
                <Typography>{employee.due}</Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#4CAF50",
                    "&:hover": { backgroundColor: "#45A049" },
                    textTransform: "none",
                    borderRadius: "15px",
                  }}
                >
                  Trigger
                </Button>
              </Box>

              {/* Expanded Details */}
              <Collapse in={expandedRow === employee.id}>
                <Box
                  sx={{
                    marginTop: "10px",
                    padding: "15px",
                    borderRadius: "10px",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <Typography>
                    <strong>Emp ID:</strong> {employee.id}
                  </Typography>
                  <Typography>
                    <strong>Payment:</strong> {employee.salary}
                  </Typography>
                  <Typography>
                    <strong>Last Paid:</strong> {employee.lastPaid}
                  </Typography>
                  <Typography>
                    <strong>Due On:</strong> {employee.due}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF7043",
                      "&:hover": { backgroundColor: "#FF5722" },
                      color: "#fff",
                      fontWeight: "bold",
                      width: "100%",
                      borderRadius: "25px",
                      marginTop: "10px",
                    }}
                  >
                    Trigger
                  </Button>
                </Box>
              </Collapse>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeePayment;
