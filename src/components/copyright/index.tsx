import React from 'react';
import classnames from 'classnames';
import './style.less';

const Copyright = ({ type = 'white' }) => {
  return (
    <footer className={classnames('py-3', `copyright copyright-${type}`)}>
      <div className="container">Copyright 2014-2021 BSTCINE All Rights Reserved.</div>
    </footer>
  );
};

export default Copyright;
