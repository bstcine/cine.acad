import React, { useState } from 'react';
import style from './style.less';
import Rater from '@/components/rater';
import { Input } from 'antd';
import classnames from 'classnames';
import { Button } from 'antd';

const { TextArea } = Input;

export default () => {
  const [rate, setRate] = useState(4);
  const [evaluation, setEvaluation] = useState('');

  return (
    <div className="container">
      <div className={style.title}>xxx老师的上课反馈</div>
      <div className={style.content}>
        <div className={style.itemControl}>
          <div className={style.label}>上课时间</div>
          <div className={style.item}>2021-03-12 12:00:00 ~ 2021-03-12 14:00:00</div>
        </div>
        <div className={style.itemControl}>
          <div className={style.label}>授课时长</div>
          <div className={style.item}>1.5小时</div>
        </div>
        <div className={style.itemControl}>
          <div className={style.label}>授课内容</div>
          <div className={style.item}>
            ●
            自主学习能力较好的孩子，建议每次花30-40分钟，观看视频课程、做笔记并完成相应的练习，如若每周可以至少学习2-3次，保持一定的频率和学习强度，效果更佳。
            ●
            如果孩子希望有互动，有老师的启发点拨，也可以考虑善恩在线私塾服务，由高水平的北美导师1对1远程授课。具体可以咨询Alice老师（微信号iyuan1023)。
          </div>
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
            <TextArea rows={8} onChange={setEvaluation} value={evaluation} />
          </div>
        </div>
        <div className={classnames(style.itemControl, style.itemControlCenter)}>
          <Button size="large" type="primary" style={{ width: '50%' }}>
            提交
          </Button>
        </div>
      </div>
    </div>
  );
};
