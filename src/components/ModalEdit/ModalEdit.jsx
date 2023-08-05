import React from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import {
  BaseInput,
  CalendarWrapper,
  ExpenseSpan,
  FormikForm,
  Heading,
  IncomeSpan,
  InputWrapper,
  TransactionTypeDiv,
  TwoColumnRow,
} from './ModalAddTransactionStyled';
import CategorySelect from 'components/CategorySelect/CategorySelect';
import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import { CiCalendarDate } from 'react-icons/ci';
import Textarea from 'components/TextArea/TextArea';

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

const ModalEdit = () => {
  const formatDate = inputString => {
    const date = moment(inputString, 'DD MM YYYY HH:mm:ss GMTZZ');
    const formattedDate = date.format('DD.MM.YYYY');
    return formattedDate;
  };

  return (
    <Formik
      initialValues={{
        date: `${formatDate(new Date())}`,
      }}
    >
      <FormikForm>
        <Heading>Edit transaction</Heading>
        <TransactionTypeDiv>
          <IncomeSpan>Income</IncomeSpan>
          <ExpenseSpan>Expense</ExpenseSpan>
        </TransactionTypeDiv>

        <InputWrapper>
          <CategorySelect options={options} name="category" />
        </InputWrapper>

        <TwoColumnRow>
          <InputWrapper>
            <BaseInput
              placeholder="0.00"
              title="Please put the transaction value"
              name="value"
              type="number"
              autoComplete="off"
            />
          </InputWrapper>
          <CalendarWrapper>
            <DatetimePicker
              dateFormat="DD.MM.YYYY"
              name="date"
              type="date"
              timeFormat={false}
            />
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
        </InputWrapper>
      </FormikForm>
    </Formik>
  );
};

export default ModalEdit;
