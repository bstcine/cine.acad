import React from 'react';
import Item from '@/components/item';

const Row = ({ id, name, remark, tutors, moreBtn }: any) => {
  return (
    <section>
      <h2>{name}</h2>
      <div className="card-text" dangerouslySetInnerHTML={{ __html: remark }}></div>

      <div className="list-wrapper">
        {tutors && !!tutors.length && tutors.map((tutor: any) => <Item key={tutor.id} {...tutor} />)}
      </div>

      <a href={`/list?type=${id}`} className="btn btn-primary btn-more">
        {`${moreBtn ? moreBtn : '更多TUTOR'} `}
        <i className="fas fa-angle-double-right"></i>
      </a>
    </section>
  );
};
export default Row;
