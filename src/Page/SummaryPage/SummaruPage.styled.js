import styled from 'styled-components'
import bgImg from '../../svg/Gradient2.png'

export const Img = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(16, 16, 16, 1);
`;

export const BoxDiagram = styled.div`
 @media screen and (min-width: 768px) {
display:flex;
gap:32px;
 }
`;

export const Statistics = styled.h1`
color: var(--white, #FBFBFB);
font-family: Poppins;
font-size: 30px;
font-weight: 400;
`

export const BoxNavigation = styled.div`
  @media screen and (min-width: 1280px) {
border-right: 1px solid var(--white-60, rgba(255, 255, 255, 0.60));
width: 480px;
}
`;

export const Box = styled.div`
@media screen and (min-width: 1280px) {
display:flex;
gap:69px;
}
`;

export const BoxStatistics = styled.div`

`