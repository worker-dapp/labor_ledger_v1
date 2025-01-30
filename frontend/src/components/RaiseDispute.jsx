import React, { useState } from "react";
import { Box, Typography, Card, CardContent, TextField, Collapse, Button, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RaiseDispute = () => {
  const [expandedRow, setExpandedRow] = useState(null); // State to track which row is expanded

  const handleActionClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index); // Toggle the expanded row
  };

  const data = [
    { id: "11111", issue: "It is a long established fact that a reader will." },
    { id: "11112", issue: "It is a long established fact that a reader will." },
    { id: "11113", issue: "It is a long established fact that a reader will." },
    { id: "11114", issue: "It is a long established fact that a reader will." },
    { id: "11115", issue: "It is a long established fact that a reader will." },
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
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF7043" }}>
          Raise Dispute
        </Typography>
        <img
          src="/assets/profile-icon.png"
          alt="Profile"
          style={{ width: "30px", height: "30px" }}
        />
      </Box>

      {/* Dispute Card */}
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
            label="Search for older dispute"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "10px" }}
          />
          {data.map((row, index) => (
            <Box key={index} sx={{ marginBottom: "10px" }}>
              <Box
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
                <Typography>{row.id}</Typography>
                <Typography>{row.issue}</Typography>
                <Button
                  onClick={() => handleActionClick(index)}
                  sx={{
                    textTransform: "none",
                    color: expandedRow === index ? "#fff" : "#FF7043",
                    fontWeight: "bold",
                  }}
                >
                  Action
                  <ExpandMoreIcon
                    sx={{
                      marginLeft: "5px",
                      transform: expandedRow === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  />
                </Button>
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
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF7043",
                      "&:hover": { backgroundColor: "#FF5722" },
                      color: "#fff",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      width: "100%",
                    }}
                  >
                    Option 1
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF7043",
                      "&:hover": { backgroundColor: "#FF5722" },
                      color: "#fff",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      width: "100%",
                    }}
                  >
                    Option 2
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF7043",
                      "&:hover": { backgroundColor: "#FF5722" },
                      color: "#fff",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                  >
                    Option 3
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

export default RaiseDispute;
