/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { CustomAppBar, Navbar, Footer } from "../components/index";
import CustomIcons from "../utils/icon/index";
import CustomImages from "../utils/images/index";

function ProtectedRoute({ redirectPath = "/", children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("LoginChecker");

  const navList = [
    {
      id: 1,
      name: "Dashboard",
      icon: CustomIcons.Dashboard,
      nav: "/cryztal/dashboard",
    },
    {
      id: 2,
      name: "Master",
      icon: CustomIcons.Master,
      nav: "/cryztal/master",
    },
    {
      id: 3,
      name: "Partner",
      icon: CustomIcons.Partner,
      nav: "/cryztal/Partner",
    },
    {
      id: 4,
      name: "Deals",
      icon: CustomIcons.Approval,
      nav: "/cryztal/approval",
    },
    {
      id: 5,
      name: "Customer",
      icon: CustomIcons.Customer,
      nav: "/cryztal/customer",
    },
    {
      id: 6,
      name: "Reports",
      icon: CustomIcons.Report,
      nav: "/cryztal/Reports",
    },
  ];

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Grid container item md={12}>
      <Grid container item md={12} height="5vh">
        <CustomAppBar
          // menuItemList={menuItemList}
          // batch={3}
          logoImage={CustomImages.CryztalLogo}
          // menuIcon={CustomIcons.Menu}
          logout={() => {
            window.localStorage.clear();
            window.location.reload();

            navigate("/");
          }}
          logoutIcon={CustomIcons.Logout}
        />
      </Grid>
      <Grid container item md={12} height="92vh" overflow="auto">
        <Grid item md={1} sm={2} sx={{ fontFamily: "Roboto" }}>
          <Navbar navList={navList} />
        </Grid>
        <Grid item md={11} sm={10} height="100%" p={2}>
          {/* <p>{token}</p> */}
          {children || <Outlet />}
        </Grid>
      </Grid>
      <Grid
        container
        item
        md={12}
        height="3vh"
        display="flex"
        justifyContent="center"
      >
        <Footer />
      </Grid>
    </Grid>
  );
}
export default ProtectedRoute;
