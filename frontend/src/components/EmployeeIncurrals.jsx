import React, { useState } from "react";
import { Box, Typography, Card, CardContent, TextField, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EmployeeIncurrals = () => {
  const [expandedRow, setExpandedRow] = useState(null); // State to handle which row is expanded

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index); // Toggle the expanded row
  };

  const data = [
    { month: "Jan", salary: "$2,000", creditedOn: "2025-01-25" },
    { month: "Dec", salary: "$12,000", creditedOn: "2025-01-25" },
    { month: "Nov", salary: "$12,000", creditedOn: "2025-01-25" },
    { month: "Oct", salary: "$12,000", creditedOn: "2025-01-25" },
    { month: "Sept", salary: "$12,000", creditedOn: "2025-01-25" },
    { month: "Aug", salary: "$12,000", creditedOn: "2025-01-25" },
  ];

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
          Financial Record
        </Typography>
        <img
          src="/assets/profile-icon.png"
          alt="Profile"
          style={{ width: "30px", height: "30px" }}
        />
      </Box>

      {/* Financial Record */}
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
            label="Search for a month"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "10px" }}
          />
          {data.map((row, index) => (
            <Box key={index} sx={{ marginBottom: "10px" }}>
              <Box
                onClick={() => handleRowClick(index)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: expandedRow === index ? "#FF7043" : "#fff",
                  color: expandedRow === index ? "#fff" : "#000",
                  boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
              >
                <Typography>{row.month}</Typography>
                <Typography>{row.salary}</Typography>
                <Typography>{row.creditedOn}</Typography>
                <IconButton
                  sx={{
                    transform: expandedRow === index ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.2s",
                  }}
                >
                  <ExpandMoreIcon sx={{ color: expandedRow === index ? "#fff" : "#FF7043" }} />
                </IconButton>
              </Box>
              <Collapse in={expandedRow === index}>
                <Box
                  sx={{
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#f5f5f5",
                    marginTop: "5px",
                    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <Typography>emp id: 11111</Typography>
                  <Typography>payment: {row.salary}</Typography>
                  <Typography>last paid: 2025-01-05</Typography>
                  <Typography>due on: {row.creditedOn}</Typography>
                </Box>
              </Collapse>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeeIncurrals;
