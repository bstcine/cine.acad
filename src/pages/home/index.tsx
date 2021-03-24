import React, { useEffect, useState } from 'react';
import './style.less';
import bannerStyle from './banner.less';
import Row from '../home/components/row';
import axios from 'axios';
import { APIURL_Acad_Home } from '@/APIConfig';
import Header from '@/components/header';
const mp4 = require('@/asset/Stanford.mp4').default;
import { useScroll } from 'ahooks';
import FooterInfo from '@/components/footerInfo';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Copyright from '@/components/copyright';

export default () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios.get(APIURL_Acad_Home).then((res) => {
      setArr(res.data.result);
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
              万卷可破
              <br />
              良师难觅
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
      <FooterInfo />
      <Copyright />
    </>
  );
};
