
import styled from 'styled-components';

export const Total = styled.div`
  font-size: calc(14px + (100vw - 288px) * 0.01);
  font-weight: 700;
  color: var(--white, #fbfbfb);
  font-style: normal;
  line-height: normal;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Diagramm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0px;
  flex: 1 1;
  align-self: start;
  justify-self: start;
  canvas {
    width: 100% !important;
    height: 100% !important;
    max-width: 390px;
    min-height: 288px;
    min-width: 288px;
    max-height: 500px;
    @media (min-width: 768px) {
      max-width: calc(100vh - 80px - 214px - 114px);
      max-height: calc(100vh - 80px - 350px);
    }
  }
`;
