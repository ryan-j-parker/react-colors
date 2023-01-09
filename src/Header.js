import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {

  return (
    <>
      <div className="header">
        <NavLink className="color" to="/rgb/255/0/0" style={{ color: 'rgb(255, 0, 0)' }}>Red</NavLink>
        <NavLink className="color" to="/rgb/255/128/0" style={{ color: 'rgb(255, 128, 0)' }}>Orange</NavLink>
        <NavLink className="color" to="/rgb/255/255/0" style={{ color: 'rgb(255, 255, 0)' }}>Yellow</NavLink>
        <NavLink className="color" to="/rgb/0/255/0" style={{ color: 'rgb(0, 255, 0)' }}>Green</NavLink>
        <NavLink className="color" to="/rgb/0/0/255" style={{ color: 'rgb(0, 0, 255)' }}>Blue</NavLink>
        <NavLink className="color" to="/rgb/127/0/255" style={{ color: 'rgb(127, 0, 255)' }}>Purple</NavLink>
        <NavLink className="color" to="/rgb/255/0/127" style={{ color: 'rgb(255, 0, 127)' }}>Pink</NavLink>
      </div>
    </>
  );
}
