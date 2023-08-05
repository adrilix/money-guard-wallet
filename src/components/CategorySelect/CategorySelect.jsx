import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import DropdownIndicator from './DropdownIndicator/DropdownIndicator';

import { CategoryWrapper, customStyles } from './CategorySelectStyled';

const CategorySelect = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <CategoryWrapper>
      <Select
        styles={customStyles}
        components={{ DropdownIndicator }}
        {...field}
        {...props}
      />
    </CategoryWrapper>
  );
};

export default CategorySelect;
