import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './style.less';
import { history } from 'umi';
import { APIURL_Acad_Tutor, APIURL_Acad_Evaluations } from '@/APIConfig';
import { get } from '@/util/request';
import { Rate } from 'antd';

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

  if (!tutor)
    return (
      <div className="container page-detail">
        <div className="card mb-3">loading</div>
      </div>
    );

  return (
    <div className="container page-detail">
      <div className="card mb-3">
        <div className="card-body detail-top">
          <div className="detail-cover">
            <img src={tutor.img} alt="" />
          </div>
          <div className="detail-desc">
            <div className="detail-name">
              <h3>{tutor.name}</h3>
              <span className="detail-price">{tutor.price}</span>
            </div>
            <div className="detail-brief">{tutor.remark_mentor}</div>

            <div className="detail-history">
              <div className="detail-highlights">
                {tutor.highlights.map((o: string) => (
                  <span key={o}>{o}</span>
                ))}
              </div>
              <div>所在地/时区：{tutor.location}</div>
            </div>
            <div className="contact-container">
              <button className="btn btn-primary btn-lg px-5 float-end" onClick={handleAskBtn}>
                <i className="fab fa-weixin"></i> 立即咨询
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header bg-white">教员简介</div>
        <div className="card-body">
          <div dangerouslySetInnerHTML={{ __html: tutor.introduce }}></div>
          {!!tutor.video && (
            <div className="ratio ratio-16x9">
              <video src={tutor.video} preload="auto" controls controlsList="nodownload"></video>
            </div>
          )}
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header bg-white">最新信息</div>
        <div className="card-body">
          <div dangerouslySetInnerHTML={{ __html: tutor.latest_news }}></div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header bg-white">学员评价</div>
        <div className="card-body">
          <ul className="evaluates">
            {evaluations && evaluations.length > 0 ? (
              evaluations.map((o) => (
                <li key={o.id} className="evaluate">
                  <Rate disabled defaultValue={o.rate} />
                  <span> {o.student_nickname}</span>
                  <br />
                  <span className="evaluate-desc">{o.content}</span>
                </li>
              ))
            ) : (
              <li>
                <span className="evaluate-desc">暂无评论</span>
              </li>
            )}
          </ul>
        </div>
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
