import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import SelectRole from "./components/SelectRole";
import ManagementForm from "./components/ManagementForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/management-form" element={<ManagementForm />} />
      </Routes>
    </Router>
  );
};

export default App;
