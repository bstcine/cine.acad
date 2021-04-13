import React from 'react';
import './style.less';
import { NavLink } from 'umi';
import classnames from 'classnames';

const Header = ({ type = 'white', fixed = false }) => {
  return (
    <header className={classnames(`header-${type}`, { 'header-fixed': fixed })}>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <a className="navbar-brand" href="/">
            <img
              src={type === 'white' ? require('@/asset/logo_cine2_blue.svg') : require('@/asset/logo_cine2.svg')}
              alt="logo"
            />
          </a>

          <div className="navbar-nav flex-row">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              首页
            </NavLink>
            <NavLink to="/latest" className="nav-link" activeClassName="active">
              最新课程
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              常见问题
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
