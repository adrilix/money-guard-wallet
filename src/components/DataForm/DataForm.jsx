import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { SelectBox, customSelect } from './DataFormStyled';
import { useDispatch } from 'react-redux';
import { getTransactionsSummaryThunk } from 'redux/transactionsReduser/transactionsThunks';

const DatePicker = () => {
  const dispatch = useDispatch();
  const date = new Date();
  
  const [month, setMonth] = useState(date.getMonth()+1);
  const [year, setYear] = useState(date.getFullYear());

  console.log(month);
  const handleMonthChange = selectedOption => {
    setMonth(selectedOption.value);
  };

  const handleSelectYear = selectedOption => {
    setYear(selectedOption.value);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(getTransactionsSummaryThunk({ month: Number(month), year: Number(year) }))
    }, 1500);
  }, [dispatch, month, year]);


 const months = [
    { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1990 + 1 }, (_, index) => {
    const year = currentYear - index;
    return { value: year, label: year.toString() };
  });

  return (
    <SelectBox>
      <Select
        options={months}
        styles={customSelect}
        onChange={handleMonthChange}
        placeholder="Select a month"
        isSearchable={false}
      />
      <Select
        options={years}
        styles={customSelect}
        onChange={handleSelectYear}
        placeholder="Select a year"
        isSearchable={false}
      />
    </SelectBox>
  );
};

export default DatePicker;


