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
  getTransactionsThunk,
  patchTransactionsThunk,
} from 'redux/transactionsReduser/transactionsThunks';
import { object, string, date, number } from 'yup';

// const options = [
//   { value: 'main expenses', label: 'Main expenses' },
//   { value: 'products', label: 'Products' },
//   { value: 'car', label: 'Car' },
//   { value: 'self care', label: 'Self care' },
//   { value: 'child care', label: 'Child care' },
//   { value: 'household products', label: 'Household products' },
//   { value: 'education', label: 'Education' },
//   { value: 'leisure', label: 'Leisure' },
//   { value: 'other expenses', label: 'Other expenses' },
//   { value: 'entertainment', label: 'Entertainment' },
// ];
const ModalEdit = ({ closeModal, item }) => {
  const dispatch = useDispatch();

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
        amount: Number(values.value),
      },
    };

    dispatch(patchTransactionsThunk(data))
      .unwrap()
      .then(() => dispatch(getTransactionsThunk()));
  };
  return (
    <Formik
      initialValues={{
        date: new Date(item.transactionDate),
        type: item.type,
        category: item.categoryId,
        comment: item.comment,
        value: item.amount,
      }}
      validationSchema={object({
        //   type: bool(),
        //   category: mixed().when('type', {
        //     is: type => !type,
        //     then: () => mixed().required('Please choose transaction category.'),
        //     otherwise: () => mixed().notRequired(),
        //   }),
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
            <ExpenseSpan $active={item.type === 'EXPENSE'}>Expense</ExpenseSpan>
          </TransactionTypeDiv>

          {/* <InputWrapper>
            <CategorySelect
              placeholder={selectedTransactionToEdit.category}
              name="category"
              onChange={category => setFieldValue('category', category)}
              options={options}
              styles={{ ...customStyles, ...placeholderStyles }}
            />
            <ErrorText name="category" component="div" />
          </InputWrapper> */}

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
