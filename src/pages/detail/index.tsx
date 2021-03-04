import React, { useState } from 'react';
// @ts-ignore
import Modal from 'react-modal';
import './style.less';

const Detail = () => {
  const [visible, setVisible] = useState(false);
  const o = {
    id: 1,
    name: '邱老师',
    price: '$200~$260/小时',
    desc: '善恩明星老师，辅导众多学生，是中国SAT培训界内凤毛麟角的英语基本功和教学技巧兼备的明星老师。',
    img: 'https://static.bstcine.com/2021/01/19/183355364SZ3CAR1.png',
    highlights: ['SAT', '托福', '动物农庄'],
  };

  const handleAskBtn = () => {
    setVisible(true);
  };

  return (
    <div className="container page-detail">
      <div className="card mb-3">
        <div className="card-body detail-top">
          <div className="detail-cover">
            <img src={o.img} alt="" />
          </div>
          <div className="detail-desc">
            <div className="detail-name">
              <h3>{o.name}</h3>
              <span className="detail-price">{o.price}</span>
            </div>
            <div className="detail-brief">{o.desc}</div>

            <div className="detail-history">
              <div>
                教授学科：
                <div className="detail-highlights">
                  {o.highlights.map((o: string) => (
                    <span key={o}>{o}</span>
                  ))}
                </div>
              </div>
              <div>教学背景：30人</div>
              <div>所在地/时区：波士顿,美国 / Eastern Standard Time (EST),UTC-5</div>
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
        <div className="card-header bg-white">最新信息</div>
        <div className="card-body">
          <p>俗话说，临阵磨枪不快也光！2021年度AMC10竞赛只剩最后一个月的备考时间！</p>

          <p>所有的知识点都get到了吗？</p>
          <p>每个原理都掌握了吗？</p>
          <p>每道真题都会做了吗？</p>
          <p>速度提上来了吗？</p>

          <p>考试不仅考知识和速度，还考细节。考前集训尤为重要，也许今天熟悉的这个原理，就是明天考场上的得分利器。</p>

          <p>
            为此，善恩诚邀北美奥数王牌教练，利用最后的时间，强化考试重难点、横扫知识盲区，亲传答题技巧，实现高效备考！向着Honor和Distinguished
            Honor奖项冲刺！！
          </p>

          <p>你准备好了吗？Ready? Go!</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header bg-white">{o.name}要说的话</div>
        <div className="card-body">
          <p>
            Hello
            大家好，自我介绍下，我2010年以优异的成绩毕业于上海外国语大学研究生院，在她看来，求学阶段以“优秀”通过英语专业八级、大三获上海市高级口译证书、首次参加SAT考试便获得了阅读和数学双800（满分）总分2270、首次托福“裸考”获得119分……
          </p>
          <p>
            邱老师的教学专业、细致、负责。她的授课深受学生喜爱。她的VIP学员覆盖了世界各地，包括波士顿、洛杉矶、克利夫兰、多伦多、温哥华、瑞士、香港。经她辅导的学生，有超过20人总分达到2200分以上，阅读达到700分以上。
          </p>
          <div className="ratio ratio-16x9">
            <iframe
              frameBorder="0"
              src="https://v.qq.com/txp/iframe/player.html?vid=v0035sxynaf"
              allowFullScreen
            ></iframe>
          </div>
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
