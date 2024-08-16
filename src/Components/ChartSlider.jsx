import React from 'react';
import Slider from 'react-slick';
import CompleteTask from '../Charts/CompleteTask';
import AttendanceChart from '../Charts/AttendanceChart';
import PerformanceChart from '../Charts/PerformanceChart';

const ChartPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full m-auto ">
      <Slider {...settings} className=''>
     
        <div className="flex flex-col p-4 bg-slate-200 dark:bg-white shadow rounded">
          <span className="text-lg font-semibold mb-2">Attendance Chart</span>
          <AttendanceChart />
        </div>
        <div className="flex flex-col p-4 bg-slate-200 dark:bg-white shadow rounded ">
          <span className="text-lg font-semibold mb-2 ">Performance Chart</span>
          <PerformanceChart />
        </div>
      </Slider>
    </div>
  );
};

export default ChartPage;
