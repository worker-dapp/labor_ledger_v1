import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";

const ManageDispute = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State to track which menu is open
  const [currentRow, setCurrentRow] = useState(null); // Track current row for menu actions
  const isMenuOpen = Boolean(anchorEl);

  const disputes = [
    { id: "11111", issue: "It is a long established fact that a reader will." },
    { id: "11112", issue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: "11113", issue: "Pellentesque facilisis nisl nec faucibus interdum." },
  ];

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setCurrentRow(id); // Track which row's menu is open
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentRow(null);
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
          Manage Dispute
        </Typography>
        <IconButton>
          <img
            src="/assets/profile-icon.png"
            alt="Profile"
            style={{ width: "30px", height: "30px" }}
          />
        </IconButton>
      </Box>

      {/* Dispute Table */}
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
                  <TableCell>Issue</TableCell>
                  <TableCell>Manual Trigger</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {disputes.map((dispute) => (
                  <TableRow key={dispute.id} hover sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}>
                    <TableCell>{dispute.id}</TableCell>
                    <TableCell>{dispute.issue}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={(event) => handleMenuOpen(event, dispute.id)} // Open the menu
                        sx={{
                          backgroundColor: "#4CAF50",
                          color: "#fff",
                          "&:hover": { backgroundColor: "#45A049" },
                        }}
                      >
                        Action
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={isMenuOpen && currentRow === dispute.id} // Check if the menu is open for the current row
                        onClose={handleMenuClose}
                        PaperProps={{
                          style: {
                            maxHeight: 150,
                            width: "200px",
                          },
                        }}
                      >
                        <MenuItem onClick={handleMenuClose}>Resolve</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Escalate</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Dismiss</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ManageDispute;
