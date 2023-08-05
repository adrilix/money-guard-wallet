import React, { useState } from 'react';
import Select from 'react-select';
import { SelectBox, customSelect } from './DataFormStyled';

const DatePicker = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
  };

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
  };

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
  { value: 11, label: 'October' },
  { value: 12, label: 'November' },
  { value: 13, label: 'December' },
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1990 + 1 }, (_, index) => {
    const year = currentYear - index;
    return { value: year, label: year.toString() };
  });

  return (
    <SelectBox>
      <Select
        value={selectedMonth}
        options={months}
        styles={customSelect}
        onChange={handleMonthChange}
        placeholder="Select a month"
        isSearchable={false}
      />
      <Select
        value={selectedYear}
        options={years}
        styles={customSelect}
        onChange={handleYearChange}
        placeholder="Select a year"
        isSearchable={false}
      />
    </SelectBox>
  );
};

export default DatePicker;