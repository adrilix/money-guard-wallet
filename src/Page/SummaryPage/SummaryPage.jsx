import ChartComponent from 'components/Chart/Chart';
import DatePicker from 'components/DataForm/DataForm';
import {
  Box,
  BoxDiagram,
  BoxStatistics,
  Img,
  Statistics,
} from './SummaruPage.styled';
import { useSelector } from 'react-redux';
import { selectTransactionsSummary } from 'redux/transactionsReduser/transactionsThunks';
import StatisticsTable from 'components/TransactionsList/TransactionsList';

function SummaryPage() {
  const result = useSelector(selectTransactionsSummary);

  return (
    <Img>
      <Box>
        <BoxStatistics>
          <Statistics>Statistics</Statistics>
          <BoxDiagram>
            <ChartComponent data={result} />
            <div>
              <DatePicker />
              <StatisticsTable transaction={result} />
            </div>
          </BoxDiagram>
        </BoxStatistics>
      </Box>
    </Img>
  );
}

export default SummaryPage;
