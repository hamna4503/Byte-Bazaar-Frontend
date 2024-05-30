import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatsCard from "../../components/StatsCard/StatsCard";

export default function AdminHome() {
  return (
    <>
      <div className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased text-black bg-white">
        <StatsCard />
        <Sidebar />
      </div>
    </>
  );
}
