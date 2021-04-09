import React, { useEffect, useState } from 'react';
import './style.less';
import Section from './components/section';
import { APIURL_Acad_Home } from '@/APIConfig';
import Header from '@/components/header';
import { useScroll } from 'ahooks';
import FooterInfo from '@/components/footerInfo';
import Copyright from '@/components/copyright';
import { get } from '@/util/request';
import Banner from './components/banner';
import Slogan from './components/slogan';

export default () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    get(APIURL_Acad_Home).then((res) => {
      // @ts-ignore
      setArr(res);
    });
  }, []);

  const scroll = useScroll(document);

  return (
    <>
      <Header type={scroll.top > 30 ? 'white' : 'transparent'} fixed={true} />
      <Banner />
      <main className="home-content">
        <div className="container">
          {arr.map((o) => (
            <Section key={o.id} {...o} />
          ))}
        </div>
      </main>
      <Slogan />
      <FooterInfo />
      <Copyright />
    </>
  );
};
