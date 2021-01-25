import React from 'react';
import './style.less';
const mp4 = require('./asset/Stanford.mp4').default;

export default () => {
  return (
    <div className="welcome-page">
      <header className="">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container d-flex align-items-center justify-content-between">
            <a className="navbar-brand h6" href="/">
              CINEAcademy
            </a>

            <div className="navbar-nav flex-row">
              <div className="navbar-nav flex-row">
                <a href="/" className="nav-link px-3">
                  首页
                </a>
                <a href="/list" className="nav-link px-2">
                  名师堂
                </a>
                <a href="/about" className="nav-link px-2">
                  常见问题
                </a>
                <a href="/latest" className="nav-link px-2">
                  最新信息
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="welcome-main">
        <div className="slogan">
          <h2>欢迎来到善恩学院！</h2>
          <p>在善恩学院，你可以</p>
          <p>找专业外教/中教在线一对一学习英语阅读&写作;</p>
          <p>找专业外教辅导美高课程和作业；</p>
          <p>找专业外教/中教升学顾问对升学文书进行指导修改；</p>
          <p>找专业外教/中教辅导SAT，ACT，托福，AP；</p>
          <p>找专业的外教辅导探究式讨论、演讲和辩论</p>
          <p>
            <a className="btn btn-primary btn-lg" href="/">
              前往善恩学院
            </a>
          </p>
        </div>
      </main>
      <footer className="py-3">
        <div className="container h6">Copyright 2014-2021 BSTCINE All Rights Reserved.</div>
      </footer>
      <img src={require('./asset/Stanford.jpg')} alt="" className="myVideo" />
      <video autoPlay muted loop playsInline className="myVideo">
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  );
};
