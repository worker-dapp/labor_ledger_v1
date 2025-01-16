import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Collapse,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          View All Employees
        </Typography>
        <IconButton>
          <img
            src="/assets/profile-icon.png"
            alt="Profile"
            style={{ width: "30px", height: "30px" }}
          />
        </IconButton>
      </Box>

      {/* Employee Table */}
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
            sx={{ marginBottom: "10px" }}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Emp ID</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell>Due On</TableCell>
                  <TableCell>Manual Trigger</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <React.Fragment key={employee.id}>
                    <TableRow
                      hover
                      onClick={() => handleRowClick(employee.id)}
                      sx={{
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#f5f5f5" },
                      }}
                    >
                      <TableCell>{employee.id}</TableCell>
                      <TableCell>{employee.salary}</TableCell>
                      <TableCell>{employee.due}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4CAF50",
                            color: "#fff",
                            "&:hover": { backgroundColor: "#45A049" },
                          }}
                        >
                          Trigger
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={4} sx={{ padding: 0, border: 0 }}>
                        <Collapse in={expandedRow === employee.id}>
                          <Box
                            sx={{
                              padding: "10px 20px",
                              backgroundColor: "#f9f9f9",
                              borderTop: "1px solid #ddd",
                            }}
                          >
                            <Typography>Emp ID: {employee.id}</Typography>
                            <Typography>Payment: {employee.salary}</Typography>
                            <Typography>Last Paid: {employee.lastPaid}</Typography>
                            <Typography>Due On: {employee.due}</Typography>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeePayment;
