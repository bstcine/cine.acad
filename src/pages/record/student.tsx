import React, { useEffect, useState } from 'react';
import style from './style.less';
import Rater from '@/components/rater';
import { message, Input } from 'antd';
import classnames from 'classnames';
import { Button } from 'antd';
import axios from 'axios';
import { APIURL_Acad_Record, APIURL_Acad_Record_Update } from '@/APIConfig';
import moment from 'moment-timezone';
const { TextArea } = Input;

export default ({ history }) => {
  const [rate, setRate] = useState(4);
  const [evaluation, setEvaluation] = useState('');
  const [record, setRecord] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState('提交');
  const record_id = history.location.query.id;
  useEffect(() => {
    axios.get(`${APIURL_Acad_Record}?id=` + record_id).then((res) => {
      const obj = res.data.result;
      setRecord(obj);
      setEvaluation(obj.evaluation);
      setRate(obj.rate);
    });
  }, []);

  const submit = () => {
    axios
      .post(`${APIURL_Acad_Record_Update}`, {
        id: record_id,
        rate,
        evaluation,
      })
      .then(() => {
        message.success('提交成功');
        setDisabled(true);
        setBtnText('提交成功');
      })
      .catch((err) => {
        console.log('err', err);
        message.error(err.message);
      });
  };

  return (
    <div className="container">
      <div className={style.title}>xxx老师的上课反馈</div>
      <div className={style.content}>
        <div className={style.itemControl}>
          <div className={style.label}>上课时间</div>
          <div className={style.item}>
            纽约时间 {moment(record.start_at, 'x').tz('America/New_York').format('YYYY-MM-DD HH:mm:ss')} ~{' '}
            {moment(record.end_at, 'x').tz('America/New_York').format('YYYY-MM-DD HH:mm:ss')}
          </div>
          <div className={style.item}>
            上海时间 {moment(record.start_at, 'x').tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')} ~{' '}
            {moment(record.end_at, 'x').tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')}
          </div>
        </div>
        <div className={style.itemControl}>
          <div className={style.label}>授课时长</div>
          <div className={style.item}>
            {moment(record.end_at, 'x').diff(moment(record.start_at, 'x'), 'hours', true).toFixed(1)}小时
          </div>
        </div>
        <div className={style.itemControl}>
          <div className={style.label}>授课内容</div>
          <div className={style.item}>{record.content}</div>
        </div>
        <div className={style.itemControl}>
          <div className={style.label}>上课质量打分</div>
          <div className={style.item}>
            <Rater onChange={setRate} value={rate} />
          </div>
        </div>
        <div className={style.itemControl}>
          <div className={style.label}>给老师的评语</div>
          <div className={classnames(style.item, style.itemTextArea)}>
            <TextArea
              rows={8}
              onChange={(e) => {
                setEvaluation(e.target.value);
              }}
              value={evaluation}
            />
          </div>
        </div>
        <div className={classnames(style.itemControl, style.itemControlCenter)}>
          <Button size="large" type="primary" style={{ width: '50%' }} onClick={submit} disabled={disabled}>
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};
