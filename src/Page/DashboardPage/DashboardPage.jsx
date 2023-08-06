// import Currency from 'components/Currency/Currency'
import Header from 'components/Header/Header'
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
        {/* <Currency/> */}
      </div>
      <Table/>
    </div>
    
  )
}

export default DashboardPage
