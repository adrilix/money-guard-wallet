import styled from 'styled-components'

export const Img = styled.div`

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

@media screen and (max-width: 767px) {
  padding-bottom: 8px;
}
@media screen and (min-width: 768px) {
padding-bottom: 20px;
}

`

export const BoxNavigation = styled.div`
  @media screen and (min-width: 1280px) {
border-right: 1px solid var(--white-60, rgba(255, 255, 255, 0.60));
width: 480px;
}
`;

export const Box = styled.div`
@media screen and (min-width: 1280px) {
padding-top: 32px;
display:flex;
gap:69px;
}
`;

export const BoxStatistics = styled.div`

`