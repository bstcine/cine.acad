import React from 'react';
import Item from '@/components/item';

const Row = ({ id, name, remark, tutors, moreBtn }: any) => {
  return (
    <div className="card home-card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text" dangerouslySetInnerHTML={{ __html: remark }}></div>

        <div className="list-wrapper">
          {tutors && !!tutors.length && tutors.map((tutor: any) => <Item key={tutor.id} {...tutor} />)}
        </div>

        <a href={`/list?type=${id}`} className="btn btn-primary btn-more">
          {`${moreBtn ? moreBtn : '更多TUTOR'} `}
          <i className="fas fa-angle-double-right"></i>
        </a>
      </div>
    </div>
  );
};
export default Row;
