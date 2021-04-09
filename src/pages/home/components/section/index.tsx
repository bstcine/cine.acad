import React from 'react';
import Item from '../item';
import { NavLink } from 'umi';
import style from './style.less';
import Benefit from '@/pages/home/components/benefit';

const Section = ({ id, name, cards, tutors }: any) => {
  return (
    <section className={style.section}>
      <div className={style.mainTitle}>{name}</div>
      <div className={style.cardsWrapper}>
        {cards &&
          !!cards.length &&
          cards.map((card) => <Benefit key={card.title} title={card.title} desc={card.desc} img={card.img} />)}
      </div>

      <div className={style.subTitle}>
        师资实力
        <div className={style.titleBar}>
          <NavLink to={`/list?type=${id}`} className="btn btn-primary">
            更多TUTOR <i className="fas fa-chevron-right" />
          </NavLink>
        </div>
      </div>
      <div className={style.itemWrapper}>
        {tutors && !!tutors.length && tutors.map((tutor: any) => <Item key={tutor.id} {...tutor} />)}
      </div>
    </section>
  );
};
export default Section;
