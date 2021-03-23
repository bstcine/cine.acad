import React, { useEffect, useState } from 'react';
import './style.less';
import bannerStyle from './banner.less';
import Row from '../home/components/row';
import axios from 'axios';
import { APIURL_Acad_Home } from '@/APIConfig';
import Header from '@/components/header';
const mp4 = require('@/asset/Stanford.mp4').default;
import { useScroll } from 'ahooks';
import Footer from '@/components/footer';

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
          <video autoPlay muted loop playsInline>
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
        <div className={bannerStyle.overlay} />
        <div className={bannerStyle.text}>
          {/*万卷可破*/}
          {/*<br />*/}
          {/*良师难觅*/}
          {/*<br />*/}
          {/*你和良师的距离<br/>*/}
          {/*只差一个善恩学院*/}
          在家里
          <br />
          学美高课程
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
      <Footer />
    </>
  );
};
