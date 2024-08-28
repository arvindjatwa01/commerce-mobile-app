import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomeScreen from "./components/HomeScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<HomeScreen />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
