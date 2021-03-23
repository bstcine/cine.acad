import React from 'react';
import classnames from 'classnames';

const Footer = ({ type = 'white' }) => {
  return (
    <footer className={classnames('py-3', `footer-${type}`)}>
      <div className="container">Copyright 2014-2021 BSTCINE All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
