import styled from 'styled-components';
import { Oval } from 'react-loader-spinner';

export const StyledBox = styled.div`
  font-family: 'Poppins Regular', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${props => props.maxw || '480px'};
`;

export const StyledTable = styled.div`
  max-height: 170px;
  width: 100%;
`;

export const StyledTableHead = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding-left: ${props => props.padL || '62px'};
  margin-bottom: ${props => props.marB || '24px'};
`;

export const StyledThBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 16px 0;
`;

export const StyledTdBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: start;
  gap: 50px;
`;

export const StyledTBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${props => props.padL || '62px'};
  gap: ${props => props.gap || '24px'};
  margin-bottom: 6px;
`;

export const StyledTh = styled.span`
  color: var(--white, #fbfbfb);
  font-family: 'Poppins SemiBold';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(16 / 24);
  text-align: center;
  &:last-child {
  }
  &:first-child {
  }
`;

export const StyledTd = styled.span`
  display: inline-block;
  color: var(--white, #fbfbfb);
  font-family: 'Poppins Regular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(24 / 16);
  text-align: center;
  width: 74px;
  &:last-child {
    width: 42px;
  }
  &:first-child {
    width: 73px;
  }
`;

export const StyledOval = styled(Oval)`
  filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
`;

export const StyledImg = styled.img`
  display: inline-block;
  width: ${props => props.w || '480px'};
`;

// 96
