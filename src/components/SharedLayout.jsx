import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
function SharedLayout(props) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
SharedLayout.propTypes = {};
export default SharedLayout;
