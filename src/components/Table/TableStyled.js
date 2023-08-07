import styled from 'styled-components';

export const Section = styled.section`
  /* height: 100vh;
  width: 100%;

  background-size: 100% 100%; */
  /* background-position: center; */
`;


export const TableContainer = styled.div`
    padding: 20px;
    ul {
        margin: 0;
        padding: 0;
    }
    li { 
        list-style: none;
    }

    li:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-radius: 8px;
  overflow: auto;
  border-collapse: collapse;
  color: #ffffff;
  th,
  td {
    color: #fbfbfb;
  }


  @media screen and (max-width: 767.5px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.10);

    th,
    td {
    padding: 12px 20px;
  }

    th:not(:last-child),
    td:not(:last-child) {
    border-bottom: 1px solid #6E60AF;   
    }
  tbody {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 613.5px;
  }
  th {
    display: flex;
    flex-direction: column;
 
  }
    }
  
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  width: 704px;
}
  
  @media screen and (min-width: 1280px) {
  margin-left: 68px;
  width: 715px;
    }
`;

export const Thead = styled.thead`  
@media screen and (max-width: 767.5px) {
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
     @media screen and (min-width: 768px) {
        background: rgba(82, 59, 126, 0.60);
        backdrop-filter: blur(50px);
        border-radius: 8px;
        
     }
`;

export const Th = styled.th`
    text-align: left;
    @media screen and (min-width: 768px) {
    padding-right: 32px;
    width: ${props => props.columnWidth}px;
         }
`;

export const ThDate = styled(Th)`
  @media screen and (min-width: 768px) {
  border-radius: 8px 0 0 8px;
  padding: 16px 32px 16px 20px;
  }
`;

export const Td = styled.td`
    text-align: left;

    @media screen and (max-width: 767.5px) {
    text-align: right;
    display: flex;
    justify-content: flex-end;

    height: 21.6px;
    

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
    &:last-child {
        height: 24.8px;
    }
    }
    @media screen and (min-width: 768px) {
        border-bottom: 1px solid #4E4677;
        }
`;

export const ThLast = styled.th`
    border-radius: 0 8px 8px 0;
`;

export const TdSvg = styled(Td)`
    width: 20px;
    svg{
    display: flex;
    align-items: center;
    justify-content: center;
    }
`;

export const TdDate = styled(Td)`
    padding-left: 20px;

`;

export const TdDel = styled(Td)`
    padding: 12px 12px 12px 0;
    text-align: right;
    width: 65px;
`;

export const CommonBtnStyles = styled.button`
  color: #ffffff;
    text-align: center;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  border: none;
  cursor: pointer;
`;

export const AddBtn = styled(CommonBtnStyles)`
display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--button-gradient, linear-gradient(167deg, #FFC727 0%, #9E40BA 61.46%, #7000FF 90.54%));
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.20);
  svg {
    width: 28px;
    height: 28px;
  }
`;

export const BtnRightCorner = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
`;

export const EditBtn = styled(CommonBtnStyles)`
color: #ACA7BD;
background: none;
padding: 0;
`;

export const DeleteBtn = styled(CommonBtnStyles)`
  border-radius: 18px;
  padding: 4px 12px;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--button-gradient, linear-gradient(167deg, #FFC727 0%, #9E40BA 61.46%, #7000FF 90.54%));
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.20);
`;

