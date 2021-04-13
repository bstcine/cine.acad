import style from './style.less';
import React from 'react';
import classnames from 'classnames';

const Highlights = ({ highlights, className }) => {
  return (
    <div className={classnames(style.highlights, className)}>
      {highlights.map((o: string) => (
        <span key={o}>{o}</span>
      ))}
    </div>
  );
};

export default Highlights;
