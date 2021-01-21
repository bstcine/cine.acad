import React from 'react';
import './style.less';

const Card = ({ name, desc, img }: any) => {
  return (
    <div className="tutor-card">
      <div className="tutor-card-body">
        <img src={img} alt="" className="tutor-avatar" />
        <strong className="tutor-name">{name}</strong>
        <br />
        <span className="tutor-desc">{desc}</span>
      </div>
    </div>
  );
};

export default Card;
