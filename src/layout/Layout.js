import { Outlet, Link } from "react-router-dom";

import classes from './Layout.module.css'

function Layout() {
  return (
    <div className={classes['app']}>
      <Outlet />
    </div>
  );
}

export default Layout;