import { Rate } from 'antd';
import React from 'react';

const desc = ['非常差', '差', '一般', '满意', '超赞'];
const Rater = ({ onChange, value }) => {
  return (
    <span>
      <Rate tooltips={desc} onChange={onChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      {value < 4 && value > 0 ? <span>(教研团队将介入调查)</span> : ''}
    </span>
  );
};
export default Rater;
