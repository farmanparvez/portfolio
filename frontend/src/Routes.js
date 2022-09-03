import React, { Fragment } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";

const CssRoutes = () => {
  return (
    <Fragment>
      <Dashboard>
        <Routes>
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="adminskills" element={<Skills />} />
          <Route path="education" element={<Education />} />
        </Routes>
      </Dashboard>
    </Fragment>
  );
};

export default CssRoutes;
