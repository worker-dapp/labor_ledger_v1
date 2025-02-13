import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  IconButton,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const WorkerOnboardingForm = () => {
  const [workerType, setWorkerType] = useState("Custom Payment");
  const [paymentFrequency, setPaymentFrequency] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [signers, setSigners] = useState([{ name: "", walletAddress: "" }]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [openModal, setOpenModal] = useState(false); // Modal open state

  const [workerData, setWorkerData] = useState({
    contractTitle: "Worker Agreement",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    walletAddress: "",
    location: "",
    paymentRate: "",
    milestones: [{ milestone: "", amount: "" }],
  });

  const steps = ["General Info", "Payment Details", "Finalize Contract"];

  const handleWorkerTypeChange = (event, newType) => {
    if (newType !== null) setWorkerType(newType);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkerData({ ...workerData, [name]: value });
  };

  const handleMilestoneChange = (index, field, value) => {
    const updatedMilestones = [...workerData.milestones];
    updatedMilestones[index][field] = value;
    setWorkerData({ ...workerData, milestones: updatedMilestones });
  };

  const addMilestone = () => {
    setWorkerData({
      ...workerData,
      milestones: [...workerData.milestones, { milestone: "", amount: "" }],
    });
  };

  const addSigner = () => {
    setSigners([...signers, { name: "", walletAddress: "" }]);
  };

  const handleSignerChange = (index, field, value) => {
    const updatedSigners = [...signers];
    updatedSigners[index][field] = value;
    setSigners(updatedSigners);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Open modal when checkbox is clicked
  const handleCheckboxClick = (e) => {
    e.preventDefault(); // Prevent the checkbox from toggling automatically
    setOpenModal(true);
  };

  // Accept T&C => close modal & check the box
  const handleAccept = () => {
    setAcceptedTerms(true);
    setOpenModal(false);
  };

  // Decline T&C => close modal & do NOT check the box
  const handleDecline = () => {
    setOpenModal(false);
  };

  const handleSubmit = () => {
    // You can implement your form submission logic here
    console.log("Form submitted with data:", workerData, "Signers:", signers);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "30px",
          width: "100%",
          maxWidth: "900px",
          borderRadius: "15px",
          backgroundColor: "#fff",
          boxShadow: "0px 6px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}>
          Create Contract
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 3 }}>
          Create the contract terms with this guided process
        </Typography>

        {/* Stepper Progress */}
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step 1: General Info */}
        {activeStep === 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Step 1: General Info
            </Typography>

            <TextField
              label="Contract Title"
              name="contractTitle"
              fullWidth
              sx={{ mb: 2 }}
              value={workerData.contractTitle}
              onChange={handleChange}
            />

            {/* Worker Type Selection */}
            <Typography sx={{ mb: 1 }}>Worker Type</Typography>
            <ToggleButtonGroup
              value={workerType}
              exclusive
              onChange={handleWorkerTypeChange}
              fullWidth
              sx={{
                mb: 3,
                "& .MuiToggleButton-root": {
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: "bold",
                },
                "& .Mui-selected": {
                  backgroundColor: "#FF7043",
                  color: "#fff",
                },
              }}
            >
              <ToggleButton value="Custom Payment">Custom Payment</ToggleButton>
              <ToggleButton value="Time Based">Time Based</ToggleButton>
              <ToggleButton value="Piece Rate Payment">Piece Rate Payment</ToggleButton>
              <ToggleButton value="Milestone">Milestone</ToggleButton>
            </ToggleButtonGroup>

            {/* Worker Information */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField label="First Name" name="firstName" fullWidth value={workerData.firstName} onChange={handleChange} />
              <TextField label="Last Name" name="lastName" fullWidth value={workerData.lastName} onChange={handleChange} />
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <TextField label="Email" name="email" fullWidth value={workerData.email} onChange={handleChange} />
              <TextField label="Phone Number" name="phone" fullWidth value={workerData.phone} onChange={handleChange} />
            </Box>

            <TextField label="Wallet Address" name="walletAddress" fullWidth sx={{ mt: 2 }} value={workerData.walletAddress} onChange={handleChange} />

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
              <Button disabled>Back</Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FF7043", "&:hover": { backgroundColor: "#FF5722" }, borderRadius: "10px" }}
                onClick={handleNext}
              >
                Next
              </Button>
            </Box>
          </Box>
        )}

        {/* Step 2: Payment Details */}
        {activeStep === 1 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Step 2: Payment Details
            </Typography>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Payment Frequency</InputLabel>
              <Select value={paymentFrequency} onChange={(e) => setPaymentFrequency(e.target.value)}>
                <MenuItem value="Hourly">Hourly</MenuItem>
                <MenuItem value="Daily">Daily</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
              </Select>
            </FormControl>

            {workerType === "Milestone" ? (
              <>
                {workerData.milestones.map((milestone, index) => (
                  <Box key={index} sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <TextField
                      label="Milestone Name"
                      fullWidth
                      value={milestone.milestone}
                      onChange={(e) => handleMilestoneChange(index, "milestone", e.target.value)}
                    />
                    <TextField
                      label="Amount"
                      fullWidth
                      value={milestone.amount}
                      onChange={(e) => handleMilestoneChange(index, "amount", e.target.value)}
                    />
                  </Box>
                ))}
                <Button variant="outlined" onClick={addMilestone} sx={{ mt: 1 }}>
                  Add Milestone
                </Button>
              </>
            ) : (
              <TextField
                label="Payment Rate"
                name="paymentRate"
                fullWidth
                sx={{ mb: 2 }}
                value={workerData.paymentRate}
                onChange={handleChange}
              />
            )}

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
              <Button onClick={handleBack}>Back</Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FF7043", "&:hover": { backgroundColor: "#FF5722" }, borderRadius: "10px" }}
                onClick={handleNext}
              >
                Next
              </Button>
            </Box>
          </Box>
        )}

        {/* Step 3: Multi-Signature Contract */}
        {activeStep === 2 && (
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Add Signers
            </Typography>
            {signers.map((signer, index) => (
              <Box key={index} sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField
                  label="Full Name"
                  fullWidth
                  value={signer.name}
                  onChange={(e) => handleSignerChange(index, "name", e.target.value)}
                />
                <TextField
                  label="Wallet Address"
                  fullWidth
                  value={signer.walletAddress}
                  onChange={(e) => handleSignerChange(index, "walletAddress", e.target.value)}
                />
              </Box>
            ))}
            <Button startIcon={<AddCircleOutlineIcon />} onClick={addSigner}>
              Add Signer
            </Button>

            {/* New Title */}
            <Typography variant="h6" sx={{ mt: 4 }}>
              this is an agreement betweeen the employer and the employee
            </Typography>

            {/* "I agree to terms and conditions" Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptedTerms}
                  onClick={handleCheckboxClick} // open modal on click
                  name="agreeToTerms"
                  color="primary"
                />
              }
              label="I agree to terms and conditions"
              sx={{ mt: 2 }}
            />

            {/* Submit Button (moved below checkbox and full width) */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF7043",
                "&:hover": { backgroundColor: "#FF5722" },
                borderRadius: "10px",
                mt: 2,
              }}
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        )}

        {/* Modal for Terms and Conditions */}
        <Dialog open={openModal} onClose={handleDecline}>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogContent>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis nunc vel ex
              commodo, sed aliquet erat vehicula. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDecline}>Decline</Button>
            <Button onClick={handleAccept}>Accept</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default WorkerOnboardingForm;
