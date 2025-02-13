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
import EmployerJobPortal from "./components/EmployerJobPortal";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeVerification from "./components/EmployeeVerification";
import MobileLogin from "./components/MobileLogin";
import EmployeeSchedule from "./components/EmployeeSchedule";
import EmployeeIncurrals from "./components/EmployeeIncurrals";
import RaiseDispute from "./components/RaiseDispute";
import ViewEmployeeSchedule from "./components/ViewEmployeeSchedule";
import ViewEmployerFinancialRecord from "./components/ViewEmployerFinancialRecord";
import EmployeerRaiseDispute from "./components/EmployeerRaiseDispute";
import LandingPage from "./components/LandingPage";

// worker onboarding form
import WorkerOnboardingForm from "./components/Contract";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<WelcomeScreen />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/management-form" element={<ManagementForm />} />
        <Route path="/management-verification" element={<ManagementVerification />} />
        <Route path="/email-login" element={<EmailLogin />} />
        <Route path="/view-employee-data" element={<ViewEmployeeData />} /> 
        <Route path="/employee-payment" element={<EmployeePayment />} />
        <Route path="/manage-dispute" element={<ManageDispute />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path='/employee-verification' element={<EmployeeVerification />} />
        <Route path='mobile-login' element={<MobileLogin />} />
        <Route path='employee-schedule' element={<EmployeeSchedule />} />
        <Route path='employee-incurrals' element={<EmployeeIncurrals />} />
        <Route path='raise-dispute' element={<RaiseDispute />} />
        <Route path='view-employee-schedule' element={<ViewEmployeeSchedule />} />
        <Route path='view-employer-financial-record' element={<ViewEmployerFinancialRecord />} />
        <Route path='employeer-raise-dispute' element={<EmployeerRaiseDispute />} />
        <Route path="/employer-job-portal" element={<EmployerJobPortal />} />

        // worker onboarding form
        <Route path="/worker-onboarding-form" element={<WorkerOnboardingForm />} />

      </Routes>
    </Router>
  );
};

export default App;
