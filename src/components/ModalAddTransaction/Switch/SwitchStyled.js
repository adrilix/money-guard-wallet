import styled from 'styled-components';

export const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
`;

export const SwitchText = styled.p`
  color: ' #e0e0e0';
  text-align: right;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  align-items: center;
  transition: color 0.5s;

  &:first-of-type {
    color: ${props => (props.checked ? '#24cca8' : '#e0e0e0')};
  }

  &:last-of-type {
    color: ${props => (props.checked ? '#e0e0e0' : '#ff6596')};
  }
`;

export const SwitchSlider = styled.label`
  width: 80px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #e0e0e0;
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
    box-shadow: 0 10px 20px ${props => (props.checked ? '#24cca8' : '#ff6596')};

    &:first-of-type {
      fill: #24cca8;
      opacity: ${props => (props.checked ? '1' : '0')};
    }

    &:last-of-type {
      opacity: ${props => (props.checked ? '0' : '1')};
      fill: #ff6596;
    }
  }
`;

export const SwitchCheckbox = styled.input`
  visibility: hidden;
  opacity: 0;
  width: 0;
  height: 0;
`;
