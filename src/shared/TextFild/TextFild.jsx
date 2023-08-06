import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import s from './textfild.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, customClassErrorMSg = '', ...props }) => {
  const id = useMemo(() => nanoid(), []);
  const [field, meta] = useField(props);
  return (
    <>
      {label && <label htmlFor={field.name}>{label}</label>}
      <input
        className={`${s.label} ${meta.touched && meta.error && 'is invalid'}`}
        {...field}
        {...props}
        autoComplete="off"
        id={id}
      ></input>
      <ErrorMessage
        component="div"
        name={field.name}
        className={
          customClassErrorMSg ? `${s.error} ${customClassErrorMSg}` : s.error
        }
      />
    </>
  );
};

export default TextField;
TextField.propTypes = {
  label: PropTypes.string,
};
