import React from 'react';
import { useSelector } from 'react-redux';
import { Section, TableContainer, StyledTable, Thead, ThDate, Th, ThLast, TdDate, Td, TdDel, TdSvg, AddBtn, BtnRightCorner, EditBtn, DeleteBtn } from './TableStyled';
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import Modal from 'components/ModalForm/ModalForm';
import useToggleModal from '../../HOC/useToggleModal';
import ModalEdit from 'components/ModalEdit/ModalEdit';
import { deleteTransactionsThunk } from 'redux/transactionsReduser/transactionsThunks';
import { useDispatch } from 'react-redux';

const Table = () => {
  const tableData = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();

  const handleDelete = (transactionId) => {
    dispatch(deleteTransactionsThunk(transactionId));
    console.log(`Transaction with ID ${transactionId} has been deleted.`);
  };

  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  return (
    <>
    <Section>
        <TableContainer>
          <ul>
        {tableList.map((table, tableIndex) => (
          <li key={tableIndex}>
             <StyledTable>
              <Thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Comment</th>
                  <th>Sum</th>
                  <th>
                    <DeleteBtn onClick={() => handleDeleteTable(tableIndex)}>Delete</DeleteBtn>
                  </th>
                </tr>
              </Thead>
              <tbody>
                {table.map((item) => (
                  <tr key={item.id}>
                    <TdDate>{item.transactionDate}</TdDate>
                    <Td>{item.type}</Td>
                  <Td>{item.categoryId}</Td>
                  <Td>{item.comment}</Td>
                  <Td>{item.amount}</Td>
                    <Td>
                      <EditBtn onClick={openModal}><BiPencil/>Edit {isOpen && (
        <Modal
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <ModalEdit/>
        </Modal>
      )}</EditBtn>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </li>
        ))}
          </ul>
          </TableContainer>
      <div>
      <BtnRightCorner>
            <AddBtn onClick={handleOpenModal}><AiOutlinePlus/></AddBtn>
          </BtnRightCorner>
          
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <button onClick={handleAddTable}>Add Table</button>
            <input
              type="text"
              placeholder="Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />

          </div>
        </div>
          )}
          <div>
          <button>
            <AddBtn onClick={openModal}><AiOutlinePlus/></AddBtn>
          </button>

          
          {/* {isOpen && (
        <Modal
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <ModalAddTransaction/>
        </Modal>
      )} */}
          </div>
          </div>
        </Section>
    </>
  );
};

export default TableList;