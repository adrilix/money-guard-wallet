import styled from 'styled-components';
import Datetime from 'react-datetime';

export const StyledDatetime = styled(Datetime)`
  input {
    border: none;
    border-bottom: 1px solid #ffffff66;

    font-size: 18px;
    font-weight: 400;
    color: #fbfbfb;
    background-color: transparent;
    padding-left: 20px;
    padding-bottom: 2px;
    cursor: pointer;

    &:focus-visible {
      outline: 0 !important;
    }
  }

  &.rdt {
    position: relative;
  }

  &.rdtPicker {
    position: absolute;
    min-width: 250px;
    padding: 4px;
  }

  .rdtPicker td.rdtToday:before {
    border-bottom: 7px solid #4a56e2;
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #4a56e2;
  }

  @media (max-width: 767px) {
    input {
      padding-left: 20px;
    }
  }
`;
