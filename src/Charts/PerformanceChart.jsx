import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PerformanceChart = () => {
  const teams = [
    {
      "team_id": 1,
      "team_name": "Team Alpha",
      "members": [
        {
          "member_id": 101,
          "name": "Alice",
          "tasks_completed": 30,
          "goals_achieved": 5,
          "sales_made": 10,
          "hours_worked": 160,
          "customer_satisfaction": 4.5
        },
        {
          "member_id": 102,
          "name": "Bob",
          "tasks_completed": 25,
          "goals_achieved": 4,
          "sales_made": 15,
          "hours_worked": 150,
          "customer_satisfaction": 4.8
        }
      ]
    },
    {
      "team_id": 2,
      "team_name": "Team Beta",
      "members": [
        {
          "member_id": 103,
          "name": "Charlie",
          "tasks_completed": 20,
          "goals_achieved": 3,
          "sales_made": 8,
          "hours_worked": 140,
          "customer_satisfaction": 4.2
        },
        {
          "member_id": 104,
          "name": "Dana",
          "tasks_completed": 35,
          "goals_achieved": 6,
          "sales_made": 12,
          "hours_worked": 170,
          "customer_satisfaction": 4.7
        }
      ]
    }
  ];

  const labels = teams.flatMap(team => team.members.map(member => member.name));
  const tasksCompletedData = teams.flatMap(team => team.members.map(member => member.tasks_completed));
  const goalsAchievedData = teams.flatMap(team => team.members.map(member => member.goals_achieved));
  const salesMadeData = teams.flatMap(team => team.members.map(member => member.sales_made));
  const hoursWorkedData = teams.flatMap(team => team.members.map(member => member.hours_worked));
  const customerSatisfactionData = teams.flatMap(team => team.members.map(member => member.customer_satisfaction));

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Tasks Completed',
        data: tasksCompletedData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Goals Achieved',
        data: goalsAchievedData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sales Made',
        data: salesMadeData,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Hours Worked',
        data: hoursWorkedData,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Customer Satisfaction',
        data: customerSatisfactionData,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
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
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: ${value}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
  };

  return (
    <div className="w-full ">
      <div className="relative h-72 md:h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformanceChart;
