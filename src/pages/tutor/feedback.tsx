import React, { useEffect, useState } from 'react';
import style from './style.less';
import Rater from '@/components/rater';
import { message, Input } from 'antd';
import classnames from 'classnames';
import { Button } from 'antd';
import { get, post } from '@/util/request';
import { APIURL_Acad_Record, APIURL_Acad_Record_Update } from '@/APIConfig';
import moment from 'moment-timezone';
const { TextArea } = Input;

export default ({ history }) => {
  const [rate, setRate] = useState(4);
  const [evaluation, setEvaluation] = useState('');
  const [record, setRecord] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState('提交');
  const [teacher, setTeacher] = useState({});
  const record_id = history.location.query.id;
  useEffect(() => {
    get(APIURL_Acad_Record, { id: record_id }).then((res: any) => {
      setRecord(res);
      setEvaluation(res.evaluation);
      setRate(res.rate);
      setTeacher(res.teacher);
    });
  }, []);

  const submit = () => {
    post(`${APIURL_Acad_Record_Update}`, {
      id: record_id,
      rate,
      evaluation,
    }).then(() => {
      message.success('提交成功');
      setDisabled(true);
      setBtnText('提交成功');
    });
  };

  const dateFriendly = (start_at, end_at, timezone) => {
    let end_at_format = 'YYYY-MM-DD HH:mm';
    const start_at_date = moment(start_at, 'x').tz(timezone);
    const end_at_date = moment(end_at, 'x').tz(timezone);
    if (start_at_date.format('YYYY-MM-DD') === end_at_date.format('YYYY-MM-DD')) {
      end_at_format = 'HH:mm';
    }
    return start_at_date.format('YYYY-MM-DD HH:mm') + ' ~ ' + end_at_date.format(end_at_format);
  };

  return (
    <div className={classnames(style.content, 'container')}>
      <h2>{`${teacher.nickname}老师`}的上课反馈</h2>
      <div className={style.itemControl}>
        <div className={style.label}>上课时间</div>
        <div className={style.item}>北京时间 {dateFriendly(record.start_at, record.end_at, 'Asia/Shanghai')}</div>
        <div className={style.item}>纽约时间 {dateFriendly(record.start_at, record.end_at, 'America/New_York')}</div>
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
        <div className={style.label}>给老师的上课质量打分</div>
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
  );
};
