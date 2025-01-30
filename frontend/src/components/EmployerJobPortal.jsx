import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Drawer
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FilterListIcon from "@mui/icons-material/FilterList";
import { supabase } from "../supabaseClient";

const EmployerJobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: "", type: [], schedule: [] });

  // Drawer state
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);

  const [openApplicantsModal, setOpenApplicantsModal] = useState(false);
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [openPostJobModal, setOpenPostJobModal] = useState(false);

  // New job form data
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    type: "",
    schedule: "",
    manager: "",
    location: "",
    salary: "",
    applicants: [],
  });

  // Fetch jobs from Supabase
  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from("jobs").select("*");
      if (error) {
        console.error("Error fetching jobs:", error);
      } else {
        setJobs(data);
      }
    };
    fetchJobs();
  }, []);

  // Handle filtering changes
  const handleFilterChange = (e, category) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], name]
        : prev[category].filter((item) => item !== name),
    }));
  };

  // Filter jobs based on filters
  const filteredJobs = jobs.filter((job) => {
    const matchesTitle = filters.title
      ? job.title.toLowerCase().includes(filters.title.toLowerCase())
      : true;
    const matchesType =
      filters.type.length > 0 ? filters.type.includes(job.type) : true;
    const matchesSchedule =
      filters.schedule.length > 0
        ? filters.schedule.includes(job.schedule)
        : true;

    return matchesTitle && matchesType && matchesSchedule;
  });

  // Handle posting a new job
  const handleAddJob = async () => {
    // Basic validation
    if (
      !newJob.title ||
      !newJob.type ||
      !newJob.schedule ||
      !newJob.manager ||
      !newJob.location ||
      !newJob.salary
    ) {
      alert("Please fill in all required fields (title, type, schedule, manager, location, salary).");
      return;
    }

    // Insert with `.select()` so data isn't null
    const { data, error } = await supabase
      .from("jobs")
      .insert([newJob])
      .select();

    if (error) {
      console.error("Error posting job:", error);
      return;
    }

    if (!data || data.length === 0) {
      console.error("No data returned after insert.");
      return;
    }

    // Add the new job to the UI
    setJobs((prev) => [...prev, data[0]]);

    // Reset form and close modal
    setNewJob({
      title: "",
      description: "",
      type: "",
      schedule: "",
      manager: "",
      location: "",
      salary: "",
      applicants: [],
    });
    setOpenPostJobModal(false);
  };

  // Handle viewing applicants
  const handleViewApplicants = (applicants) => {
    setSelectedApplicants(applicants);
    setOpenApplicantsModal(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        gap: "20px",
      }}
    >
      {/* Icon/button to open Filter Drawer */}
      <Box sx={{ position: "absolute", left: 20, top: 20 }}>
        <IconButton
          onClick={() => setOpenFilterDrawer(true)}
          sx={{ backgroundColor: "#fff", boxShadow: 1 }}
        >
          <FilterListIcon sx={{ color: "#FF7043" }} />
        </IconButton>
      </Box>

      {/* Filter Drawer (slides in from left) */}
      <Drawer
        anchor="left"
        open={openFilterDrawer}
        onClose={() => setOpenFilterDrawer(false)}
      >
        <Box
          sx={{
            width: 250,
            padding: "20px",
            backgroundColor: "#fff",
            height: "100%",
          }}
          role="presentation"
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Filters
          </Typography>

          {/* Search Job Title */}
          <TextField
            label="Search Job Title"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "20px" }}
            value={filters.title}
            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          />

          {/* Job Type */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Job Type
          </Typography>
          <FormGroup>
            {["Full-time", "Part-time", "Contract"].map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    name={type}
                    checked={filters.type.includes(type)}
                    onChange={(e) => handleFilterChange(e, "type")}
                  />
                }
                label={type}
              />
            ))}
          </FormGroup>

          {/* You can add more filters if needed (Schedules, etc.) */}

          <Box textAlign="right" mt={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF7043",
                "&:hover": { backgroundColor: "#FF5722" },
                borderRadius: "25px",
              }}
              onClick={() => setOpenFilterDrawer(false)}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content: Job Listings + Post a New Job Button */}
      <Box sx={{ flex: 1, marginLeft: "80px" }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FF7043" }}>
            Job Dashboard
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpenPostJobModal(true)}
            sx={{
              backgroundColor: "#FF7043",
              "&:hover": { backgroundColor: "#FF5722" },
              borderRadius: "25px",
            }}
          >
            Post a New Job
          </Button>
        </Box>

        <Grid container spacing={3}>
          {filteredJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    {job.title}
                  </Typography>
                  <Typography>
                    <strong>Description:</strong> {job.description}
                  </Typography>
                  <Typography>
                    <strong>Type:</strong> {job.type}
                  </Typography>
                  <Typography>
                    <strong>Schedule:</strong> {job.schedule}
                  </Typography>
                  <Typography>
                    <strong>Manager:</strong> {job.manager}
                  </Typography>
                  <Typography>
                    <strong>Location:</strong> {job.location}
                  </Typography>
                  <Typography>
                    <strong>Salary:</strong> {job.salary}
                  </Typography>
                  <Typography sx={{ marginTop: "10px" }}>
                    <strong>Applicants:</strong> {job.applicants.length}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleViewApplicants(job.applicants)}
                    sx={{
                      backgroundColor: "#FF7043",
                      "&:hover": { backgroundColor: "#FF5722" },
                      borderRadius: "25px",
                      marginTop: "10px",
                    }}
                    startIcon={<VisibilityIcon />}
                  >
                    View Applicants
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Post Job Modal */}
      <Modal open={openPostJobModal} onClose={() => setOpenPostJobModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "15px",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Post a New Job
          </Typography>

          <TextField
            label="Job Title"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          />

          <TextField
            label="Description"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            sx={{ mb: 2 }}
            value={newJob.description}
            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
          />

          {/* Type (Select) */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={newJob.type}
              label="Type"
              onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
            >
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </FormControl>

          {/* Schedule (Select) */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Schedule</InputLabel>
            <Select
              value={newJob.schedule}
              label="Schedule"
              onChange={(e) => setNewJob({ ...newJob, schedule: e.target.value })}
            >
              <MenuItem value="Day Shift">Day Shift</MenuItem>
              <MenuItem value="Night Shift">Night Shift</MenuItem>
              <MenuItem value="Flexible">Flexible</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Manager"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={newJob.manager}
            onChange={(e) => setNewJob({ ...newJob, manager: e.target.value })}
          />

          <TextField
            label="Location"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={newJob.location}
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
          />

          <TextField
            label="Salary"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={newJob.salary}
            onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#FF7043",
              "&:hover": { backgroundColor: "#FF5722" },
              borderRadius: "25px",
            }}
            onClick={handleAddJob}
          >
            Post Job
          </Button>
        </Box>
      </Modal>

      {/* Applicants Modal */}
      <Modal
        open={openApplicantsModal}
        onClose={() => setOpenApplicantsModal(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "15px",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Applicants
          </Typography>
          <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {/* Adjust columns to match your actual applicants structure */}
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedApplicants.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3}>
                      No applicants found.
                    </TableCell>
                  </TableRow>
                ) : (
                  selectedApplicants.map((applicant, index) => (
                    <TableRow key={index}>
                      <TableCell>{applicant.name}</TableCell>
                      <TableCell>{applicant.email}</TableCell>
                      <TableCell>{applicant.phone}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box textAlign="right" marginTop="20px">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF7043",
                "&:hover": { backgroundColor: "#FF5722" },
                borderRadius: "25px",
              }}
              onClick={() => setOpenApplicantsModal(false)}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default EmployerJobPortal;
