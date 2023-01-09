import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #fcba03;
  padding: 20px;
  margin-bottom: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const NavItem = styled(NavLink)`
  color: #fcba03;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;

  &.active {
    background-color: black;
    box-shadow: 0px 4px 10px 0px rgba(181, 181, 181, 1);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: grey;
  }
`;
