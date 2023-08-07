// import s from 'styled-components';
import styled from 'styled-components';

// export const Total = s.div`
// // position: fixed;
// // top: 290px;
// // left: 660px;
// color: var(--white, #FBFBFB);
// text-align: center;
// font-family: Poppins;
// font-size: 18px;
// font-weight: 600;`

// export const Diagramm = s.div`
// width: 288px;
// height: 288px;
// `

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
    min-height: 280px;
    min-width: 280px;
    max-height: 500px;
    @media (min-width: 768px) {
      max-width: calc(100vh - 80px - 214px - 114px);
      max-height: calc(100vh - 80px - 350px);
    }
  }
`;
