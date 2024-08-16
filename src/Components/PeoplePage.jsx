import React from "react";
import Card from "./Card";
import AttendanceChart from "../Charts/AttendanceChart";

const PeoplePage = () => {
  const data = [
    { id: 1, name: "All Employees", count: 120 },
    { id: 2, name: "Male Employees", count: 70 },
    { id: 3, name: "Female Employees", count: 50 },
    { id: 4, name: "Present Employees", count: 100 },
    { id: 5, name: "On Leave", count: 5 },
    { id: 6, name: "On Half Day Leave", count: 15 },
  ];

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 mb-3">
        {data.map((item) => (
          <Card key={item.id} card={{ name: item.name, data: item.count }} />
        ))}
      </div>
      <div className=" bg-gray-300 rounded-lg grid grid-cols-1 dark:bg-white">
        <AttendanceChart />
      </div>
    </div>
  );
};

export default PeoplePage;
