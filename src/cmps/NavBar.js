import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { toggalMenu } from '../actions/AppAction';

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <div className="navbar">
      <NavLink className="nav-link" activeClassName="active" exact to="/" onClick={() => dispatch(toggalMenu())}>Home</NavLink>
      <NavLink className="nav-link" to="/Contact" onClick={() => dispatch(toggalMenu())}>Contacts</NavLink>
      <NavLink className="nav-link" to="/Statistic" onClick={() => dispatch(toggalMenu())}>Statistic</NavLink>
    </div>
  );
};
export default Navbar;
