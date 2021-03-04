import React from 'react';
import Item from '@/components/item';
import { NavLink } from 'umi';

const Row = ({ id, title, desc, tutors, moreBtn }: any) => {
  return (
    <div className="card home-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>

        <div className="list-wrapper">
          {tutors && !!tutors.length && tutors.map((tutor: any) => <Item key={tutor.id} {...tutor} />)}
        </div>

        <NavLink to={`/list?type=${id}`} className="btn btn-primary btn-more">
          {`${moreBtn ? moreBtn : '更多TUTOR'} `}
          <i className="fas fa-angle-double-right"></i>
        </NavLink>
      </div>
    </div>
  );
};
export default Row;
