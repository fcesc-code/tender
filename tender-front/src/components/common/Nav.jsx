import React, { useState } from 'react';
import ROUTES from '../../routes/ROUTES';
import { Link } from 'react-router-dom';
import './nav.sass';

console.log('FIRST', ROUTES);

function Nav() {
  const [menu] = useState(ROUTES.ROUTES.filter(route=>route.nav)); 

  return (
    <div className="nav">
      <ul>
        {menu.map(route => { 
          return (<li key={route.title}><Link to={route.path}>{route.title}</Link></li>)
        })}
      </ul>
    </div>
  );
}

export default Nav;