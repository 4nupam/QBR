import React from "react";
import Card from "./Card";
import AttendanceChart from "../Charts/AttendanceChart";
import CompleteTask from "../Charts/CompleteTask";
import PerformanceChart from "../Charts/PerformanceChart";
import ChartSlider from "./ChartSlider";

const Dashboard = () => {
  return (
    <div className="container flex flex-col gap-2 justify-start h-full">
      <div className="dashboard w-full">
        {/* Card Section */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2">
          <Card card={{ name: "Sales", data: "$36k" }} />
          <Card card={{ name: "Attendance", data: "85%" }} />
          <Card card={{ name: "Production Volume", data: "10.423" }} />
          <Card card={{ name: "Production Cost", data: "$104.23" }} />
          <Card card={{ name: "Waste", data: "$30.3" }} />
        </div>
      </div>
<div className="w-full mx-auto p-4">

     <ChartSlider />
</div>
    </div>
  );
};

export default Dashboard;
