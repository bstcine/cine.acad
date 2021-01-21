import React from 'react';
import classNames from 'classnames';
import './style.less';

const Filter = ({ id, name, list, current }: any) => {
  return (
    <div className="filter">
      <div className="filter-name">{name}：</div>
      <div className="filter-tag">
        {list.map((o: any) => (
          <a key={o.id} href={`/list?${id}=${o.id}`} className={classNames({ active: current === o.id })}>
            {o.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Filter;
