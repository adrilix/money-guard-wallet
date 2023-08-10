import React from "react";
import { Section, StyledTable, Thead, ThSum, ThCategory, TdSum, TdCategory, Transaction, Total } from "./TransactionsListStyled";
import { nanoid } from 'nanoid';


const StatisticsTable = ({ transaction }) => {
    // const categoryColors = {};
   if (!transaction || !transaction.categoriesSummary || transaction.categoriesSummary.length === 0) {
    return null;
  }
  
    return (

      <Section>
      <StyledTable>
        <Thead>
          <tr>
            {/* <th>Color</th> */}
            <ThCategory>Category</ThCategory>
            <ThSum>Sum</ThSum>
          </tr>
        </Thead>
        <tbody>
   {transaction.categoriesSummary.map((item) => (
            <tr key={nanoid()}>
              {/* <td style={{ backgroundColor: categoryColors[item.categoryId] }}></td> */}
              <TdCategory>{item.name}</TdCategory>
              <TdSum>{Math.abs(item.total).toFixed(2)}</TdSum>
            </tr>
   ))}
            <tr>
              <Transaction>Expenses</Transaction>
              <Total className="expense">{Math.abs(transaction.expenseSummary).toFixed(2)}</Total>
            </tr>
             <tr>
              <Transaction>Income</Transaction>
              <Total className="income">{transaction.incomeSummary.toFixed(2)}</Total>
            </tr>
        </tbody>
          </StyledTable>
        </Section>
        );
  };
        

// function generateRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

export default StatisticsTable;
