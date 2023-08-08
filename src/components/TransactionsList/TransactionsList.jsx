import React from "react";
import { useSelector } from 'react-redux';
// import {Section} from "./StatisticsStyled"

const StatisticsTable = () => {
   const tableData = useSelector((state) => state.transactions.transactions);

  const categoryColors = {};
  
 tableData.forEach((item) => {
    if (!categoryColors[item.categoryId]) {
      categoryColors[item.categoryId] = generateRandomColor();
    }
  });
  
  const RenderTable = () => {
    return (

      <section>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td style={{ backgroundColor: categoryColors[item.categoryId] }}></td>
              <td>{item.categoryId}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
          </table>
        </section>
        );
  };
      

  const RenderTotals = () => {
    const expenses = tableData.filter((item) => item.type === "EXPENSE").reduce((sum, item) => sum + item.amount, 0);
    const income = tableData.filter((item) => item.type === "INCOME").reduce((sum, item) => sum + item.amount, 0);
    return (
      <div>
        <p>Expenses: ${expenses.toFixed(2)}</p>
        <p>Income: ${income.toFixed(2)}</p>
      </div>
    );
  };  
  return (
    <div>
        <RenderTable/>
        <RenderTotals/>
    </div>
  );
};

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default StatisticsTable;
