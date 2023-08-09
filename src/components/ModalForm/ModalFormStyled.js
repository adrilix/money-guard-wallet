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
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;
  padding: 15px;
  z-index: 1000;

  .category {
    top: 44px;
  }

  @media (max-width: 767px) {
    padding: 0px;
  }
`;
export const ModalContent = styled.div`
  height: 540px;
  width: 511px;
  padding: 41px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#3f2e96, #5f478c);
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: calc(20 * (100vw / 480));
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

  & svg {
    color: #fbfbfb;
    width: 20px;
    height: 20px;
    position: relative;
  }

  :hover,
  :focus {
    outline: none;
    border: none;
  }
  @media (max-width: 767px) {
    & svg {
      display: none;
    }
  }
`;
