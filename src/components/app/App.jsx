// import AddTransactionModal from 'components/ModalAddTransaction/AddTransactionModal';
// import EditTransactionModal from 'components/ModalEdit/EditTransactionModal';
import React, { useEffect } from 'react';
import UserRoutes from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAuthThunk } from 'redux/registrationReducer/registrationThunks';
// import { getTransactionCategoriesThunk, getTransactionsThunk } from 'redux/transactionsReduser/transactionsThunks';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  useEffect(() => {
    if (isLogin) return;
    dispatch(refreshAuthThunk());
  }, [dispatch, isLogin]);

  return (
    <div>
      <UserRoutes />

      {/* <EditTransactionModal />
      <AddTransactionModal /> */}
    </div>
  );
}

export default App;
