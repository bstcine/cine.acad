import { IRouteComponentProps } from 'umi';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return (
    <>
      <Header type="blue" />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
}
