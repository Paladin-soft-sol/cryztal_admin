import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts";

function RoutePage() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default RoutePage;
