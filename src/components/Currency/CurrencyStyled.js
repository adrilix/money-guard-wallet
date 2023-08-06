import styled from 'styled-components';
import { Oval } from 'react-loader-spinner';

export const StyledBox = styled.div`
  display: flex;
  align-items: ${props => props.ai || 'normal'};
  justify-content: ${props => props.jc || 'normal'};
  width: 100%;
  max-width: 480px;
  height: 300px;
`;

export const StyledTable = styled.table`
  max-height: 170px;
  width: 100%;
  border-collapse: collapse;
  thead {
    background: rgba(255, 255, 255, 0.2);
  }

  th {
    color: var(--white, #fbfbfb);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(24 / 16);
    text-align: center;
    padding: 16px 25px;
    &:last-child {
      padding-right: 131px;
    }
    &:first-child {
      padding-left: 62px;
    }
  }
  td {
    color: var(--white, #fbfbfb);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(24 / 16);
    text-align: center;
    padding: 16px 25px;
    &:last-child {
      padding-right: 131px;
    }
    &:first-child {
      padding-left: 62px;
    }
  }
`;

export const StyledOval = styled(Oval)`
  filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
`;
