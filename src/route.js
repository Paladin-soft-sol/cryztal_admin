import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts";

function RoutePage() {
  return (
    <Router basename="/cryztal_testing">
      <Layout />
    </Router>
  );
}

export default RoutePage;
