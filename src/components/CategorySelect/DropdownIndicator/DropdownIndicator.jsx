import { components } from 'react-select';
import { AiOutlineDown } from 'react-icons/ai';

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <AiOutlineDown icon="icon__arrow-down" width="18px" height="9px" />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
