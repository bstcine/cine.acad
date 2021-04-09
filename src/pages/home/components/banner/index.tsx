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
        <img src={require('@/asset/school.jpg')} alt="" />
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
          transitionTime={500}
        >
          <p>
            走进名校
            <br />
            实力顾问
          </p>
          <p>
            学科辅导
            <br />
            能力提升
          </p>
          <p>
            助力学业
            <br />
            升学顾问
          </p>
          <p>
            好导师，
            <br />
            尽在善恩！
          </p>
        </Carousel>
      </div>

      {/*<div className={bannerStyle.slogan}>CINE ACADEMY</div>*/}
    </div>
  );
}

export default Banner;
