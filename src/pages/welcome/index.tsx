import React from 'react';
import './style.less';
import Header from '@/components/header';
const mp4 = 'https://static.bstcine.com/2021/04/02/1439121Sj3mWee.mp4';
import { NavLink } from 'umi';
import Footer from '@/components/copyright';

export default () => {
  return (
    <div className="welcome-page">
      <Header type="blur" />
      <main className="welcome-main">
        <div className="slogan">
          <h2 className="text-center">欢迎来到善恩学院！</h2>
          <p className="slogan-blue">在善恩学院，你可以</p>
          <p>
            找专业外教/中教<span className="slogan-red">在线一对一</span>学习英语阅读&写作;
          </p>
          <p>
            找专业外教<span className="slogan-red">辅导美高课程和作业</span>；
          </p>
          <p>
            找专业外教/中教升学顾问对<span className="slogan-red">升学文书进行指导修改</span>；
          </p>
          <p>
            找专业外教/中教<span className="slogan-red">辅导SAT，ACT，托福，AP</span>；
          </p>
          <p>
            找专业的外教<span className="slogan-red">辅导探究式讨论、演讲和辩论</span>
          </p>
          <p className="text-center">
            <NavLink className="btn btn-primary btn-lg" to="/">
              前往善恩学院 <i className="fa fa-angle-double-right" aria-hidden="true" />
            </NavLink>
          </p>
        </div>
      </main>
      <Footer type="blur" />
      <img src={require('../../asset/Stanford.jpg')} alt="" className="myVideo" />
      <video autoPlay muted loop playsInline className="myVideo">
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  );
};
