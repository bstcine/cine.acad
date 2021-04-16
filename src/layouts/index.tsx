import { IRouteComponentProps } from 'umi';
import React from 'react';
import Header from '@/components/header';
import Copyright from '@/components/copyright';
import FooterInfo from '@/components/footerInfo';
import Slogan from '@/pages/home/components/slogan';

export default function Layout({ children, location }: IRouteComponentProps) {
  const sloganPages = ['/list', '/about', '/latest', '/contact'];
  return (
    <>
      <Header type="blue" />
      <main className="content">{children}</main>
      {sloganPages.includes(location.pathname) && <Slogan />}
      <FooterInfo />
      <Copyright />
    </>
  );
}
