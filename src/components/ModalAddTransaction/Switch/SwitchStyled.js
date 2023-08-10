import styled from 'styled-components';

export const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

export const SwitchText = styled.p`
  text-align: right;
  color: 'red';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  align-items: center;
  transition: color 0.5s;

  &:first-of-type {
    color: ${props => (props.checked ? '#FFB627' : '#FFFFFF99')};
  }

  &:last-of-type {
    color: ${props => (props.checked ? '#FFFFFF99' : '#FF868D')};
  }
`;

export const SwitchSlider = styled.label`
  width: 80px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 30px;
  background-color: #ffffff;
  /* border: 1px solid #e0e0e0; */
  position: relative;
  cursor: pointer;

  & svg {
    content: '';
    width: 44px;
    height: 44px;
    position: absolute;
    top: 50%;
    left: ${props => (props.checked ? '20%' : '80%')};
    transform: translate(-50%, -50%);
    border-radius: 100%;
    transition: all 0.5s;
    background-color: ${props => (props.checked ? '#FFB627' : '#FF868D')};
    box-shadow: 0 2px 20px ${props => (props.checked ? '#FFB627' : '#FF868D')};

    &:first-of-type {
      fill: #ffffff;
      opacity: ${props => (props.checked ? '1' : '0')};
    }

    &:last-of-type {
      opacity: ${props => (props.checked ? '0' : '1')};
      fill: #ffffff;
    }
  }
`;

export const SwitchCheckbox = styled.input`
  visibility: hidden;
  opacity: 0;
  width: 0;
  height: 0;
`;
