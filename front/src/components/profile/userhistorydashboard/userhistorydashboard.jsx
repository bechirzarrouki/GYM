// UserHistoryDashboard Component with Chart
import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale,LinearScale,PointElement,LineElement, Chart } from "chart.js";

const UserHistoryDashboard = ({ historyData }) => {
  // Extracting labels (dates) and data (weight values) from historyData
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(PointElement);
  Chart.register(LineElement);
  const labels = historyData.map((dataPoint) => dataPoint.date);
  const weightData = historyData.map((dataPoint) => dataPoint.weight);

  // Chart.js data object
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Weight Progression',
        data: weightData,
        fill: false,
        borderColor: '#FF1414',
      },
    ],
  };

  // Chart.js options
  /*const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Weight (kg)',
        },
      },
      x: {
        type: 'linear', // 'linear' as the type for the x-axis
        position: 'bottom',
        title: {
          display: true,
          text: 'Time',
        },
      },
    },
  };*/
  return (
    <div className="user-history-dashboard">
      <h2>Weight Progression</h2>
      <div className="chart-container">
        <Line data={data}/>
      </div>
    </div>
  );
};

export default UserHistoryDashboard;
