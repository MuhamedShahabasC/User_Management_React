import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h3>User Management</h3>
      <Navigation />
    </header>
  );
};

export default MainHeader;
