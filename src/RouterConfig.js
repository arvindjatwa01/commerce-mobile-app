import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RouterConfig = () => {
  return (
    <>
      <div id="main-wrapper" className="show">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />}>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default RouterConfig;
