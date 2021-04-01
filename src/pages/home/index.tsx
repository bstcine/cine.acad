import React, { useEffect, useState } from 'react';
import './style.less';
import bannerStyle from './banner.less';
import Row from '../home/components/row';
import { APIURL_Acad_Home } from '@/APIConfig';
import Header from '@/components/header';
const mp4 = require('@/asset/Stanford.mp4').default;
import { useScroll } from 'ahooks';
import FooterInfo from '@/components/footerInfo';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Copyright from '@/components/copyright';
import { get } from '@/util/request';

export default () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    get(APIURL_Acad_Home).then((res) => {
      setArr(res);
    });
  }, []);

  const scroll = useScroll(document);

  return (
    <>
      <Header type={scroll.top > 30 ? 'white' : 'transparent'} fixed={true} />
      <div className={bannerStyle.banner}>
        <div className={bannerStyle.back}>
          <img src={require('../../asset/Stanford.jpg')} alt="" />
          <video autoPlay muted loop playsInline>
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
        <div className={bannerStyle.overlay} />

        <div className={bannerStyle.text}>
          <Carousel
            autoPlay
            infiniteLoop
            emulateTouch={false}
            centerMode={false}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
          >
            <p>
              哈佛、MIT
              <br />
              哥伦比亚
            </p>
            <p>
              汇聚
              <br />
              世界名师
            </p>
            <p>
              在家里
              <br />
              学美高课程
            </p>
            <p>
              学科辅导
              <br />
              升学顾问
            </p>
            <p>
              阅读和写作
              <br />
              能力提升
            </p>
          </Carousel>
        </div>

        <div className={bannerStyle.slogan}>CINE ACADEMY</div>
      </div>
      <main className="content">
        <div className="container">
          {arr.map((o) => (
            <Row key={o.id} {...o} />
          ))}
        </div>
      </main>
      <div className="more-infos">
        <div className="container">
          <div className="more-info">
            <div className="icon">
              <i className="far fa-handshake"></i>
            </div>
            <div className="info">
              <p>善恩所有课程和服务高度透明。所有一对一服务，任意时间无条件退款。</p>
              <p>适合，则合作；不适合，则离开。</p>
              <p>不强求，来去自由；不欺骗，没有伤害。</p>
            </div>
          </div>
        </div>
      </div>
      <FooterInfo />
      <Copyright />
    </>
  );
};
