// import Currency from 'components/Currency/Currency'
import Header from 'components/Header/Header';
import ButtonAdd from 'components/ModalForm/ButtonAdd';
import { SideBar } from 'components/SideBar/SideBar';
import Table from 'components/Table/Table';
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshAuthThunk } from 'redux/registrationReducer/registrationThunks';
import {
  getTransactionCategoriesThunk,
  getTransactionsThunk,
} from 'redux/transactionsReduser/transactionsThunks';

function DashboardPage() {
  const isLogin = useSelector(state => state.auth.isLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) return;
    dispatch(refreshAuthThunk());
  }, [dispatch, isLogin]);

  useEffect(() => {
    dispatch(getTransactionCategoriesThunk());
    dispatch(getTransactionsThunk());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <SideBar />
      <Suspense fallback={null}>
        <ButtonAdd />
        <Outlet />
      </Suspense>

      <Table />
    </div>
  );
}

export default DashboardPage;
