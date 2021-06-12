import style from './style.less';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classNames from 'classnames';
const mp4 = 'https://static-media.bstcine.com/2021/04/12/110022885ShpZ7Sz.mp4';

function Banner({ className }) {
  return (
    <div className={classNames(style.banner, className)}>
      <div className={style.back}>
        <img src={require('@/asset/school.jpg')} alt="" />
        <video autoPlay muted loop playsInline>
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      <div className={style.overlay} />

      <div className={style.text}>
        <Carousel
          autoPlay
          infiniteLoop
          axis={'vertical'}
          dynamicHeight={true}
          emulateTouch={false}
          centerMode={false}
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          interval={2000}
        >
          <div>
            顶尖顾问
            <br />
            成就你的名校梦想
          </div>
          <div>
            哈佛名师
            <br />
            引你走进学术殿堂
          </div>
          <div>
            数理化文史哲
            <br />
            全科覆盖
          </div>
          <div>
            结伴名师
            <br />
            终生受益
          </div>
          <div>
            汇聚天下名师
            <br />
            成就您的人生
          </div>
        </Carousel>
      </div>

      {/*<div className={style.slogan}>CINE ACADEMY</div>*/}
    </div>
  );
}

export default Banner;
