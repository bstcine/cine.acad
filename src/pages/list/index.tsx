import React from 'react';
import Filter from './components/filter';
import './style.less';
import filters from './components/filters';
import tutors from './components/tutors';
import Item from '../../components/item';
import { useLocation } from 'umi';

const List = () => {
  const types = filters[0];
  const tags = filters[1];

  const location = useLocation();

  const filterTutor = (tutors: Array<any>, query: any) => {
    const { type, tag } = query;
    return tutors.filter((o) => {
      const type_flag = type ? o.type_ids && o.type_ids.includes(type) : true;
      const tag_flag = tag ? o.tag_ids && o.tag_ids.includes(tag) : true;
      return type_flag && tag_flag;
    });
  };

  const _tutors = filterTutor(tutors, location.query);

  return (
    <div className="container">
      <div className="filter_bar">
        <Filter
          key={types.param_name}
          param_name={types.param_name}
          name={types.name}
          list={types.list}
          current={'1'}
        />
        <Filter key={tags.param_name} param_name={tags.param_name} name={tags.name} list={tags.list} current={'2'} />
      </div>
      {!!_tutors.length ? (
        <div className="list">
          {_tutors.map((o) => (
            <Item key={o.id} {...o} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

const Empty = () => {
  return <div className="list-empty">暂无匹配的导师，请选择其他筛选条件</div>;
};

export default List;
