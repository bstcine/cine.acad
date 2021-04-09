import React from 'react';
import style from './style.less';

function Slogan() {
  return (
    <div className={style.slogan} style={{ background: `url(${require('./slogan.jpg')}) no-repeat center/cover` }}>
      <div className="container">
        {/*<div className={style.slogan} >*/}
        {/*  <div className="info">*/}
        {/*    <p>善恩所有课程和服务高度透明。所有一对一服务，任意时间无条件退款。</p>*/}
        {/*    <p>适合，则合作；不适合，则离开。</p>*/}
        {/*    <p>不强求，来去自由；不欺骗，没有伤害。</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default Slogan;
