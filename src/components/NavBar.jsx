import Logo from './Logo';
import PropTypes from 'prop-types';

NavBar.propTypes = { children: PropTypes.node.isRequired };

export default function NavBar({ children }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      {children}
    </nav>
  );
}
