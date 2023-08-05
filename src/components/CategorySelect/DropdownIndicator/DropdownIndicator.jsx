import { components } from 'react-select';
import { CiCircleChevDown } from 'react-icons/ci';

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CiCircleChevDown icon="icon__arrow-down" width="18px" height="9px" />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
