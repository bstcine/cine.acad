import classnames from 'classnames';
import React from 'react';
import style from './style.less';

const FooterInfo = () => {
  return (
    <footer className={classnames('py-3', style.footerInfo)}>
      <div className="container">
        <div className={style.vision}>
          <img src={require('@/asset/logo_cine2.svg')} alt="" />
          <span>
            善恩学院致力于把世界最好的教育资源，以专业、透明和亲民的方式提供给世界各地的华人学子，助力他们的求学之旅。
          </span>
        </div>
        <div className={style.linksContainer}>
          <div className="links">
            <span>了解</span>
            <ul>
              <li>关于善恩学院</li>
              <li>学院规则</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="links">
            <span>参与</span>
            <ul>
              <li>加入善恩学院</li>
              <li>推荐给朋友</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfo;
