import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 64px;
  padding: 12px;
  background-color: white;
  border: red;
  border-radius: 16px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.034), 0 7px 5px rgba(0, 0, 0, 0.048),
    0 12px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.072),
    0 42px 33px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;
export const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
`;
export const ButtonIcon = styled.button`
  border-radius: 50%;
  text-transform: capitalize;
  color: teal;
  background-color: orange;
  border: none;

  :hover,
  :focus {
    outline: none;
    border: none;
  }
`;
