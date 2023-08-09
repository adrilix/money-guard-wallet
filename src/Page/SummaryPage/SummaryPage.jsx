
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
import React, { useEffect } from 'react'
import { Box, BoxDiagram, BoxNavigation, BoxStatistics, Img, Statistics } from './SummaruPage.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectTransactionsSummary } from 'redux/transactionsReduser/transactionsThunks'
import StatisticsTable from 'components/TransactionsList/TransactionsList'
import { refreshAuthThunk } from 'redux/registrationReducer/registrationThunks'


function SummaryPage() {

  const result = useSelector(selectTransactionsSummary);
  const isLogin = useSelector(state => state.auth.isLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) return;
    dispatch(refreshAuthThunk());
  }, [dispatch, isLogin]);

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
