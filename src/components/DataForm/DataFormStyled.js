import s from 'styled-components'

export const SelectBox = s.div`
    display: flex;
    gap: 20px;`

export const customSelect = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    maxHeight:'50px',
        maxWidth: '182px',
    fontFamily: 'Poppins',
        fontSize: '16px',
        border: '1px solid var(--white-60, rgba(255, 255, 255, 0.60))',
              borderRadius: '8px',
  }),
  control: (provided) => ({
      ...provided,
    background: 'rgba(74, 86, 226, 0.10)',
    minHeight: '50px',
     width:'182px',
    border: 'none',
    boxShadow: 'none',
    margin: '0',
  }),
option: (provided, { isFocused }) => ({
  ...provided,
  cursor: 'pointer',
  backgroundColor: isFocused ? 'var(--form-color, rgba(255, 255, 255, 0.10))' : 'transparent',
  color: isFocused ? 'var(--dashboard-text, #FF868D)' : '#FBFBFB',
  '&:hover': {
    backgroundColor: isFocused ? 'var(--form-color, rgba(255, 255, 255, 0.10))' : 'transparent',
    color: isFocused ? 'var(--dashboard-text, #FF868D)' : '#FBFBFB',
    },
    textAlign: 'left',
    paddingLeft: '20px',
  fontFamily: 'Poppins',
  fontSize: '16px',
}),
  menu: (provided) => ({
    ...provided,
      textAlign: 'center',
      borderRadius: '8px',
    margin: '0',
    
  }),
    menuList: (provided) => ({
        ...provided,
        borderRadius: '8px',
    background:
      'var(--small-form-color, linear-gradient(360deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 35.94%, rgba(106, 70, 165, 0.52) 61.04%, rgba(133, 93, 175, 0.13) 100%))',
    boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(50px)',
        maxHeight: '157px',
        '&::-webkit-scrollbar': {
      width: '4px',
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

    dropdownIndicator: (provided, { isFocused }) => ({
      ...provided,
      padding: '0px 5px 0px 0px',
      color: '#FBFBFB',
      transform: `rotate(${isFocused ? '180deg' : '0deg'})`,
      fontSize: '15px',
    }),


  placeholder: (provided) => ({
    ...provided,
    paddingLeft: '18px',
    paddingBottom: '2px',
    color: '#FBFBFB',
    fontFamily: 'Poppins',
      fontSize: '16px',
    }),
    indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};