import { IRouteComponentProps } from 'umi';
import React from 'react';
import Header from '@/components/header';
import Copyright from '@/components/copyright';
import FooterInfo from '@/components/footerInfo';

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return (
    <>
      <Header type="blue" />
      <main className="content">{children}</main>
      <FooterInfo />
      <Copyright />
    </>
  );
}
