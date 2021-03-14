import React from 'react';
import './style.less';
import { NavLink, history } from 'umi';
import URLParse from 'url-parse';

const Filter = ({ param_name, name, list }: any) => {
  const getURL = (param_name: string, id: string) => {
    const queryNow = history.location.query;
    const query = { ...queryNow, [param_name]: id };
    const queryStr = Object.entries(query)
      .map(([k, v]) => k + '=' + v)
      .join('&');
    const url = `/list?${queryStr}`;
    return url;
  };

  return (
    <div className="filter">
      <div className="filter-name">{name}</div>
      <div className="filter-tag">
        {list.map((o: any) => (
          <NavLink
            key={o.id}
            to={getURL(param_name, o.id)}
            activeClassName="active"
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              return URLParse(location.search, true).query[param_name] === o.id.toString();
            }}
          >
            {o.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Filter;
