import useClass from '@/hooks/useClass';
import React from 'react';
import './style.less';

export default () => {
  useClass('#root', 'full-height');
  return (
    <div className="container welcome-page">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h2>善恩英语启动善恩学院！</h2>
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
      </div>
    </div>
  );
};
