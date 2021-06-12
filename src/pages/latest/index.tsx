import React from 'react';
import Header from '@/components/header';
import Banner from '@/pages/home/components/banner';
import { useScroll } from 'ahooks';
import Slogan from '@/pages/home/components/slogan';
import FooterInfo from '@/components/footerInfo';
import Copyright from '@/components/copyright';
import style from './style.less';
import classnames from 'classnames';
const defaultImg = require('@/asset/profile-default.jpg');

export default () => {
  const scroll = useScroll(document);
  const img = 'https://static.bstcine.com/2021/03/24/101411533SdBsRur.jpeg';
  const video = 'https://static.bstcine.com/2021/06/11/135643526SSYt4B2.mp4';
  return (
    <>
      <Header type={scroll.top > 30 ? 'white' : 'transparent'} fixed={true} />
      <Banner className={style.latestBanner} />
      <main className={style.latestPage}>
        <div className="container">
          <section>
            <div className={style.subject}>最新课程</div>
            <div className={style.featured}>
              <div className={style.left}>
                <div className={style.title}>SAT历史阅读长线强化班</div>
                <div className={classnames(style.video, 'ratio ratio-16x9')}>
                  <video src={video} preload="auto" controls controlsList="nodownload" />
                </div>
                <div className={style.btnWrapper}>
                  <a className="btn btn-primary" href="https://sat.bstcine.com/" target="_blank">
                    了解更多 {'>'}
                  </a>
                </div>
              </div>

              <div className={style.right}>
                <div className={style.meta}>
                  <div
                    className={style.avatar}
                    style={{ background: `url(${img || defaultImg}) no-repeat center/cover` }}
                  ></div>
                  <div className={style.name}>
                    授课老师：
                    <a href="https://sat.bstcine.com/" target="_blank">
                      邱巍楠
                    </a>
                  </div>
                </div>
                <div className={style.descList}>
                  <div className={style.descItem}>
                    <div className={style.descName}>适合人群：</div>
                    <div className={style.descDetail}>
                      美高、国内国际学校、国际课程在读学生和其他所有美本方向的学生，9/10/11
                      年级，在1年内有计划参加SAT考试，目前托福成绩100+，希望冲击SAT高分的学生。
                    </div>
                  </div>
                  <div className={style.descItem}>
                    <div className={style.descName}>授课方式：</div>
                    <div className={style.descDetail}>Zoom在线班课，不超过25人</div>
                  </div>
                  <div className={style.descItem}>
                    <div className={style.descName}>课时：</div>
                    <div className={style.descDetail}>一共13次课，每次1小时45分钟。</div>
                  </div>
                  <div className={style.descItem}>
                    <div className={style.descName}>课程简介：</div>
                    <div className={style.descDetail}>
                      历史文献阅读是SAT阅读中最难的篇章之一，也是众多中国学生SAT高分之路上的最大障碍。中国学生普遍不熟悉历史文献中涉及的话题，对这些文献使用的古雅繁复的风格不适应，对文章中大量出现的“熟词僻义”也不了解。究其根本原因，是这方面的文章读得太少太粗。
                      <br />
                      本课程精选《联邦党人文集》中的部分篇章、《华盛顿推选演说》、《肯塔基州决议》、《弗吉尼亚州决议》等篇目进行逐字逐句式精讲，帮助学生从文字层面、逻辑层面和思想层面提高历史文献的阅读和鉴赏能力，为SAT高分奠定坚实的能力基础。
                      <br />
                      <a href="https://mp.weixin.qq.com/s/vdtr8-M1UNVpJijfbDsMZQ">点击，了解本课程更多详情。</a>
                    </div>
                  </div>
                  <div className={style.descItem}>
                    <div className={style.descName}>费用：</div>
                    <div className={style.descDetail}>2730美元（合计120美元/小时）</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            {/*<div className={style.subject}>已开课程</div>*/}
            {/*<div className={style.courseCardList}>*/}
            {/*  <div className={style.courseCardWrapper}>*/}
            {/*    <div className={style.courseCard}>*/}
            {/*      <div*/}
            {/*        className={style.avatar}*/}
            {/*        style={{ background: `url(${img || defaultImg}) no-repeat center/cover` }}*/}
            {/*      />*/}
            {/*      <div className={style.right}>*/}
            {/*        <div className={style.title}>AP微积分</div>*/}
            {/*        <div className={style.secTitle}>Dr Bill波士顿大学数学系博士</div>*/}
            {/*        <div className={style.mainDesc}>*/}
            {/*          函数和极限(Functions and limits),导数( Derivatives),积分(Integrals),多项式估算和级数(Polynomial*/}
            {/*          APproximations andSeries)*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className={style.courseCardWrapper}>*/}
            {/*    <div className={style.courseCard}>*/}
            {/*      <div*/}
            {/*        className={style.avatar}*/}
            {/*        style={{ background: `url(${img || defaultImg}) no-repeat center/cover` }}*/}
            {/*      />*/}
            {/*      <div className={style.right}>*/}
            {/*        <div className={style.title}>AP微积分</div>*/}
            {/*        <div className={style.secTitle}>Dr Bill波士顿大学数学系博士</div>*/}
            {/*        <div className={style.mainDesc}>*/}
            {/*          函数和极限(Functions and limits),导数( Derivatives),积分(Integrals),多项式估算和级数(Polynomial*/}
            {/*          APproximations andSeries)*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className={style.courseCardWrapper}>*/}
            {/*    <div className={style.courseCard}>*/}
            {/*      <div*/}
            {/*        className={style.avatar}*/}
            {/*        style={{ background: `url(${img || defaultImg}) no-repeat center/cover` }}*/}
            {/*      />*/}
            {/*      <div className={style.right}>*/}
            {/*        <div className={style.title}>AP微积分</div>*/}
            {/*        <div className={style.secTitle}>Dr Bill波士顿大学数学系博士</div>*/}
            {/*        <div className={style.mainDesc}>*/}
            {/*          函数和极限(Functions and limits),导数( Derivatives),积分(Integrals),多项式估算和级数(Polynomial*/}
            {/*          APproximations andSeries)*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className={style.courseCardWrapper}>*/}
            {/*    <div className={style.courseCard}>*/}
            {/*      <div*/}
            {/*        className={style.avatar}*/}
            {/*        style={{ background: `url(${img || defaultImg}) no-repeat center/cover` }}*/}
            {/*      />*/}
            {/*      <div className={style.right}>*/}
            {/*        <div className={style.title}>AP微积分</div>*/}
            {/*        <div className={style.secTitle}>Dr Bill波士顿大学数学系博士</div>*/}
            {/*        <div className={style.mainDesc}>*/}
            {/*          函数和极限(Functions and limits),导数( Derivatives),积分(Integrals),多项式估算和级数(Polynomial*/}
            {/*          APproximations andSeries)*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className={style.moreWrapper}>
              <a className="btn btn-primary" href="/">
                更多课程 {'>'}
              </a>
            </div>
          </section>
        </div>
      </main>
      <Slogan />
      <FooterInfo />
      <Copyright />
    </>
  );
};
