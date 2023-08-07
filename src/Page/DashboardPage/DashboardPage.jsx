// import Currency from 'components/Currency/Currency'
import { Balance } from 'components/Balance/Balance'
import Header from 'components/Header/Header'
import ButtonAdd from 'components/ModalForm/ButtonAdd'
import {Navigation} from 'components/Navigation/Navigation'
import Table from 'components/Table/Table'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshAuthThunk } from 'redux/registrationReducer/registrationThunks'
import { getTransactionCategoriesThunk, getTransactionsThunk } from 'redux/transactionsReduser/transactionsThunks'

function DashboardPage() {

  const isLogin = useSelector((state) => state.auth.isLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) return;
    dispatch(refreshAuthThunk())
  }, [dispatch, isLogin]);

 
  useEffect(() => {
      dispatch(getTransactionCategoriesThunk());
      dispatch(getTransactionsThunk());

  }, [dispatch]);

 

  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <Balance/>
        {/* <Currency/> */}
      </div>
      <ButtonAdd/>
      <Table/>
    </div>
    
  )
}

export default DashboardPage
