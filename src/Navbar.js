import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-titel">
        Otracker
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/signup">Sign Up</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
