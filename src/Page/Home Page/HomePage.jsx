import { BoxTableList } from 'Page/DashboardPage/DashboardStyled';
import Table from 'components/Table/Table';
import React, { useEffect, useState } from 'react';
import SmallTable from 'components/Table/SmallTable';
import {
  getTransactionCategoriesThunk,
  getTransactionsThunk,
} from 'redux/transactionsReduser/transactionsThunks';
import { useDispatch } from 'react-redux';

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
  return (
    <div>
      <BoxTableList>
        <>{windowWidth >= adaptiveSize ? <Table /> : <SmallTable />}</>
      </BoxTableList>
    </div>
  );
};

export default HomePage;
