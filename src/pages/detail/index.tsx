import React, { useState } from 'react';
// @ts-ignore
import Modal from 'react-modal';
import './style.less';

const Detail = () => {
  const [visible, setVisible] = useState(false);
  const o = {
    id: 1,
    name: '邱老师',
    price: '$200/小时',
    desc: '善恩明星老师，辅导众多学生，一句话抓重点简介',
    img: 'https://static.bstcine.com/2021/01/19/183355364SZ3CAR1.png',
    highlights: ['SAT满分', '哈佛', '终身教授'],
  };

  const handleAskBtn = () => {
    setVisible(true);
  };

  return (
    <div className="container page-detail">
      <div className="container">
        <div className="row gx-4">
          <div className="col-lg-8">
            <div className="card mb-3">
              <div className="card-body detail-top">
                <div className="detail-cover">
                  <img src={o.img} alt="" />
                </div>
                <div className="detail-desc">
                  <div className="detail-name">
                    <h3>{o.name}</h3>
                  </div>
                  <div className="detail-brief">{o.desc}</div>
                  <div className="detail-highlights">
                    {o.highlights.map((o: string) => (
                      <span>{o}</span>
                    ))}
                  </div>
                  <div className="detail-history">
                    <div className="row">
                      <div className="col-md-5">已辅导学员：30 人</div>
                      <div className="col-md-7">总时长：500 小时</div>
                      <div className="col-md-5">总课时：800 课时</div>
                      <div className="col-md-7">签约时间：2016 年 8 月</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header bg-white">关于我</div>
              <div className="card-body">
                2010年以优异的成绩毕业于上海外国语大学研究生院，在她看来，求学阶段以“优秀”通过英语专业八级、大三获上海市高级口译证书、首次参加SAT考试便获得了阅读和数学双800（满分）总分2270、首次托福“裸考”获得119分……
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header bg-white">教学经验</div>
              <div className="card-body">
                邱老师的教学专业、细致、负责。她的授课深受学生喜爱。她的VIP学员覆盖了世界各地，包括波士顿、洛杉矶、克利夫兰、多伦多、温哥华、瑞士、香港。经她辅导的学生，有超过20人总分达到2200分以上，阅读达到700分以上。
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header bg-white">专业特长</div>
              <div className="card-body">
                酷爱文学阅读，信奉厚积薄发之理念。从进入大学到现在的十多年中，无论是在学生时代还是为人导师期间，阅读英文原著的习惯始终保持。如今，她将数十本文学名著熟稔于心。无论是基础入门级的《苏菲的世界》、《动物农庄》、《1984》，还是中阶文本《福尔摩斯探案集》、《傲慢与偏见》、《了不起的盖茨比》、《百年孤独》，以及高阶文本《纯真年代》、《名利场》、《远大前程》等，邱老师均能驾轻就熟，既能将作品的故事情节娓娓道来，又能将文中的词汇语法、修饰技巧、人文背景抽丝剥茧般解读给学生，让学生在阅读名著过程中潜移默化地提升英语整体能力。
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-header bg-white">常见问题</div>
              <div className="card-body">
                <h6>善恩学院的TUTORS都是什么背景？</h6>
                <p>
                  善恩学院的TUTORS多为拥有美国排名前50大学的博士或硕士高级学位的母语为英语的学者。他们拥有丰富的教学经验和富有成就的职业生涯。很多人曾是顶尖私立学校的校长、老师、招生工作人员、律师事务所合伙人、报纸编辑、出版人、咨询公司分析师、政府官员、非盈利机构负责人。他们认同善恩的教育理念，学识渊博，热爱分享和传播知识，享受和年轻人在一起的时光。
                </p>

                <h6>在善恩学院学习英语阅读和写作与在其他地方有什么不同？</h6>
                <p>
                  在善恩学院，英语是主要的教学语言，语言学习是重要的一部分，而在此基础之上的批判思考能力、全球视野以及高效而富有说服力的写作和沟通能力才是我们主要的教学目标。事实上，这两者有机结合，密不可分。基于此目标，我们从最新报刊杂志或经典书目中摘取篇章进行文本精读和思辨讨论，并进行写作。
                </p>

                <h6>可以试听吗？</h6>
                <p>可以试听，或者说必需试听。</p>
                <p>
                  善恩学院的宗旨是为每个孩子找到一个适合他们的优秀外教。用户当然可以选择他们认为最适合的外教，但这个适合与否最终还是试出来的。另外，从外教的角度看，他们也对学生会有一定的要求。所以，我们一般都建议双方约定一个1小时左右的初次试学试听。需要指出的是，这个试听是收费的，费率和正常授课一样。
                </p>
                <p>
                  <a href="/about#qa">更多问题解答请点击这里</a>
                </p>
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
                    <span className="evaluate-desc">
                      我家闺女在学托福课程，她说讲得特别好，老师声音特别甜美，很喜欢！
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
          </div>
          <div className="col-lg-4">
            <div className="card mb-3">
              <div className="card-header bg-white">价格：$200/小时</div>
              <div className="card-body">
                <div className="mb-2">
                  <i className="far fa-credit-card" /> 无最低课时要求
                </div>
                <div className="mb-2">
                  <i className="far fa-handshake" /> 随时退费
                </div>
                <div>
                  <i className="fas fa-desktop" /> Zoom 在线授课
                </div>
              </div>
              <div className="card-footer bg-white contact-container">
                <button className="btn btn-primary btn-lg w-100 px-5" onClick={handleAskBtn}>
                  立即咨询
                </button>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header bg-white">授课范围</div>
              <div className="card-body">
                <ul>
                  <li>SAT语法、阅读、写作</li>
                  <li>托福词汇</li>
                  <li>
                    名著精读
                    <ul>
                      <li>《动物农庄》</li>
                      <li>《傲慢与偏见》</li>
                      <li>《了不起的盖茨比》</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header bg-white">背景调查</div>
              <div className="card-body">
                <i className="fas fa-check text-success"></i> 已上传验证
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header bg-white">资格证书</div>
              <div className="card-body">
                <ul>
                  <li>上海外国语大学研究生（2010）</li>
                  <li>英语专业八级</li>
                  <li>上海市高级口译证书</li>
                  <li>首考 SAT 2270</li>
                  <li>首考托福 119</li>
                </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header bg-white">可约时间</div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">工作日</th>
                      <th scope="col">周末</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">上午</th>
                      <td>
                        <i className="fas fa-check text-success"></i>
                      </td>
                      <td>
                        <i className="fas fa-check text-success"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">下午</th>
                      <td>-</td>
                      <td>
                        <i className="fas fa-check text-success"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">晚上</th>
                      <td>
                        <i className="fas fa-check text-success"></i>
                      </td>
                      <td>
                        <i className="fas fa-check text-success"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
