import styled from 'styled-components';
import { Form } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
`;
export const Heading = styled.h3`
  color: var(--font-color-dark);
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 400;
  margin: 0;
`;
export const TransactionTypeDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    font-family: Circe;
    font-weight: 700;
    font-size: 16px;
  }
`;

export const IncomeSpan = styled.span`
  color: ${props => (props.$active ? '#24cca8' : '#bdbdbd')};
`;
export const ExpenseSpan = styled.span`
  color: ${props => (props.$active ? '#ff6596' : '#bdbdbd')};
`;

export const BaseInput = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  color: #000;
  max-width: 100%;
  margin-bottom: 10px;
  width: 280px;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
  }

  &:focus {
    outline: none;

    + svg {
      fill: #4a56e2;
      transition: fill 150ms;
    }
  }

  + svg {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 10px;
    top: -1px;
    fill: #e0e0e0;
    transition: fill 150ms;
  }

  @media (min-width: 768px) {
    width: 409.5px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;

  ${BaseInput} {
    @media (max-width: 767px) {
      padding-left: 20px;
      text-align: left;
    }
  }
`;
export const TwoColumnRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 41px;
  max-width: 410px;

  input {
    width: 181px;
  }

  & > :first-child input {
    font-family: Circe;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3px;
    outline: none;

    @media (max-width: 767px) {
      text-align: left;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    max-width: 100%;
    width: 100%;

    input {
      width: 100%;
    }
  }
`;
export const CalendarWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    bottom: 8px;
    right: 14px;
    width: 24px;
    height: 24px;
    fill: #4a56e2;
  }

  @media (max-width: 767px) {
    svg {
      right: 20px;
    }
  }
`;
