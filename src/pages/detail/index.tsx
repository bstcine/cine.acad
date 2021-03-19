import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './style.less';
import { history } from 'umi';
import axios from 'axios';
import { APIURL_Acad_Tutor } from '@/APIConfig';

const Detail = () => {
  const [tutor, setTutor] = useState(null);
  useEffect(() => {
    axios.get(`${APIURL_Acad_Tutor}?id=` + history.location.query.id).then((res) => {
      setTutor(res.data.result);
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
            <li>
              <span className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <span> 杨同学 - 哈佛大学</span>
              <br />
              <span className="evaluate-desc">
                不同于其他培训机构的泛泛而谈，邱老师对 SAT 掌握的深度及广度令人赞叹，课程讲解的也很清晰...
              </span>
            </li>
            <li>
              <span className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <span> Tony同学 - 纽约大学、SAT满分</span>
              <br />
              <span className="evaluate-desc">
                6年级前，我孩子英语偶尔会考不及格，通过在善恩学习的一年半时间，成绩逐渐提高，从C班一路升到A班，现在8年级，偶尔还能在学校英语测试中考入班级前1、2名，成绩上去了，孩子找回了自信心，英语学习的热情也很高涨，我也感觉孩子未来可期！希望孩子继续加油！11月份的小托福和2月份的托福考试考出好成绩！
              </span>
            </li>
            <li>
              <span className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <span> Jack Ma - 托福110</span>
              <br />
              <span className="evaluate-desc">我家闺女在学托福课程，她说讲得特别好，老师声音特别甜美，很喜欢！</span>
            </li>
            <li>
              <span className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <span> 杨同学 - 哈佛大学</span>
              <br />
              <span className="evaluate-desc">
                6年级前，我孩子英语偶尔会考不及格，通过在善恩学习的一年半时间，成绩逐渐提高，从C班一路升到A班，现在8年级，偶尔还能在学校英语测试中考入班级前1、2名，成绩上去了，孩子找回了自信心，英语学习的热情也很高涨，我也感觉孩子未来可期！希望孩子继续加油！11月份的小托福和2月份的托福考试考出好成绩！
              </span>
            </li>
            <li>
              <span className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <span> 杨同学 - 哈佛大学</span>
              <br />
              <span className="evaluate-desc">
                不同于其他培训机构的泛泛而谈，邱老师对 SAT 掌握的深度及广度令人赞叹，课程讲解的也很清晰...
              </span>
            </li>
            <li>
              <span className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <span> 杨同学 - 哈佛大学</span>
              <br />
              <span className="evaluate-desc">
                不同于其他培训机构的泛泛而谈，邱老师对 SAT 掌握的深度及广度令人赞叹，课程讲解的也很清晰...
              </span>
            </li>
            <li>
              <span className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <span> 杨同学 - 哈佛大学</span>
              <br />
              <span className="evaluate-desc">
                不同于其他培训机构的泛泛而谈，邱老师对 SAT 掌握的深度及广度令人赞叹，课程讲解的也很清晰...
              </span>
            </li>
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
