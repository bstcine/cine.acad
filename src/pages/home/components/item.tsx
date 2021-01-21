import React from 'react';
import Card from './card';

const Item = ({ id, title, desc, tutors, moreBtn }: any) => {
  return (
    <div className="card home-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>

        {tutors && !!tutors.length && tutors.map((tutor: any) => <Card {...tutor} />)}

        <a href={`/list?type=${id}`} className="btn btn-primary btn-more">
          {`${moreBtn ? moreBtn : '更多TUTOR'} `}
          <i className="fas fa-angle-double-right"></i>
        </a>
      </div>
      <a href={`/list?type=${id}`} />
    </div>
  );
};
export default Item;
