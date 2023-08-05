import 'react-datetime/css/react-datetime.css';

import moment from 'moment';

import { useField } from 'formik';
import { StyledDatetime } from './DatetimePickerStyled';

const DatetimePicker = ({ ...props }) => {
  const [field, , helpers] = useField(props);

  return (
    <StyledDatetime
      {...field}
      {...props}
      inputProps={{
        readOnly: true,
      }}
      selected={field.value}
      onChange={value => {
        helpers.setValue(moment(value).format('DD.MM.YYYY'));
      }}
    />
  );
};

export default DatetimePicker;
