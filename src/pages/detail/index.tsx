import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import s from './style.less';
import { history } from 'umi';
import { APIURL_Acad_Tutor, APIURL_Acad_Evaluations } from '@/APIConfig';
import { get } from '@/util/request';
import { Rate } from 'antd';
import classnames from 'classnames';
import Highlights from '@/components/highlights';
const defaultImg = require('@/asset/profile-default.jpg');

const Detail = () => {
  const [tutor, setTutor] = useState(null);
  const [evaluations, setEvaluations] = useState([]);
  const teacher_id = history.location.query.id;
  useEffect(() => {
    get(APIURL_Acad_Tutor, { id: teacher_id }).then((res) => {
      setTutor(res);
      if (res.user_id) {
        get(APIURL_Acad_Evaluations, { id: res.user_id }).then((res) => {
          setEvaluations(res);
        });
      }
    });
  }, []);

  const [visible, setVisible] = useState(false);
  console.log('history.location.query.id', history.location.query);

  const handleAskBtn = () => {
    setVisible(true);
  };

  if (!tutor) return <div className="container">loading</div>;

  return (
    <div className={classnames('container', s.pageDetail)}>
      <div className={s.crumbs}>
        <a href="/">首页</a> / <span>讲师详情</span>
      </div>
      <div className={s.top}>
        <div className={s.coverWrapper}>
          <div className={s.cover} style={{ background: `url(${tutor.img || defaultImg}) no-repeat center/cover` }} />
        </div>
        <div className={s.textWrapper}>
          <div className={s.name}>{tutor.name}</div>
          <div className={s.brief}>{tutor.remark_mentor}</div>
          <Highlights className={s.highlights} highlights={tutor.highlights} />
          <div className={s.location}>
            <i className="fas fa-map-marker-alt" /> 所在地/时区：{tutor.location}
          </div>
        </div>
        <div className={s.more}>
          <span className={s.price}>{tutor.price}</span>
          <div className={s.contactWrapper}>
            <button className="btn btn-primary" onClick={handleAskBtn}>
              <i className="fab fa-weixin"></i> 立即咨询
            </button>
          </div>
        </div>
      </div>

      <div className={s.detailWrapper}>
        <div className={s.detailTitle}>教员简介</div>
        <div className={s.detailBody}>
          {!!tutor.video && (
            <div className={classnames(s.video, 'ratio ratio-16x9')}>
              <video src={tutor.video} preload="auto" controls controlsList="nodownload"></video>
            </div>
          )}
          <div className={s.txt} dangerouslySetInnerHTML={{ __html: tutor.introduce }}></div>
        </div>
      </div>

      <div className={s.latestWrapper}>
        <div className={s.latestTitle}>最新消息</div>
        {tutor.latest_news ? (
          <div className={s.latestBody} dangerouslySetInnerHTML={{ __html: tutor.latest_news }}></div>
        ) : (
          <div className={classnames(s.latestBody, s.latestNone)}>暂无消息</div>
        )}
      </div>

      <div className={s.evaluateWrapper}>
        <div className={s.evaluateTitle}>学员评价</div>
        {evaluations && evaluations.length > 0 ? (
          <div className={s.evaluateBody}>
            {evaluations.map((o) => (
              <div key={o.id} className={s.evaluate}>
                <div className={s.evaluateMeta}>
                  <span>{o.student_nickname}</span>
                  <span>{o.create_at.substring(0, 10)}</span>
                </div>
                <div className={s.evaluateDesc}>{o.content}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className={classnames(s.evaluateBody, s.evaluateNone)}>暂无评论</div>
        )}
      </div>

      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={{
          content: {
            width: 350,
            height: 320,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          },
        }}
      >
        <div>
          <h2>扫描微信二维码</h2>
          <button
            type="button"
            className="btn-close"
            style={{
              position: 'absolute',
              right: '15px',
              top: '15px',
            }}
            onClick={() => setVisible(false)}
          />
          <span>微信号: BSTCINE02</span>
          <img
            className="m-auto d-block"
            style={{ width: 200, height: 200 }}
            src="https://www.bstcine.com/asset/image/qrcode_bst02.e826d3fe.jpg"
            alt=""
          />
        </div>
      </Modal>
    </div>
  );
};

export default Detail;
