import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {

  return (
    <>
      <div className="header">
        <NavLink to="/rgb/255/0/0">Red</NavLink>
        <NavLink to="/rgb/0/255/0">Green</NavLink>
        <NavLink to="/rgb/0/0/255">Blue</NavLink>
      </div>
    </>
  );
}
