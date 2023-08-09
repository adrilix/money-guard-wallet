import styled from 'styled-components';

export const StyledSideBox = styled.div`
  width: 100%;
  display: ${props => props.display || 'inline-block'};
  flex-direction: ${props => props.flexDirection || 'column'};
  gap: ${props => props.gap || 'none'};
  padding-left: ${props => props.padL || '0'};
  padding-right: ${props => props.padR || '0'};
  justify-content: ${props => props.jc || 'normal'};
  margin-bottom: ${props => props.marB || '15px'};
  max-width: ${props => props.w || '480px'};
`;

export const StyledNavAndBalanceBox = styled.div`
  width: 100%;
  max-width: ${props => props.maxW || '480px'};
`;
