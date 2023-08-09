import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Section, TableContainer, StyledTable, Thead, TdType, ThEdit, TdSum, ThSum, ThDate, Th, ThLast, TdDate, Td, TdDel, TdSvg, DeleteBtn } from './TableStyled';
import { deleteTransactionsThunk, getTransactionsThunk } from 'redux/transactionsReduser/transactionsThunks';
import AddTransactionModal from 'components/ModalAddTransaction/AddTransactionModal';
import EditTransactionModal from 'components/ModalEdit/EditTransactionModal';

const Table = () => {
  const tableData = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();

  const handleDelete = (transactionId) => {
    dispatch(deleteTransactionsThunk(transactionId)).unwrap().then(() =>
      dispatch(getTransactionsThunk())
    );
  };

  const categoryNames = {
    'c9d9e447-1b83-4238-8712-edc77b18b739': 'Main expenses',
    '27eb4b75-9a42-4991-a802-4aefe21ac3ce': 'Products',
    '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386': 'Car',
    'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4': 'Self care',
    '76cc875a-3b43-4eae-8fdb-f76633821a34': 'Child care',
    '128673b5-2f9a-46ae-a428-ec48cf1effa1': 'Household products',
    '1272fcc4-d59f-462d-ad33-a85a075e5581': 'Education',
    'c143130f-7d1e-4011-90a4-54766d4e308e': 'Leisure',
    '719626f1-9d23-4e99-84f5-289024e437a8': 'Other expenses',
    '3acd0ecd-5295-4d54-8e7c-d3908f4d0402': 'Entertainment',
    '063f1132-ba5d-42b4-951d-44011ca46262': 'Income',
  };

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
};
  
  const sortedTableData = [...tableData].sort(
    (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
  );

  const getSymbol = (type) => (type === 'INCOME' ? '+' : type === 'EXPENSE' ? '-' : '');

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
                <ThSum columnWidth={76}>Sum</ThSum>
                <ThEdit columnWidth={21}></ThEdit>
                <ThLast ></ThLast>
              </tr>
            </Thead>
            <tbody>
              {/* {sortedTableData.slice().reverse().map((item) => ( */}
               {sortedTableData.map((item) => (
                <tr key={item.id}>
                  <TdDate columnWidth={68}>{formatDate(item.transactionDate)}</TdDate>
                  <TdType columnWidth={72}>{getSymbol(item.type)}</TdType>
                  <Td columnWidth={116}>{categoryNames[item.categoryId]}</Td>
                  <Td columnWidth={120}>{item.comment}</Td>
                  <TdSum columnWidth={76}className={item.type === 'INCOME' ? 'income' : 'expense'}>{Math.abs(item.amount).toFixed(2)}</TdSum>
                  <TdSvg>
                    <EditTransactionModal item={item} />
                  </TdSvg>
                  <TdDel columnWidth={77}>
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
        </div>
      </Section>
    </>
  );
};

export default Table;
