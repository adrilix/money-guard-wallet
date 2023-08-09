import { Balance } from 'components/Balance/Balance';
import ChartComponent from 'components/Chart/Chart';
import Currency from 'components/Currency/Currency';
import DatePicker from 'components/DataForm/DataForm';
import Header from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import {
  Box,
  BoxDiagram,
  BoxNavigation,
  BoxStatistics,
  Img,
  Statistics,
} from './SummaruPage.styled';

function SummaryPage() {
  return (
    <Img>
      <Box>
        <BoxStatistics>
          <Statistics>Statistics</Statistics>
          <BoxDiagram>
            <ChartComponent />
            <DatePicker />
          </BoxDiagram>
        </BoxStatistics>
      </Box>
    </Img>
  );
}

export default SummaryPage;
