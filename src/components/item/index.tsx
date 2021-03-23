import React from 'react';
import { NavLink } from 'umi';
import './style.less';
const defaultImg = require('@/asset/profile-default.jpg');

const Item = ({ id, name, img, remark_mentor, highlights, price, location }: any) => {
  return (
    <div className="item">
      <div className="item-cover" style={{ background: `url(${img || defaultImg}) no-repeat center/cover` }}></div>
      <div className="item-detail">
        <div className="item-name">{name}</div>
        <div className="item-desc">{remark_mentor}</div>
        <div className="item-highlights">
          {highlights.map((o: string) => (
            <span key={o}>{o}</span>
          ))}
        </div>
        <div className="item-location">
          <i className="fas fa-map-marker-alt" /> {location}
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
