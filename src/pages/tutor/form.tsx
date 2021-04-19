import React, { useEffect, useState } from 'react';
import { Input, Button, DatePicker, message } from 'antd';
import style from './style.less';
import { APIURL_Acad_Relation, APIURL_Acad_Record_Create } from '@/APIConfig';
import classnames from 'classnames';
import { get, post } from '@/util/request';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
import local from 'antd/es/date-picker/locale/en_US.js';
local.lang.rangePlaceholder = ['Starting Time', 'Ending Time'];

export default ({ match, history }: any) => {
  const [duration, setDuration] = useState('0');
  const [content, setContent] = useState('');
  const [times, setTimes] = useState([]);
  const [relation, setRelation] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState('Submit');
  const relation_id = history.location.query.id;

  useEffect(() => {
    get(APIURL_Acad_Relation, { id: relation_id }).then((res: any) => {
      setRelation(res);
    });
  }, []);

  const onSubmit = (values: any) => {
    console.log('Success:', values);
    const [start, end] = times;
    if (!start || !end || !content) {
      alert('Please fill in the form');
      return;
    }
    post(APIURL_Acad_Record_Create, {
      teacher_id: relation.teacher_id,
      student_id: relation.student_id,
      start_at: start.format('x'),
      end_at: end.format('x'),
      content,
    }).then(() => {
      message.success('Submitted successfully!');
      setDisabled(true);
      setBtnText('Submitted!');
    });
  };

  if (!relation) return <div className={classnames('container', style.content)} />;

  return (
    <div className={classnames(style.content, 'container')}>
      <h2>
        Tutoring Log by {relation.teacher_nickname} for {relation.student_nickname}
      </h2>
      <p>Please enter in the following forms the information of your last session with your student.</p>
      <div className={style.itemControl}>
        <div className={classnames(style.label, style.labelDates)}>
          <span>Starting Time</span>
          <span>Ending Time</span>
        </div>
        <div className={style.item}>
          <RangePicker
            showTime
            style={{ width: '100%' }}
            format="YYYY-MM-DD HH:mm"
            locale={local}
            onChange={(dates) => {
              setTimes(dates);
              const [start, end] = dates;
              setDuration(end.diff(start, 'hours', true).toFixed(1));
            }}
            value={times}
          />
        </div>
        <div className={style.item}>{duration} Hours</div>
      </div>

      <div className={style.itemControl}>
        <div className={style.label}>Briefly describe this session's content and this student's performance.</div>
        <div className={classnames(style.item, style.itemTextArea)}>
          <TextArea
            rows={8}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />
        </div>
      </div>

      <div className={classnames(style.itemControl, style.itemControlCenter)}>
        <Button size="large" type="primary" style={{ width: '50%' }} disabled={disabled} onClick={onSubmit}>
          {btnText}
        </Button>
      </div>
    </div>
  );
};
