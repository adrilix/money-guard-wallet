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
  placeholderStyles,
} from './ModalAddTransactionStyled';
import CategorySelect from 'components/CategorySelect/CategorySelect';
import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import { CiCalendarDate } from 'react-icons/ci';
import Textarea from 'components/TextArea/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { patchTransactionsThunk } from 'redux/transactionsReduser/transactionsThunks';
import { object, string, date, bool, mixed, number } from 'yup';
import { customStyles } from 'components/CategorySelect/CategorySelectStyled';



const options = [
  { value: 'main expenses', label: 'Main expenses' },
  { value: 'products', label: 'Products' },
  { value: 'car', label: 'Car' },
  { value: 'self care', label: 'Self care' },
  { value: 'child care', label: 'Child care' },
  { value: 'household products', label: 'Household products' },
  { value: 'education', label: 'Education' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'other expenses', label: 'Other expenses' },
  { value: 'entertainment', label: 'Entertainment' },
];

const ModalEdit = ({ closeModal }) => {
  const dispatch = useDispatch();
  const selectedTransactionEdit = useSelector(
    state => state.transactions.transactions
  );

  const formatDate = inputString => {
    const date = moment(inputString, 'DD MM YYYY HH:mm:ss GMTZZ');
    const formattedDate = date.format('DD.MM.YYYY');
    return formattedDate;
  };
  const dateTransformer = (_, originalValue) => {
    const parsedDate = moment(originalValue, 'DD.MM.YYYY');
    return parsedDate.isValid() ? parsedDate.toDate() : new Date('');
  };
  const handleSubmit = values => {
    dispatch(
      patchTransactionsThunk({
        id: selectedTransactionEdit._id,
        updatedData: {
          amount: values.value,
          comment: values.comment,
          date: values.date,
          category: values.category.label,
          isIncome: selectedTransactionEdit.isIncome,
        },
      })
    );
  };
  return (
    <Formik
      initialValues={{
        type: selectedTransactionEdit.isIncome,
        category: selectedTransactionEdit.category,
        value: selectedTransactionEdit.amount,
        date: `${formatDate(selectedTransactionEdit.date)}`,
        comment: selectedTransactionEdit.comment,
      }}
      validationSchema={object({
        type: bool(),
        category: mixed().when('type', {
          is: type => !type,
          then: () => mixed().required('Please choose transaction category.'),
          otherwise: () => mixed().notRequired(),
        }),
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
            <IncomeSpan>Income</IncomeSpan>
            <ExpenseSpan>Expense</ExpenseSpan>
          </TransactionTypeDiv>

          <InputWrapper>
            <CategorySelect
              value={values.category}
              placeholder={selectedTransactionEdit.category}
              name="category"
              onChange={category => setFieldValue('category', category)}
              options={options}
              styles={{ ...customStyles, ...placeholderStyles }}
            />
            <ErrorText name="category" component="div" />
          </InputWrapper>

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
