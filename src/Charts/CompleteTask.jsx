import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CompleteTask = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const storedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setTasks(storedTasks);
    setCompletedTasks(storedCompletedTasks);
  }, []);

  const totalTaskCount = tasks.length + completedTasks.length;
  const completedTaskCount = completedTasks.length;
  const incompleteTaskCount = totalTaskCount - completedTaskCount;

  const data = {
    labels: ['Completed Tasks', 'Incomplete Tasks'],
    datasets: [
      {
        data: [completedTaskCount, incompleteTaskCount],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Task Completion Overview',
      },
    },
  };

  return (
    <div className="w-full h-full p-4 max-w-md mx-auto">
      <div className="w-full h-[300px] lg:h-[400px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default CompleteTask;
