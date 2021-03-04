import React from 'react';
import './style.less';
import { NavLink } from 'umi';

const Item = ({ id, name, img, desc, highlights, price }: any) => {
  return (
    <div className="item">
      <div className="item-cover">
        <img src={img} alt="" />
      </div>
      <div className="item-detail">
        <div className="item-name">{name}</div>
        <div className="item-desc">{desc}</div>
        <div className="item-highlights">
          {highlights.map((o: string) => (
            <span key={o}>{o}</span>
          ))}
        </div>
        <NavLink className="item-more" to={`/detail?id=${id}`}>
          了解更多
        </NavLink>
        <span className="item-price">{price}</span>
      </div>
      <NavLink to={`/detail?id=${id}`} />
    </div>
  );
};

export default Item;
