import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <div className="navbar">
      <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
      <NavLink className="nav-link" to="/Contact">Contacts</NavLink>
      <NavLink className="nav-link" to="/Statistic">Statistic</NavLink>
    </div>
  );
};
