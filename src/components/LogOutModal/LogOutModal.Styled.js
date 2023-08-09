import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  z-index: 1000;
  background-color: #4d2367;
  border-radius: 20px;
`;

export const Title = styled.h2`
  color: var(--white, #fbfbfb);
  text-align: center;
  /* font-family: Poppins; */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  /* font-family: Poppins; */
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: var(--button-hover-color, rgb(67 68 156));
    color: var(--white, #fbfbfb);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    background-color: var(--button-hover-color, rgb(67 68 156));
    color: var(--white, #fbfbfb);
    transform: scale(1.05);
  }
`;
