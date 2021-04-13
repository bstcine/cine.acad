import React from 'react';
import { NavLink } from 'umi';
import style from './style.less';
import classnames from 'classnames';
import Highlights from '@/components/highlights';
const defaultImg = require('@/asset/profile-default.jpg');

const Item = ({ id, name, img, remark_mentor, highlights, price, location }: any) => {
  return (
    <div className={style.item}>
      <div className={style.coverWrapper}>
        <div className={style.cover} style={{ background: `url(${img || defaultImg}) no-repeat center/cover` }} />
      </div>
      <div className={style.detail}>
        <div className={style.name}>{name}</div>
        <Highlights highlights={highlights} className={style.highlights} />

        <div className={style.price}>{price}</div>

        <div className={style.desc}>{remark_mentor}</div>
        <div className={style.location}>
          <i className="fas fa-map-marker-alt" /> {location}
        </div>
        <NavLink className={classnames(style.more, 'btn btn-outline-primary')} to={`/detail?id=${id}`}>
          了解更多
        </NavLink>
      </div>
    </div>
  );
};

export default Item;
