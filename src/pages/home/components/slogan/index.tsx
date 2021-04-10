import React from 'react';
import style from './style.less';
import classnames from 'classnames';

function Slogan() {
  return (
    <div className={style.slogan} style={{ background: `url(${require('./star.jpg')}) no-repeat center/cover` }}>
      <div className={classnames('container', style.container)}>
        <div className={style.img}>
          <img src={require('@/asset/logo_cine2.svg')} alt="" />
        </div>
        <div className={style.title}>善恩所有课程和服务高度透明。所有一对一服务，任意时间无条件退款。</div>
        <div className={style.text}>
          适合，则合作；不适合，则离开。
          <br />
          不强求，来去自由；不欺骗，没有伤害。
        </div>
        <div className={style.author}>—— 善恩学院，与你一起仰望知识的天空！</div>
      </div>
    </div>
  );
}

export default Slogan;
