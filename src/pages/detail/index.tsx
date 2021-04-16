import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import s from './style.less';
import { history } from 'umi';
import { APIURL_Acad_Tutor, APIURL_Acad_Evaluations } from '@/APIConfig';
import { get } from '@/util/request';
import classnames from 'classnames';
import Highlights from '@/components/highlights';
const defaultImg = require('@/asset/profile-default.jpg');

const Detail = () => {
  const [tutor, setTutor] = useState(null);
  const [evaluations, setEvaluations] = useState([]);
  const teacher_id = history.location.query.id;
  useEffect(() => {
    window.scrollTo(0, 0);
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

  if (!tutor) return <div className={classnames('container', s.pageDetail)} />;

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

      <Modal isOpen={visible} onRequestClose={() => setVisible(false)} className={s.modalContent}>
        <div className={s.modalText}>
          <h4>联系我们</h4>
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
          <p>
            中国和亚洲地区的用户，建议联系上海办公室刘老师。
            <br />
            电话和微信号同为 156 9218 8269 <br />
            <img src="https://static.bstcine.com/2021/04/16/095217979SsesMdf.jpg" alt="上海办公室刘老师" />
          </p>
          <p>
            北美和欧洲地区的用户，建议联系美国办公室赵老师。
            <br />
            电话和微信号同为001-978 893 6581 <br />
            <img src="https://static.bstcine.com/2021/04/16/095217393SgsVxjG.jpg" alt="美国办公室赵老师" />
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Detail;
