// import AddTransactionModal from 'components/ModalAddTransaction/AddTransactionModal';
// import EditTransactionModal from 'components/ModalEdit/EditTransactionModal';
import React, { useEffect } from 'react';
import UserRoutes from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAuthThunk } from 'redux/registrationReducer/registrationThunks';
import { ToastContainer } from 'react-toastify';
// import { getTransactionCategoriesThunk, getTransactionsThunk } from 'redux/transactionsReduser/transactionsThunks';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  const token = useSelector(state => state.auth.token);
  
  useEffect(() => {
    if (!isLogin && token)
    {dispatch(refreshAuthThunk())}
  }, [dispatch, isLogin, token]);

  return (
    <div>
      <UserRoutes />

      {/* <EditTransactionModal />
      <AddTransactionModal /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
