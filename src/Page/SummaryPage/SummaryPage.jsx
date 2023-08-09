
// import { Balance } from 'components/Balance/Balance';
// import ChartComponent from 'components/Chart/Chart';
// import Currency from 'components/Currency/Currency';
// import DatePicker from 'components/DataForm/DataForm';
// import Header from 'components/Header/Header';
// import { Navigation } from 'components/Navigation/Navigation';
// import React from 'react';
// import {
//   Box,
//   BoxDiagram,
//   BoxNavigation,
//   BoxStatistics,
//   Img,
//   Statistics,
// } from './SummaruPage.styled';

import { Balance } from 'components/Balance/Balance'
import ChartComponent from 'components/Chart/Chart'
import Currency from 'components/Currency/Currency'
import DatePicker from 'components/DataForm/DataForm'
import Header from 'components/Header/Header'
import { Navigation } from 'components/Navigation/Navigation'
import React from 'react'
import { Box, BoxDiagram, BoxNavigation, BoxStatistics, Img, Statistics } from './SummaruPage.styled'
import { useSelector } from 'react-redux'
import { selectTransactionsSummary } from 'redux/transactionsReduser/transactionsThunks'
import StatisticsTable from 'components/TransactionsList/TransactionsList'


function SummaryPage() {

  const result = useSelector(selectTransactionsSummary);

  return (
    <Img>
      <Box>

//         <BoxStatistics>
//           <Statistics>Statistics</Statistics>
//           <BoxDiagram>
//             <ChartComponent />
//             <DatePicker />

        <BoxNavigation>
        <Navigation />
          <Balance />
          <Currency/>
        </BoxNavigation>
        <BoxStatistics>
          <Statistics>Statistics</Statistics>
      <BoxDiagram>
            <ChartComponent data={result} />
            <DatePicker/>
            <StatisticsTable/>

          </BoxDiagram>
        </BoxStatistics>
      </Box>
    </Img>
  );
}

export default SummaryPage;
