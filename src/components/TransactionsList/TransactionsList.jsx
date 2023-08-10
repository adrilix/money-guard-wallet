import React from "react";
import { Section, StyledTable, Thead, ThSum, ThCategory, TdColor, TdSum, TdCategory, Transaction, Total } from "./TransactionsListStyled";

import { nanoid } from 'nanoid';
import { colorStatistics } from 'Page/SummaryPage/colorStatistic'


const StatisticsTable = ({ transaction }) => {
   if (!transaction || !transaction.categoriesSummary || transaction.categoriesSummary.length === 0) {
    return null;
  }
  
    return (
<Section>
       <StyledTable>
         <Thead>
           <tr>
             <ThCategory>Category</ThCategory>
             <ThSum>Sum</ThSum>
           </tr>
         </Thead>
         <tbody>
           {transaction.categoriesSummary.map((item) => {
             const categoryColor = colorStatistics.find(category => category.name === item.name)?.color || ''; // Знаходимо кольору для поточної категорії
             return (
               <tr key={nanoid()}>
                 <TdCategory>
                   <TdColor categoryColor={categoryColor} />
                   <span>{item.name}</span>
                 </TdCategory>
                 <TdSum>{(item.total).toFixed(2)}</TdSum>
               </tr>
             );
           })}
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
