import React from 'react';
import './style.less';

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
            <span>{o}</span>
          ))}
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
