import style from './style.less';
import React from 'react';

const Benefit = ({ title, desc, img }) => {
  return (
    <div className={style.benefitWrapper}>
      <div className={style.benefit}>
        <div className={style.img} style={{ background: `url(${img}) no-repeat center/cover` }} />
        <div className={style.title}>{title}</div>
        <div className={style.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default Benefit;
