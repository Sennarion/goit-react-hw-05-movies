import { Outlet } from 'react-router-dom';
import { Header, Nav, NavItem } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
}

export default SharedLayout;
