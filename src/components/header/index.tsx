import React from 'react';

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex align-items-center justify-content-between">
          <a className="navbar-brand" href="/">
            CINEAcademy
          </a>

          <div className="navbar-nav flex-row">
            <a href="/" className="nav-link px-3">
              首页
            </a>
            <a href="/list" className="nav-link px-2">
              名师堂
            </a>
            <a href="/about" className="nav-link px-2">
              常见问题
            </a>
            <a href="/latest" className="nav-link px-2">
              最新信息
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
