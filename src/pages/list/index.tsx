import React, { useEffect, useState } from 'react';
import s from './style.less';
import { tags_by_id } from './components/filters';
import { useLocation } from 'umi';
import { APIURL_Acad_List } from '@/APIConfig';
import { get } from '@/util/request';
import classnames from 'classnames';
import Filter from './components/filter';
import Item from '@/components/item';

const List = () => {
  const [tutors, setTutors] = useState([]);
  const [types, setTypes] = useState([]);
  const tags = [
    { id: '1', name: '一年级' },
    { id: '2', name: '二年级' },
    { id: '3', name: '三年级' },
    { id: '4', name: '四年级' },
    { id: '5', name: '五年级' },
    { id: '6', name: '六年级' },
    { id: '7', name: '七年级' },
    { id: '8', name: '八年级' },
    { id: '9', name: '九年级' },
    { id: '10', name: '十年级' },
    { id: '11', name: '十一年级' },
    { id: '12', name: '十二年级' },
    { id: '13', name: '本科' },
    { id: '14', name: '研究生' },
  ];
  const location = useLocation();
  let errorMsg = '暂无匹配的导师，请选择其他筛选条件';
  useEffect(() => {
    get(APIURL_Acad_List).then((res) => {
      const { tutors, types } = res;
      setTutors(tutors);
      setTypes(types);
    });
  }, []);
  const filterTutor = (tutors: Array<any>, query: any) => {
    const { type, tag } = query;
    const typeObj = types.find((o) => o.id.toString() === type);
    if (type && tag) {
      if (typeObj && typeObj.tag_ids && !typeObj.tag_ids.includes(tag)) {
        const len = typeObj.tag_ids.length;
        errorMsg = `${typeObj.name}通常适用于${tags_by_id[typeObj.tag_ids[0]]}~${
          tags_by_id[typeObj.tag_ids[len - 1]]
        }的学生，请选择其他筛选条件`;
        return [];
      }
    }
    if (types.length && type) {
      return tutors.filter((o) => typeObj.teacher_ids.includes(o.id));
    }
    if (tag) {
      let teacher_ids: string[] = [];
      types.forEach((obj) => {
        if (obj.tag_ids && obj.tag_ids.includes(tag)) {
          teacher_ids = [...teacher_ids, ...obj.teacher_ids];
        }
      });
      return tutors.filter((o) => teacher_ids.includes(o.id));
    }
    return tutors;
  };

  // @ts-ignore
  const _tutors = filterTutor(tutors, location.query);

  return (
    <div className={classnames('container', s.container)}>
      <div className={s.filterBar}>
        <Filter param_name="type" name="方向" list={types} />
        <Filter param_name="tag" name="年级" list={tags} />
      </div>
      {!!_tutors.length ? (
        <div className={s.list}>
          {_tutors.map((o) => (
            <Item key={o.id} {...o} />
          ))}
        </div>
      ) : (
        <div className={s.listEmpty}>{errorMsg}</div>
      )}
    </div>
  );
};

export default List;
