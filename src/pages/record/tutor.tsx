import React, { useEffect, useState } from 'react';
import { Form, Input, Button, DatePicker, message } from 'antd';
import style from './style.less';
import axios from 'axios';
import { APIURL_Content_Student, APIURL_Acad_Record_Create } from '@/APIConfig';
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
  const [form] = Form.useForm();
  const [duration, setDuration] = useState('0');
  const [student, setStudent] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState('Submit');
  const student_id = history.location.query.sid;
  const teacher_id = match.params.tid;

  useEffect(() => {
    axios.get(`${APIURL_Content_Student}?id=` + student_id).then((res) => {
      setStudent(res.data.result);
    });
  }, []);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    axios
      .post(`${APIURL_Acad_Record_Create}`, {
        teacher_id,
        student_id,
        start_at: values.time[0].format('x'),
        end_at: values.time[1].format('x'),
        content: values.content,
      })
      .then(() => {
        message.success('submit success!');
        setDisabled(true);
        setBtnText('submitted!');
      })
      .catch((err) => {
        console.log('err', err);
        message.error(err.message);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log('onValuesChange:', changedValues, allValues);
    if ('time' in changedValues) {
      const [start, end] = changedValues.time;
      setDuration(end.diff(start, 'hours', true).toFixed(1));
    }
  };

  return (
    <div className="container">
      <div className={style.title}>{student ? student.nickname + "'s" : ''} tutorial records</div>
      <div className={style.content}>
        <Form
          {...layout}
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <Form.Item
            label="Time arrange"
            name="time"
            rules={[{ required: true, message: 'Please fill time arrange!' }]}
            extra={`${duration} Hours`}
          >
            <RangePicker
              showTime
              style={{ width: '100%' }}
              onOpenChange={(a) => {
                console.log(a);
                const time = form.getFieldValue('time');
                console.log(time);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Course Content"
            name="content"
            rules={[{ required: true, message: 'Please input course content!' }]}
          >
            <TextArea rows={10} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" disabled={disabled}>
              {btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
