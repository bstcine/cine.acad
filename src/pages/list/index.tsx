import React from 'react';
import Filter from './components/filter';
import './style.less';
import filters from './components/filters';
import tutors from './components/tutors';
import Item from '../../components/item';

const List = () => {
  const types = filters[0];
  const tags = filters[1];
  return (
    <div className="container">
      <div className="filter_bar">
        <Filter key={types.id} id={types.id} name={types.name} list={types.list} current={'1'} />
        <Filter key={tags.id} id={tags.id} name={tags.name} list={tags.list} current={'2'} />
      </div>
      <div className="list">
        {tutors.map((o) => (
          <Item key={o.id} {...o} />
        ))}
      </div>
    </div>
  );
};

export default List;
