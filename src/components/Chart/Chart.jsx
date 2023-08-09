import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import { Diagramm, Total } from './ChartStyled';
import lepr from '../../svg/lepr-re.png'
import {colorStatistics } from '../../Page/SummaryPage/colorStatistic'

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  if (!data || !data.categoriesSummary || data.categoriesSummary.length === 0) {

    return <img alt="no answer"src={lepr} width={270}/>;
  }

 const income = data.incomeSummary;
 
   const expense = data.expenseSummary;

  const totalAmount = income + expense;
  const categories=data.categoriesSummary
 

  const chartData = {
    labels: categories.map(el => el.name),
    datasets: [
      {
        data: categories.map((item) => item.total),
        backgroundColor: categories.map((item) => {
          const colorInfo = colorStatistics.find((colorItem) => colorItem.name === item.name);
  return colorInfo ? colorInfo.color : '#FFFFFF';
        }),
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
  };

  return (
    <Diagramm>
      <Doughnut data={chartData} options={options} />
      {data ? <Total>{totalAmount}</Total> : ""}
    </Diagramm>
  );
};

export default ChartComponent;
