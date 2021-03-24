import classnames from 'classnames';
import React from 'react';
import style from './style.less';

const FooterInfo = () => {
  return (
    <footer className={classnames(style.footerInfo)}>
      <div className={classnames('container', style.container)}>
        <div className={style.vision}>
          <img src={require('@/asset/logo_cine2.svg')} alt="" />
          <div>
            善恩学院致力于把世界最好的教育资源，以专业、透明和亲民的方式提供给世界各地的华人学子，助力他们的求学之旅。
          </div>
        </div>
        <div className={style.linksContainer}>
          <div className={style.links}>
            <div>了解</div>
            <ul>
              <li>
                <a href="/about">关于善恩学院</a>{' '}
              </li>
              <li>
                <a href="/about#qa">学院规则</a>{' '}
              </li>
              <li>
                <a href="/qa">FAQ</a>{' '}
              </li>
            </ul>
          </div>
          <div className={style.links}>
            <div>参与</div>
            <ul>
              <li>
                <a href="//www.bstcine.com/en">加入善恩学院</a>
              </li>
              <li>
                <a href="/about">推荐给朋友</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfo;
