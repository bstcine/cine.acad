import React from 'react';
import './style.less';

export default () => {
  return (
    <div className="container about-page">
      <h2>联系我们</h2>
      <p>
        善恩的学生遍布世界各地。我们在中国和美国设立办公室。为确保高效和无延迟的交流，请根据自身情况选择联系善恩学院的工作人员。
      </p>
      <br />
      <p style={{ textAlign: 'center' }}>
        中国和亚洲地区的用户，建议联系上海办公室刘老师。
        <br />
        电话和微信号同为 156 9218 8269 <br />
        <img src="https://static.bstcine.com/2021/04/10/111707330S9J16yK.jpg" alt="" width="220" />
      </p>
      <br />
      <p style={{ textAlign: 'center' }}>
        北美和欧洲地区的用户，建议联系美国办公室赵老师。
        <br />
        电话和微信号同为001-978 893 6581 <br />
        <img src="https://static.bstcine.com/2021/04/10/111707738SMcNn7Y.jpg" alt="" width="220" />
      </p>
    </div>
  );
};
