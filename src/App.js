import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import SelectRole from "./components/SelectRole";
import ManagementForm from "./components/ManagementForm";
import ManagementVerification from "./components/ManagementVerification";
import EmailLogin from "./components/EmailLogin";
import ViewEmployeeData from "./components/ViewEmployeeData";
import EmployeePayment from "./components/EmployeePayment";
import ManageDispute from "./components/ManageDispute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/management-form" element={<ManagementForm />} />
        <Route path="/management-verification" element={<ManagementVerification />} />
        <Route path="/email-login" element={<EmailLogin />} />
        <Route path="/view-employee-data" element={<ViewEmployeeData />} /> 
        <Route path="/employee-payment" element={<EmployeePayment />} />
        <Route path="/manage-dispute" element={<ManageDispute />} />
      </Routes>
    </Router>
  );
};

export default App;
