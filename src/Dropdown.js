

import React from "react";
import "./Dropdown.css";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ onItemClick }) => {
    const navigate = useNavigate();
  return (
    <div className="dropdown">
      <ul className="w">
        <li onClick={() => onItemClick()}><CgProfile className="icon" />  Profile</li>
        <li onClick={() => onItemClick()}><IoIosSettings className="icon"/> Setting</li>
        <li onClick={() => onItemClick()}><RiLogoutCircleRLine /> <Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Dropdown;
