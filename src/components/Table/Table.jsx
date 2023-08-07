import React from 'react';
import { useSelector } from 'react-redux';
import {
  Section,
  TableContainer,
  StyledTable,
  Thead,
  ThDate,
  Th,
  ThLast,
  TdDate,
  Td,
  TdDel,
  TdSvg,
  //   AddBtn,
  //   BtnRightCorner,
  //   EditBtn,
  DeleteBtn,
} from './TableStyled';
// import { BiPencil } from 'react-icons/bi';
// import { AiOutlinePlus } from 'react-icons/ai';
// import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
// import Modal from 'components/ModalForm/ModalForm';
// import useToggleModal from '../../HOC/useToggleModal';
// import ModalEdit from 'components/ModalEdit/ModalEdit';
import { deleteTransactionsThunk } from 'redux/transactionsReduser/transactionsThunks';
import { useDispatch } from 'react-redux';
import AddTransactionModal from 'components/ModalAddTransaction/AddTransactionModal';
import EditTransactionModal from 'components/ModalEdit/EditTransactionModal';

const Table = () => {
  const tableData = useSelector(state => state.transactions.transactions);
  const dispatch = useDispatch();
  console.log(tableData);
  const handleDelete = transactionId => {
    dispatch(deleteTransactionsThunk(transactionId));
    console.log(`Transaction with ID ${transactionId} has been deleted.`);
  };

  //   const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
  //     useToggleModal();

  return (
    <>
      <Section>
        <TableContainer>
          <StyledTable>
            <Thead>
              <tr>
                <ThDate columnWidth={68}>Date</ThDate>
                <Th columnWidth={72}>Type</Th>
                <Th columnWidth={116}>Category</Th>
                <Th columnWidth={120}>Comment</Th>
                <Th columnWidth={76}>Sum</Th>
                <Th></Th>
                <ThLast></ThLast>
              </tr>
            </Thead>
            <tbody>
              {tableData.map(item => (
                <tr key={item.id}>
                  <TdDate>{item.transactionDate}</TdDate>
                  <Td>{item.type}</Td>
                  <Td>{item.categoryId}</Td>
                  <Td>{item.comment}</Td>
                  <Td>{item.amount}</Td>
                  <TdSvg>
                    <EditTransactionModal />
                    {/* <EditBtn onClick={openModal}>
                      <BiPencil />
                      {isOpen && (
                        <Modal
                          closeModal={() => closeModal()}
                          handleKeyDown={handleKeyDown}
                          handleBackdropClick={handleBackdropClick}
                        >
                          <ModalEdit />
                        </Modal>
                      )}
                    </EditBtn> */}
                  </TdSvg>
                  <TdDel>
                    <DeleteBtn onClick={() => handleDelete(item.id)}>
                      Delete
                    </DeleteBtn>
                  </TdDel>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>

        <div>
          <AddTransactionModal />
          {/* <BtnRightCorner>
            <AddBtn onClick={openModal}>
              <AiOutlinePlus />
            </AddBtn>
          </BtnRightCorner>

          {isOpen && (
            <Modal
              closeModal={() => closeModal()}
              handleKeyDown={handleKeyDown}
              handleBackdropClick={handleBackdropClick}
            >
              <ModalAddTransaction />
            </Modal>
          )} */}
        </div>
      </Section>
    </>
  );
};

export default Table;
