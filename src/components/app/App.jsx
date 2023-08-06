// import AddTransactionModal from 'components/ModalAddTransaction/AddTransactionModal';
// import EditTransactionModal from 'components/ModalEdit/EditTransactionModal';

import React, { useEffect } from 'react';
import UserRoutes from './Routes';
import { useDispatch } from 'react-redux';
import { refreshAuthThunk } from 'redux/registrationReducer/registrationThunks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshAuthThunk());
  }, [dispatch]);
  return (
    <div>
      <UserRoutes />
      {/* <EditTransactionModal />
      <AddTransactionModal /> */}
    </div>
  );
}

export default App;
