import styled from "styled-components"

export const Section = styled.section`
padding-top: 20px;
color: #ffffff;
`;

export const StyledTable = styled.table`
margin: 0;
  width: 100%;
  border-radius: 8px;
  border-collapse: collapse;
  color: #ffffff;
  th,
  td {
    color: #fbfbfb; }
`;
 
export const Thead = styled.thead`
border-radius: 8px;
    tr th {
  background-color: rgba(82, 59, 126, 0.6);
  backdrop-filter: blur(50px);
  }
`;
export const Th = styled.th`
  padding: 16px;
`;

export const ThCategory = styled(Th)`
  border-radius: 8px 0 0 8px;
  text-align: left;
 
`;

export const ThSum = styled(Th)`
    border-radius: 0 8px 8px 0;
    text-align: right;
`;

export const Td = styled.td`
    padding: 16px;
    border-bottom: 1px solid #644E89;
`;

export const TdCategory = styled(Td)`
  text-align: left; 
`;

export const TdSum = styled(Td)`
    text-align: right;
`;

export const Total = styled.td`
    text-align: right;
    padding: 16px 16px 0 0;
        &.income {
    color: #FFB627;
    }

    &.expense {
    color: #FF868D;
    }
`;

export const Transaction = styled.td`
  text-align: left; 
   padding: 16px 0 0 16px;
`;
