
import React, { useRef, useState } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import './Navbar2.css';
import Dropdown from './Dropdown';

export default function Navbar2() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const iconRef = useRef();

  const handleDropdownItemClick = () => {
    setOpen(false);
    
    console.log('Dropdown item clicked');
  };

  const handleIconClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="nav2">
        <Link to="/dashboard" className="site-title">
          Otracker
        </Link>
        <ul>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
          <CustomLink onClick={handleIconClick} innerRef={iconRef}>
            <CgProfile className="icon" />
          </CustomLink>
        </ul>
      </nav>
      {open && (
        <div ref={menuRef}>
          <Dropdown onItemClick={handleDropdownItemClick} />
        </div>
      )}
    </div>
  );
}

function CustomLink({ to, children, innerRef, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''} ref={innerRef}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}