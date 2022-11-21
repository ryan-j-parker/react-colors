import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {

  return (
    <>
      <div className="header">
        <NavLink className="color" to="/rgb/255/0/0" style={{ color: 'red' }}>Red</NavLink>
        <NavLink className="color" to="/rgb/255/128/0" style={{ color: 'orange' }}>Orange</NavLink>
        <NavLink className="color" to="/rgb/255/255/0" style={{ color: 'yellow' }}>Yellow</NavLink>
        <NavLink className="color" to="/rgb/0/255/0" style={{ color: 'green' }}>Green</NavLink>
        <NavLink className="color" to="/rgb/0/0/255" style={{ color: 'blue' }}>Blue</NavLink>
        <NavLink className="color" to="/rgb/127/0/255" style={{ color: 'purple' }}>Purple</NavLink>
        <NavLink className="color" to="/rgb/255/0/127" style={{ color: 'pink' }}>Pink</NavLink>
      </div>
    </>
  );
}
