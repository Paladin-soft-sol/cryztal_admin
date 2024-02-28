import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts";

function RoutePage() {
  return (
    <Router basename="/crystal-webadmin">
      <Layout />
    </Router>
  );
}

export default RoutePage;
