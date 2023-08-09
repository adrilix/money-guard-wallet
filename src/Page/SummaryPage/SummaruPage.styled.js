import s from 'styled-components'
import bgImg from '../../svg/Gradient2.png'

export const Img = s.div`
  width: 100dvw;
  height: 100dvh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(16, 16, 16, 1);
`;

export const BoxDiagram = s.div`
display:flex;
gap:32px;
`

export const Statistics = s.h1`
color: var(--white);
font-size: 30px;
font-weight: 400;
`

export const BoxNavigation = s.div`
border-right: 1px solid var(--white-60, rgba(255, 255, 255, 0.60));
width: 480px`

export const Box = s.div`
display:flex;
gap:69px;
`

export const BoxStatistics = s.div`

`