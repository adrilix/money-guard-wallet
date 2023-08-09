
import styled from 'styled-components';

export const Total = styled.div`
  font-size: calc(14px + (100vw - 288px) * 0.01);
  font-weight: 700;
  color: var(--white);
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
  min-height: 288px;
  min-width: 288px;
  padding: 0px;
  flex: 1 1;
  align-self: start;
  justify-self: start;
      @media (max-width: 1023px) {
       min-height: 336px;
    min-width: 336px;
    }
       @media (max-width: 767px) {
    min-height: 280px;
    min-width: 280px;
  }
  canvas {
    width: 100% !important;
    height: 100% !important;
    max-width: 288px;
    max-height: 288px;
    @media (max-width: 1023px) {
       min-height: 336px;
    min-width: 336px;
    }
       @media (max-width: 767px) {
    min-height: 280px;
    min-width: 280px;
  }
  }


`;
