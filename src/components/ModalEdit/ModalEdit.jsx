import React from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import {
  BaseInput,
  CalendarWrapper,
  ErrorText,
  ExpenseSpan,
  FormikForm,
  Heading,
  IncomeSpan,
  InputWrapper,
  TransactionTypeDiv,
  TwoColumnRow,
} from './ModalAddTransactionStyled';

import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import { CiCalendarDate } from 'react-icons/ci';
import Textarea from 'components/TextArea/TextArea';
import { useDispatch } from 'react-redux';
import {
  patchTransactionsThunk,
} from 'redux/transactionsReduser/transactionsThunks';
import { object, string, date, number } from 'yup';
import { refreshBalanceThunk } from 'redux/registrationReducer/registrationThunks';

const ModalEdit = ({ closeModal, item }) => {
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
  const dispatch = useDispatch();
  const isExpense = item.type === 'EXPENSE';

  const dateTransformer = (_, originalValue) => {
    const parsedDate = moment(originalValue, 'DD.MM.YYYY');
    return parsedDate.isValid() ? parsedDate.toDate() : new Date('');
  };
  const handleSubmit = values => {
    const data = {
      id: item.id,
      updatedData: {
        transactionDate: new Date(values.date),
        type: item.type,
        categoryId: values.category.categoryId,
        comment: values.comment,
        amount: !isExpense ? Number(values.value) : Number(-values.value),
      },
    };
    dispatch(patchTransactionsThunk(data))
      .unwrap()
      .then(() => dispatch(refreshBalanceThunk()));
  };

  return (
    <Formik
      initialValues={{
        date: new Date(item.transactionDate),
        type: item.type,
        category: item.categoryId,
        comment: item.comment,
        value: Math.abs(item.amount),
      }}
      validationSchema={object({
        value: number()
          .typeError('Transaction value must be a number')
          .test(
            'len',
            'Transaction value can be a maximum of 16 characters',
            val => val.toString().length <= 16
          )
          .required('Please provide transaction value.'),
        date: date()
          .transform(dateTransformer)
          .typeError('Please enter a valid date')
          .required('Please provide transaction date.'),
        comment: string().notRequired(),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values);
        resetForm();
        setSubmitting(false);
        closeModal();
      }}
      enableReinitialize
    >
      {({ values, setFieldValue, handleBlur }) => (
        <FormikForm>
          <Heading>Edit transaction</Heading>
          <TransactionTypeDiv>
            <IncomeSpan $active={item.type === 'INCOME'}>Income</IncomeSpan>
            <span>&frasl;</span>
            <ExpenseSpan $active={item.type === 'EXPENSE'}>Expense</ExpenseSpan>
          </TransactionTypeDiv>
          {isExpense && (
            <InputWrapper>
              <Textarea
                name="category"
                autoComplete="off"
                value={categoryNames[item.categoryId]}
                readonly
              />
            </InputWrapper>
          )}
          <TwoColumnRow>
            <InputWrapper>
              <BaseInput
                placeholder="0.00"
                title="Please put the transaction value"
                name="value"
                type="number"
                autoComplete="off"
                value={values.value}
                onChange={value => setFieldValue('value', value.target.value)}
                onBlur={handleBlur}
                onKeyUp={handleBlur}
              />
            </InputWrapper>
            <CalendarWrapper>
              <DatetimePicker
                dateFormat="DD.MM.YYYY"
                name="date"
                type="date"
                timeFormat={false}
              />
              <ErrorText name="date" component="div" />
              <CiCalendarDate />
            </CalendarWrapper>
          </TwoColumnRow>
          <InputWrapper>
            <Textarea
              placeholder="Comment"
              title="Please describe your transaction."
              name="comment"
              type="text"
              autoComplete="off"
            />
            <ErrorText name="comment" component="div" />
          </InputWrapper>
          <button type="submit">Save</button>
          <button type="button" onClick={() => closeModal()}>
            Cancel
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default ModalEdit;
