import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

const AttendanceLineChart = () => {
    const data = [
        { id: 1, name: "All Employees", count: 120 },
        { id: 2, name: "Male Employees", count: 70 },
        { id: 3, name: "Female Employees", count: 50 },
        { id: 4, name: "Present Employees", count: 100 },
        { id: 5, name: "On Leave", count: 5 },
        { id: 6, name: "On Half Day Leave", count: 15 },
    ];

    const chartData = {
        labels: data.map(item => item.name),
        datasets: [
            {
                label: 'Attendance Data',
                data: data.map(item => item.count),
                fill: false,
                borderColor: '#36A2EB',
                backgroundColor: '#36A2EB',
                tension: .1,
                pointBackgroundColor: '#FFFFFF',
                pointBorderColor: '#36A2EB',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw}`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Count',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Category',
                },
            },
        },
    };

    return (
        <div className='h-full'>
            <div className='relative w-full h-56 md:h-72 lg:h-80'>
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default AttendanceLineChart;
