import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '12px'};

  margin: 0;

  list-style: none;
  padding: 0;
  padding-left: 19px;
  padding-top: 42px;
  padding-bottom: 28px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  color: var(--white, #fbfbfb);
  font-family: 'Poppins Regular';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 27);

  svg {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    path {
      fill: rgb(255, 255, 255);
      fill-opacity: 0.4;
    }
  }

  &:active,
  &:hover {
    font-weight: 700;
    font-family: 'Poppins Bold';
    svg {
      background-color: rgba(255, 255, 255, 1);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      path {
        fill: #4a56e2;
        fill-opacity: 1;
      }
    }
  }
`;

export const StyledNavListMob = styled.ul`
  gap: 32px;
  padding: 0;
  display: inline-block;
  max-width: max-content;

  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const StyledNavLinkMob = styled(NavLink)`
  width: 44px;
  height: 44px;

  svg {
    width: 44px;
    height: 44px;
    border-radius: 8px;
  }
  path {
    fill: rgba(255, 255, 255, 0.4);
  }

  &:active,
  &:hover {
    svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      background-color: rgba(255, 255, 255, 1);
      path {
        fill: rgba(115, 74, 239, 1);
      }
    }
  }
`;
