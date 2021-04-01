import React, { useEffect, useState } from 'react';
import { Form, Input, Button, DatePicker, message } from 'antd';
import style from './style.less';
import axios from 'axios';
import { APIURL_User_Student, APIURL_Acad_Record_Create } from '@/APIConfig';
import moment from 'moment-timezone';
import classnames from 'classnames';
import { get, post } from '@/util/request';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default ({ match, history }: any) => {
  const [duration, setDuration] = useState('0');
  const [content, setContent] = useState('');
  const [times, setTimes] = useState([]);
  const [student, setStudent] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState('Submit');
  const student_id = history.location.query.sid;
  const teacher_id = match.params.tid;

  useEffect(() => {
    get(APIURL_User_Student, { id: student_id }).then((res: any) => {
      setStudent(res);
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
      teacher_id,
      student_id,
      start_at: start.format('x'),
      end_at: end.format('x'),
      content,
    }).then(() => {
      message.success('submit success!');
      setDisabled(true);
      setBtnText('submitted!');
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log('onValuesChange:', changedValues, allValues);
    if ('time' in changedValues) {
      const [start, end] = changedValues.time;
    }
  };

  return (
    <div className="container">
      <div className={style.title}>{student ? student.nickname + "'s" : ''} tutorial records</div>
      <div className={style.content}>
        <div className={style.itemControl}>
          <div className={style.label}>Time arrange</div>
          <div className={style.item}>
            <RangePicker
              showTime
              style={{ width: '100%' }}
              // onOpenChange={(a) => {
              //   console.log(a);
              //   const time = form.getFieldValue('time');
              //   console.log(time);
              // }}
              onChange={(dates) => {
                console.log(dates);
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
          <div className={style.label}>Course Content</div>
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
    </div>
  );
};
