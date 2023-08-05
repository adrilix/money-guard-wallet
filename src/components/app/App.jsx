import AddTransactionModal from 'components/ModalAddTransaction/AddTransactionModal';
import EditTransactionModal from 'components/ModalEdit/EditTransactionModal';

import React from 'react';

function App() {
  return (
    <div>
      <EditTransactionModal />
      <AddTransactionModal />
    </div>
  );
}

export default App;
