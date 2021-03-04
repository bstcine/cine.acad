import React from 'react';
import './style.less';
import { NavLink } from 'umi';

const Header = ({ className = 'header-blue' }) => {
  return (
    <header className={className}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <NavLink className="navbar-brand" to="/">
            <img src={require('@/asset/logo_cine.svg')} alt="logo" />
          </NavLink>

          <div className="navbar-nav flex-row">
            <div className="navbar-nav flex-row">
              <NavLink exact to="/" className="nav-link px-3" activeClassName="active">
                首页
              </NavLink>
              <NavLink to="/list" className="nav-link px-3" activeClassName="active">
                名师堂
              </NavLink>
              <NavLink to="/about" className="nav-link px-3" activeClassName="active">
                常见问题
              </NavLink>
              <NavLink to="/latest" className="nav-link px-2" activeClassName="active">
                最新信息
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
