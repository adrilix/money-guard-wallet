import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000040;
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;

  z-index: 1000;
`;
export const ModalContent = styled.div`
  min-width: 64px;
  padding: 40px 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffff;
  background-color: #fcfcfc;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.034), 0 7px 5px rgba(0, 0, 0, 0.048),
    0 12px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.072),
    0 42px 33px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: 20px;
    min-width: 300px;
  }
`;

export const ButtonIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  :hover,
  :focus {
    outline: none;
    border: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
