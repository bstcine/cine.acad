import React, { useEffect, useState } from 'react';
import './style.less';
import Row from './components/row';
import axios from 'axios';
import { APIURL_Acad_Home } from '@/APIConfig';

export default () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios.get(APIURL_Acad_Home).then((res) => {
      setArr(res.data.result);
    });
  }, []);

  return (
    <div className="container">
      {arr.map((o) => (
        <Row key={o.id} {...o} />
      ))}
    </div>
  );
};
