import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Header from "./common/Header";
import Sidebar from "./common/Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex-1">
          <Header toggleSidebar={toggleSidebar} />
          <div className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
            <Outlet />
          </div>
        </div>

        {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={toggleSidebar}></div>}
      </div>
    </>
  );
};

export default Dashboard;
