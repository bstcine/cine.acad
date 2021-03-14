import React from 'react';
import './style.less';
const defaultImg = require('@/asset/profile-default.png');

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
        <a className="item-more" href={`/detail?id=${id}`}>
          了解更多
        </a>
        <span className="item-price">{price}</span>
      </div>
      <a href={`/detail?id=${id}`} />
    </div>
  );
};

export default Item;
