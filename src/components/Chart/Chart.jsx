import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import { Diagramm, Total } from './ChartStyled';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  { name: '$14000', value: 0 },
  { name: 'Main expenses', value: 1700, fill: 'green' },
  { name: 'Products', value: 3700, fill: 'pink' },
  { name: 'Car', value: 1000, fill: '#fd9498' },
  { name: 'Self care', value: 700, fill: '#c5baff' },
  { name: 'Child care', value: 500, fill: '#6e78e8' },
  { name: 'Group B', value: 1800, fill: '#4a56e2' },
  { name: 'Group C', value: 1200, fill: '#81e1ff' },
  { name: 'Group D', value: 2200, fill: '#24cca7' },
  { name: 'Group D', value: 300, fill: '#00ad84' },
];

const groupDataByName = (data) => {
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = { name: item.name, value: 0, fill: item.fill };
    }
    acc[item.name].value += item.value;
    return acc;
  }, {});
  return Object.values(groupedData);
};

const ChartComponent = () => {
  const groupedData = groupDataByName(data);
  const [hoveredName, setHoveredName] = useState(null);

  const handleHover = (event, chartElements) => {
    if (chartElements.length > 0) {
      const index = chartElements[0].index;
      const name = chartData.labels[index];
      setHoveredName(name);
    } else {
      setHoveredName(null);
    }
  };

  const firstValue = groupedData.shift();
    const chartData = {
    labels: groupedData.map((item) => item.name),
    datasets: [
      {
        data: groupedData.map((item) => item.value),
        backgroundColor: groupedData.map((item) => item.fill),
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    onHover: handleHover,
    onDraw: (chart) => {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;

      ctx.restore();
      const fontSize = (height / 114).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = 'middle';
      const text = hoveredName || firstValue.name;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillStyle = '#000';
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  return (
    <Diagramm>
      <Doughnut data={chartData} options={options} />
      <Total>{hoveredName || firstValue.name}</Total>
    </Diagramm>
  );
};

export default ChartComponent;
