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
  Collapse
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FilterListIcon from "@mui/icons-material/FilterList";
import { supabase } from "../supabaseClient";

const EmployerJobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: "", type: [], schedule: [] });
  const [openApplicantsModal, setOpenApplicantsModal] = useState(false);
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [openPostJobModal, setOpenPostJobModal] = useState(false);
  const [filterExpanded, setFilterExpanded] = useState(true);
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

  // Handle filtering
  const handleFilterChange = (e, category) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], name]
        : prev[category].filter((item) => item !== name),
    }));
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesTitle = filters.title
      ? job.title.toLowerCase().includes(filters.title.toLowerCase())
      : true;
    const matchesType = filters.type.length > 0 ? filters.type.includes(job.type) : true;
    const matchesSchedule = filters.schedule.length > 0
      ? filters.schedule.includes(job.schedule)
      : true;
    return matchesTitle && matchesType && matchesSchedule;
  });

  // Handle posting a new job
  const handleAddJob = async () => {
    if (!newJob.title || !newJob.type || !newJob.schedule || !newJob.manager) {
      alert("Please fill in all required fields.");
      return;
    }

    const { data, error } = await supabase.from("jobs").insert([newJob]);

    if (error) {
      console.error("Error posting job:", error);
    } else {
      setJobs((prev) => [...prev, newJob]);
      setOpenPostJobModal(false);
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
    }
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
      {/* Filters Section (Collapsible) */}
      <Box
        sx={{
          width: "250px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Filters
          </Typography>
          <IconButton onClick={() => setFilterExpanded(!filterExpanded)}>
            <FilterListIcon />
          </IconButton>
        </Box>
        <Collapse in={filterExpanded}>
          <TextField
            label="Search Job Title"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "20px" }}
            value={filters.title}
            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          />
          {/* Job Type */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
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
        </Collapse>
      </Box>

      {/* Job Listings + Post a New Job */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
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
              <Card sx={{ borderRadius: "15px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                    {job.title}
                  </Typography>
                  <Typography><strong>Description:</strong> {job.description}</Typography>
                  <Typography><strong>Manager:</strong> {job.manager}</Typography>
                  <Typography><strong>Applicants:</strong> {job.applicants.length}</Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleViewApplicants(job.applicants)}
                    sx={{ backgroundColor: "#FF7043", "&:hover": { backgroundColor: "#FF5722" }, borderRadius: "25px" }}
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

      {/* View Applicants Modal */}
      <Modal open={openApplicantsModal} onClose={() => setOpenApplicantsModal(false)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, bgcolor: "background.paper", boxShadow: 24, p: 4, borderRadius: "15px" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Applicants</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Contact</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedApplicants.map((applicant, index) => (
                  <TableRow key={index}>
                    <TableCell>{applicant.name}</TableCell>
                    <TableCell>{applicant.email}</TableCell>
                    <TableCell>{applicant.contact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </Box>
  );
};

export default EmployerJobPortal;
