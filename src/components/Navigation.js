import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className='navbar'>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/current'>Current Weather</Link>
      <Link to='/ninehours'>3 Hour Intervals</Link>
    </nav>
  </div>
)

export default Navigation;
