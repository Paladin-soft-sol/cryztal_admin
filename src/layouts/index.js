import React, { useEffect } from "react";
import { Route, Routes, redirect, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../pages/Dashboard/Dashboard";
import Approval from "../pages/Approval";
import Login from "../pages/Login/Login";
import Reports from "../pages/Reports";

import ReportView from "../pages/Reports/Report";
import Ad from "../pages/AdMaster";

import Customer from "../pages/customer";
import CustomerView from "../pages/customer/userViewModal";
import AdView from "../pages/AdMaster/adViewModal";
import Partner from "../pages/Partner/Partner";
import Registration from "../pages/Partner/RegisterForm";
import ApprovalView from "../pages/Approval/Model/Model";
import ProtectedLayout from "./ProtectedRoute";

import NotFoundError from "../pages/NotFoundError";
import MasterScreen from "../pages/Master";
import DealEditForm from "../pages/Approval/DealEditForm";



/**
 *
 * @returns
 */
function Layout() {
  const navigate = useNavigate();
 

  const loginAdmin = useSelector((state) => state?.login?.login);

 

  useEffect(() => {
    if (loginAdmin?.data?.data?.token.length) {
      localStorage.setItem("LoginChecker", loginAdmin?.data?.data?.token);
    }
  }, [loginAdmin]);

  return (
    <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="cryztal" element={<ProtectedLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="master" element={<MasterScreen />} />
        <Route path="approval" element={<Approval />} />
        <Route path="Reports" element={<Reports />} />
       
        <Route path="AdMaster" element={<Ad />} />
        <Route
          path="/cryztal/AdMaster/AdView"
          element={<AdView />}
        />
         <Route path="customer" element={<Customer />} />
        <Route
          path="/cryztal/customer/CustomerView"
          element={<CustomerView />}
        />
        
        
        <Route path="Partner" element={<Partner />} />
        <Route path="/cryztal/Partner/Register" element={<Registration />} />
        <Route
          path="/cryztal/approval/approvalView"
          element={<ApprovalView />}
        />
        <Route
          path="/cryztal/approval/dealeditform"
          element={<DealEditForm />}
        />
      </Route>
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
}

export default Layout;
