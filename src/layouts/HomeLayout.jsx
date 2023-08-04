/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useOutlet } from "react-router-dom";

export function HomeLayout({ redirectPath = "/", children }) {
  const Outlet = useOutlet();

  return <div> {children || <Outlet />}</div>;
}
