import bannerStyle from '@/pages/home/banner.less';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// const mp4 = 'https://static.bstcine.com/2021/04/02/1439121Sj3mWee.mp4';
const mp4 = 'https://static.bstcine.com/2021/04/09/142029275STtRV0u.mp4';

function Banner() {
  return (
    <div className={bannerStyle.banner}>
      <div className={bannerStyle.back}>
        {/*<img src={require("@/asset/Stanford.jpg")} alt=""/>*/}
        <video autoPlay muted loop playsInline>
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      <div className={bannerStyle.overlay} />

      {/*<div className={bannerStyle.text}>*/}
      {/*  <Carousel*/}
      {/*    autoPlay*/}
      {/*    infiniteLoop*/}
      {/*    emulateTouch={false}*/}
      {/*    centerMode={false}*/}
      {/*    showStatus={false}*/}
      {/*    showArrows={false}*/}
      {/*    showThumbs={false}*/}
      {/*    showIndicators={false}*/}
      {/*  >*/}
      {/*    <p>*/}
      {/*      哈佛、MIT*/}
      {/*      <br/>*/}
      {/*      哥伦比亚*/}
      {/*    </p>*/}
      {/*    <p>*/}
      {/*      汇聚*/}
      {/*      <br/>*/}
      {/*      世界名师*/}
      {/*    </p>*/}
      {/*    <p>*/}
      {/*      在家里*/}
      {/*      <br/>*/}
      {/*      学美高课程*/}
      {/*    </p>*/}
      {/*    <p>*/}
      {/*      学科辅导*/}
      {/*      <br/>*/}
      {/*      升学顾问*/}
      {/*    </p>*/}
      {/*    <p>*/}
      {/*      阅读和写作*/}
      {/*      <br/>*/}
      {/*      能力提升*/}
      {/*    </p>*/}
      {/*  </Carousel>*/}
      {/*</div>*/}

      {/*<div className={bannerStyle.slogan}>CINE ACADEMY</div>*/}
    </div>
  );
}

export default Banner;
