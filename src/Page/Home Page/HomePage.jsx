import { BoxTableList } from 'Page/DashboardPage/DashboardStyled';
import Table from 'components/Table/Table';
import React, { useEffect, useState } from 'react';
import SmallTable from 'components/Table/SmallTable';
import {
  getTransactionCategoriesThunk,
  getTransactionsThunk,
} from 'redux/transactionsReduser/transactionsThunks';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Balance } from 'components/Balance/Balance';

const HomePage = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isLogin) return;
  //   dispatch(refreshAuthThunk());
  // }, [dispatch, isLogin]);

  useEffect(() => {
    dispatch(getTransactionCategoriesThunk());
    dispatch(getTransactionsThunk());
  }, [dispatch]);

  const adaptiveSize = 768;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div>
      <BoxTableList>
        {isMobile && <Balance />}
        <>{windowWidth >= adaptiveSize ? <Table /> : <SmallTable />}</>
      </BoxTableList>
    </div>
  );
};

export default HomePage;
