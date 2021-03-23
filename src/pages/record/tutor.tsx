import React, { useState } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import style from './style.less';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default () => {
  const [form] = Form.useForm();
  const [duration, setDuration] = useState('0');

  const onFinish = (values: any) => {
    console.log('Success:', values);
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
      <div className={style.title}>Richard's tutorial records</div>
      <div className="content">
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
