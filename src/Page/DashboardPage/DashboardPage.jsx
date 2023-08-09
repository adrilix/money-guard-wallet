// import Currency from 'components/Currency/Currency'
import Header from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import Table from 'components/Table/Table';
import SmallTable from 'components/Table/SmallTable';
import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshAuthThunk } from 'redux/registrationReducer/registrationThunks';
import {
  getTransactionCategoriesThunk,
  getTransactionsThunk,
} from 'redux/transactionsReduser/transactionsThunks';
import {Box, BoxTableList} from 'Page/DashboardPage/DashboardStyled'

function DashboardPage() {
  // const isLogin = useSelector(state => state.auth.isLogin);

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
      <Header />
      <Box>
      <SideBar />
      <Suspense fallback={null}>
        
        <Outlet />
      </Suspense>
    <BoxTableList>
          <>
      {windowWidth >= adaptiveSize ? <Table /> : <SmallTable />}
    </>
          </BoxTableList>
      </Box>
    </div>
  );
}

export default DashboardPage;
