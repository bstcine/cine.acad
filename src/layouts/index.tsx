import { IRouteComponentProps } from 'umi';
import React from 'react';
import Header from '@/components/header';
import ScrollToTop from '@/components/scroll';
import Copyright from '@/components/copyright';

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return (
    <>
      <ScrollToTop />
      <Header type="blue" />
      <main className="content">{children}</main>
      <Copyright />
    </>
  );
}
