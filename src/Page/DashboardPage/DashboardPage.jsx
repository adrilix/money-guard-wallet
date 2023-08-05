import Currency from 'components/Currency/Currency'
import Header from 'components/Header/Header'
import Navigation from 'components/Navigation/Navigation'
import Table from 'components/Table/Table'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTransactionCategoriesRequest } from 'services/api/transactionCategoriesApi'
import { getTransactionsRequest } from 'services/api/transactionsApi'

function DashboardPage() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionCategoriesRequest())
    dispatch(getTransactionsRequest())
  },[dispatch])

  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <Currency/>
      </div>
      <Table/>
    </div>
    
  )
}

export default DashboardPage
