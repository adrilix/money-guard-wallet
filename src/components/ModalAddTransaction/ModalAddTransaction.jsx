import React, { useState } from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import {
  BaseInput,
  CalendarWrapper,
  ErrorText,
  FormikForm,
  Heading,
  InputWrapper,
  TwoColumnRow,
} from 'components/ModalEdit/ModalAddTransactionStyled';
import Switch from './Switch/Switch';
import CategorySelect from 'components/CategorySelect/CategorySelect';
import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import { CiCalendarDate } from 'react-icons/ci';
import Textarea from 'components/TextArea/TextArea';
import { useDispatch } from 'react-redux';
import { addTransactionsThunk } from 'redux/transactionsReduser/transactionsThunks';
import { object, string, date, bool, mixed, number } from 'yup';

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

const ModalAddTransaction = ({ closeModal }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const formatDate = inputString => {
    const date = moment(inputString, 'DD MM YYYY HH:mm:ss GMTZZ');
    const formattedDate = date.format('DD.MM.YYYY');
    return formattedDate;
  };
  const dateTransformer = (_, originalValue) => {
    const parsedDate = moment(originalValue, 'DD.MM.YYYY');
    return parsedDate.isValid() ? parsedDate.toDate() : new Date('');
  };
  const handleCheckboxChange = () => {
    setIsChecked(isChecked => !isChecked);
  };

  const handleSubmit = values => {
    dispatch(
      addTransactionsThunk({
        amount: values.value,
        comment: values.comment,
        date: values.date,
        category: isChecked ? 'income' : values.category.label,
        isIncome: isChecked,
      })
    );

    document.body.style.overflow = 'unset';
  };

  return (
    <Formik
      initialValues={{
        type: isChecked,
        category: null,
        value: '',
        date: `${formatDate(new Date())}`,
        comment: '',
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
          <Heading>Add transaction</Heading>
          <Switch
            name="type"
            checked={isChecked}
            onClick={handleCheckboxChange}
            type="radio"
          />

          {!isChecked && (
            <InputWrapper>
              <CategorySelect
                name="category"
                placeholder="Select a category"
                value={values.category}
                onChange={category => setFieldValue('category', category)}
                options={options}
              />{' '}
              <ErrorText name="category" component="div" />
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
              <ErrorText name="value" component="div" />
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
            <ErrorText name="comment" component="div" />
          </InputWrapper>
          <button type="submit">Add</button>
          <button type="button" onClick={() => closeModal()}>
            Cancel
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default ModalAddTransaction;
