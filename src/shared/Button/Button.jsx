import PropTypes from 'prop-types';

import { ButtonStyle } from './button.styled';

const Button = ({ children, variant = 'none', ...restProps }) => {
  return (
    <ButtonStyle {...restProps} className={variant}>
      {children}
    </ButtonStyle>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['none', 'cancel', 'login', 'registration']),
};

export default Button;
