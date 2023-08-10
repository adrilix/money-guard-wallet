import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const customStyles = {
  container: provided => ({
    ...provided,
    // width: 'auto',
    // maxWidth: '409px',
    width: 'auto',
    border: 'none',
    // fontFamily: 'Circe',
    fontSize: '18px',
  }),
  control: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    minHeight: '20px',
    border: 'none',
    borderBottom: '1px solid #ffffff66',
    borderRadius: '0',
    boxShadow: 'none',

    alignItems: 'flex-end',
    cursor: 'pointer',
    '&:hover': { borderBottom: '1px solid #ffffff66' },

    '@media only screen and (max-width: 767px)': {
      paddingLeft: '20px',
    },
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: isFocused
      ? 'var(--form-color, rgba(255, 255, 255, 0.10))'
      : 'transparent',
    color: isFocused ? 'var(--dashboard-text, #FF868D)' : '#FBFBFB',
    '&:hover': {
      backgroundColor: isFocused
        ? 'var(--form-color, rgba(255, 255, 255, 0.10))'
        : 'transparent',
      color: isFocused ? 'var(--dashboard-text, #FF868D)' : '#FBFBFB',
    },
    padding: '10px 20px',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '8px',
    background: 'rgba(88, 62, 155, 0.8)',
    boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(9px)',
    overflow: 'hidden',
    marginTop: '1px',
  }),
  menuList: provided => ({
    ...provided,

    '&::-webkit-scrollbar': {
      width: '2px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#bdbdbd',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: '#bdbdbd',
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  indicatorContainer: provided => ({
    ...provided,
    padding: '0px',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: '0px 5px 0px 0px',
  }),
  valueContainer: provided => ({
    ...provided,
    alignItems: 'flex-end',
    padding: '1px 1px',
  }),
  input: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '0px',

    '@media only screen and (max-width: 767px)': {
      paddingLeft: '0px',
    },
  }),
  singleValue: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '2px',
    color: '#FBFBFB',
    '@media only screen and (max-width: 767px)': {
      paddingLeft: '0px',
      margin: '0px',
    },
  }),
  placeholder: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '2px',
    color: '#bdbdbd',
    '@media only screen and (max-width: 767px)': {
      paddingLeft: '0px',
    },
  }),
};
