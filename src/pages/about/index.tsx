import useTOC from '@/hooks/useTOC';
import React from 'react';
import s from './style.less';
import classnames from 'classnames';
import useReStoreScrollTop from '@/components/scroll';

const About = () => {
  useReStoreScrollTop();
  return (
    <div className={classnames(s.aboutPage, 'container')}>
      <div className="js-toc-content">
        <div className={s.about}>
          <h2 id="about">关于善恩学院</h2>
          <div className={s.aboutItem}>
            <h3>
              <img src={require('./asset/1.png')} alt="" />
              善恩学院是一个面向华人学生的全球化的在线学习平台。
            </h3>
            <p>
              世界各地的用户，都可通过善恩学院找到优秀的外教和中教辅导学生的学业功课。这些领域包括但不限于英语阅读和写作，英语文学、世界历史、美国历史、经济学、数学、物理、化学、生物学、环境科学、计算机编程、托福、SAT、ACT和英美留学入学申请等。
            </p>
            <p>
              所有的外教都经过善恩学院严格的筛选、考核和培训，并接受善恩的统一管理。所有服务都计时收费，唯满意后再继续。全过程透明、公平，灵活。
            </p>
          </div>

          <div className={s.aboutItem}>
            <h3>
              <img src={require('./asset/2.png')} alt="" />
              善恩的教学理念
            </h3>
            <p>
              对于基础能力的培养，以批判阅读和写作能力为例，善恩学院信奉长期主义，倡导用“文火慢煲”的方式进行。保持耐心，坚持投入，良好的结果自然是水到渠成。
            </p>
            <p>
              对于高中课业和各项升学考试，以SAT/ACT/AP考试为例，善恩学院招募最优秀最富有经验的老师，以精准高效的方法帮助学生获得高分。
            </p>
            <p>
              对于升学顾问服务，善恩聘请富有经验、能力出众的升学专家，以100%透明、公平的方式和学生和家长进行紧密、平等的合作，帮助学生挖掘最佳潜能，助力他们录取最理想的学校。
            </p>
            <p>
              善恩认为，全球化是不可阻挡的潮流，每一个学生都将在一个全球化的世界里生存与发展。在全球化的时代里，给孩子最好的投资，就是给他最好的教育，让学生在岁月的积淀中成长为一个英语流利、视野开阔、思维敏锐且富有批判思考精神的全球公民。
            </p>
          </div>
        </div>

        <h2 id="story">品牌故事</h2>
        <div className={s.story}>
          <div className={s.bgImg} style={{ background: `url(${require('./asset/bg.jpg')}) no-repeat center/cover` }} />
          <h3>善恩（CINE）是英文Chinese in New England Education的首字母缩写。</h3>
          <p>
            新英格兰（New
            England）地区是美国东北部的一小片区域，包括缅因州、新罕布什尔州、佛蒙特州、马萨诸塞州、罗得岛州和康涅狄格州。
          </p>
          <p>
            400年前，一批不满现状且渴望自由的英国清教徒横渡大西洋，来到北美大陆建立他们理想中的新家园，而新英格兰地区就是他们在北美大陆的最早定居点。他们把这块地区命名为新英格兰，一方面既表明自己源自于英格兰，但同时又有别于英格兰，故名新英格兰。这片土地承载着清教徒们逃离故土并在新大陆开天辟地的理想，所以新英格兰常象征着希望与探索。
          </p>
          <p>
            善恩教育的创始人周立伟先生于2013年年底在波士顿创立善恩教育，从某种意义上也是秉承当年清教徒在北美开天辟地之精神
            —
            帮中国人在世界教育的高地波士顿建立一个桥头堡，将这里的优质教育资源嫁接给世界各地的华人学子，让他们有机会接受到最优质的教育，在全球化的社会里展开他们的人生画卷。
          </p>
          <p>
            另外，善恩也有“秉持善心，感恩托付”的涵义。善恩认为，教育不是普通的商业。因为教育的对象不是商品，而是承载着家庭希望的孩子的教育。所以，唯有秉持善心，才能做好教育；唯有以感恩之心面对信托，才能不辱使命。
          </p>
        </div>
        <h2 id="rule">学院规章制度</h2>
        <div className={s.rule}>
          <h3>善恩的老师和学生来自世界各地，他们遵循的文化和法规多元各异。为保障学院的正常运作，特制定本规则。</h3>
          <p>1、关于约课。约课需要提前至少48小时。善恩学院将无法为学生预约48小时以内的课程。</p>
          <p className={s.q}>为什么要提前48小时约课？</p>
          <div className={s.a}>
            <p>考虑到时差和善恩学院外教老师紧张的日程， 48小时是预约所需的最低提前量。</p>
          </div>
          <p>
            2、关于取消课程。取消课程必须提前48小时通知老师。如果提前24-48小时（含24小时）取消课程，善恩将扣除本次课时费的50%；如果提前0-24小时取消课程，善恩将扣除本次课时费的75%；如果没有在原定课程开始时间之前提出取消课程，则属于旷课。则善恩将扣除当节课课时的100%。课时时长以与老师约定的为准。如无约定的上课时长，则以上节课时长为准。
          </p>
          <p className={s.q}>为什么没有上课也还要扣除课时费？</p>
          <div className={s.a}>
            <p>
              这是国际通行做法。对于专业从事辅导的外教老师而言，他的时间就是收入。一旦把某个时间段安排给了某个学生，意味着这个时间段就被独占。如果在开课前临时取消，老师无法找到新的学生。所以，按照国外的通行的办法，学生因为自身原因临时取消课程，学生仍然需支付相应费用。
            </p>
            <p>
              另一方面，善恩学院也根据中国的市场情况和外教做了充分的协调和沟通，并最终达成上述协议。应该说这是一个折衷方案，既尊重了外教的合法利益，同时也表现出对学员的足够体恤。
            </p>
          </div>
          <p>
            3、关于调整课程时间。调整时间必须提前48小时通知老师。否则，导师将有权拒绝调课。若学生因为时间冲突而不得不取消课程，则按第二条处理。若学生推迟上课的起始时间，则老师有权按时结束课程且收取原先安排好的全部课时费。若学生需要提前结束课程，则老师有权按原先计划的时间开始上课且收取原先安排好的全部课时费。
          </p>
          <p>
            4、关于上课。建议学生提前2分钟进入课堂，等待老师开始会议。如果上课迟到，迟到时间仍记录在课时中，且老师有权准点下课。如果学生早退，则早退的时间仍然记录在课时中。
          </p>
          <p className={s.q}>如果开课时间因故延迟了，为什么不能延迟下课时间？</p>
          <div className={s.a}>
            <p>
              因为很有可能后面紧接着还有安排。所以我们才说老师有权按时下课。在实际操作中，只要情况允许，老师一般也愿意延迟下课。请学生学会和外教进行良好的沟通。这些能力对于将来赴美留学也是很有价值的。
            </p>
          </div>
          <p>
            5、关于紧急服务。当学生和老师已经建立了师生关系后，如果学生需要老师协助修改学校的作业或修改申请文书，请提前告知老师截止日期。如果在截止日期前48小时内提出要求，属于紧急应急任务。服务发生后，将扣除双倍课时。
          </p>
          <p className={s.q}>为什么加急服务需要双倍课时？</p>
          <div className={s.a}>
            <p>
              在国外，一切服务都需要提前预约。这是对服务者的尊重，也是为了确保被服务对象能接收到良好的服务。当学生提出加急服务的请求时，外教常常需要牺牲原定的休息时间来完成任务，或者需要在更大的时间压力下工作。因此，加急服务需要额外的财务补偿，这在国外也是属于通常做法。
            </p>
            <p>所以，我们建议学生和家长提前预约好服务。</p>
          </div>
        </div>

        <h2 id="faq">Q&A</h2>
        <div className={s.qa}>
          <h3 id="3" className={s.q}>
            善恩学院能够提供那些科目的辅导？
          </h3>
          <div className={s.a}>
            <p>
              善恩学院提供中学阶段的全科辅导，包括但不限于英语阅读和写作，英语文学、世界历史、美国历史、经济学、数学、物理、化学、生物学、环境科学、计算机编程、托福、SAT、ACT、AP考试。
            </p>
          </div>
          <p>除了学科辅导外，善恩学院还提供美国留学申请咨询和文书修改服务。</p>
          <h3 id="4" className={s.q}>
            如果我需要的辅导科目暂时找不到辅导老师怎么办？
          </h3>
          <div className={s.a}>
            <p>
              那很可能是因为您的需求属于比较冷门的需求。善恩学院拥有庞大的优质外教资源库，总能很快找到相应的TUTOR满足您孩子的辅导培训需求。我们建议您和我们的工作人员取得联系。
            </p>
          </div>
          <h3 id="5" className={s.q}>
            是怎么收费的？
          </h3>
          <div className={s.a}>
            <p>
              善恩学院实施计时收费。每个TUTOR都有自己的每小时费率。在选定TUTOR后，用户可以根据需要预估需要的课时数，预先缴纳费用。善恩给予用户最大的自由度，不对预先购买的小时数做任何最低要求。但学生也同时需要了解到，优秀的Tutor的时间总是稀缺的。如果已经和Tutor完成磨合并满意的话，我们建议学生尽量锁定TUTOR的时间。
            </p>
          </div>
          <h3 id="6" className={s.q}>
            可以试听吗？
          </h3>
          <div className={s.a}>
            <p>可以试听。但试听需要付费，费用和正式授课一样。</p>
            <p>
              并且，在这次试听之前，善恩学院会安排导师和学生进行一次15-20分钟的免费交流。通过交流，双方明确需求，了解彼此风格，确保双方配对成功。
            </p>
          </div>
          <h3 id="7" className={s.q}>
            上课是通过什么平台进行的？
          </h3>
          <div className={s.a}>
            <p>授课通常是通过Zoom进行。在和导师沟通协商后，可以对上课进行录制并进行回看。</p>
          </div>
          <h3 id="7_0" className={s.q}>
            为什么价格各不相同
          </h3>
          <div className={s.a}>
            <p>善恩学院的费率依据外教的费率而定。</p>
            <p>
              作为一个专业的教育服务人士，每一个外教都有自己的每小时收费费率。善恩学院尊重外教的费率。对于他们服务的性价比的判断，我们将之愉快地交由用户作出判断。
            </p>
          </div>
          <h3 id="7_00" className={s.q}>
            是不是价格高的外教服务质量一定比价格低的更好？
          </h3>
          <div className={s.a}>
            <p>不一定。</p>
            <p>
              外教的单价高，说明他们的服务已经被市场验证，他们对自己服务的价值有了相当的期望。所以，一般来说，价格高的外教服务质量一般都是优秀的。
            </p>
            <p>
              但价格低的外教，未必服务质量就一定低。事实上，善恩学院上的每一个外教都经过严格的面试，他们的服务能力是有保证的。他们的价格低，很可能是他们还处于职业发展的初期，还没有充分证明自己，但他们的服务本身还是优质的。
            </p>
            <p>所以，善恩向所有的用户提供非常灵活的试听机制。好不好，试一下就知道。</p>
          </div>
          <h3 id="7_1" className={s.q}>
            善恩是如何管理外教的？
          </h3>
          <div className={s.a}>
            <p>善恩对外教有着极其严格的管理。</p>
            <p>
              首先在招聘的环节，善恩严把质量关。被善恩录用的教员普遍具有非常优秀的学术背景（一般都有名校硕士、博士的教育背景），具有优秀的沟通能力（每一个外教被正式录用之前需要经过两轮面试）、以及足够优秀的客户评价（可以通过第三方网站的客户评价记录，或者要求教员提供客户信息给由我们进行验证）。
            </p>
            <p>
              其次，我们对每一位录用的外教进行岗前培训。让外教了解中国学生的学习方式和在学习中容易遇到的常见问题，以使外教的教学能够最大程度贴合中国学生的需求。
            </p>
            <p>
              这个培训还一直延续到授课过程中。我们要求每一位教员对授课的前三次进行录像并提供给善恩的外教管理团队进行审阅。善恩团队将对外教在授课中存在的问题进行及时的反馈和建议，并要求教员作出相应的调整。
            </p>
            <p>
              在整个授课过程中，我们都会要求用户对外教的每一次授课都进行评价和反馈。善恩将第一时间获悉用户的反馈意见。在进行核实、分析和评估之后，我们将约谈外教，要求教员作出相应的调整，确保教学授课保持正轨。
            </p>
            <p>
              另外，善恩学院的所有公开课，其内容和进度安排都是善恩专业团队和外教共同协商而定。如果是针对特定学生的个性化课程，则更是由善恩方面首先搜集学生的基础信息，并将此基础信息分享给外教，外教提出授课计划后交由善恩审核，批准后才得以实施。
            </p>
          </div>
          <h3 id="7_2" className={s.q}>
            如何评估课程的效果
          </h3>
          <div className={s.a}>
            <p>
              绝大部分情况下，学生是在遇到特定问题的情况下聘请教员进行辅导的。授课的效果很容易评估：学校的作业质量是否有提升？老师的评分是否有提高？或者原来不理解的知识现在明白了？
            </p>
            <p>
              但有些时候，有些课程不太容易看到立竿见影的效果，或者效果不太好评价。例如，英文的阅读和写作能力。善恩认为，阅读和写作的能力的提升是一个需要长期坚持、持之以恒的过程，不能期望短期内有飞速的提高。但有没有效果，学生自己最容易感受到。也正是基于此理由，我们才要求学生在每次学习之后，都及时向善恩反馈上课的感受。我们一再强调：善恩学院的课程，当且仅当学生觉得物有所值时才继续。
            </p>
          </div>
          <h3 id="8" className={s.q}>
            是否可以让外教定制一个课程？
          </h3>
          <div className={s.a}>
            <p>可以的。</p>
            <p>外教对用户的在校作业进行辅导，实则就是一个定制课程。</p>
            <p>
              需要指出的是，定制课程可能会消耗外教相当的准备时间，但也可能不用。这些准备时间也需要同样收费。外教在接到定制化需求后，会给出大致的课程前期时间的估算。只有用户在接受后，才会推进。
            </p>
            <p>外教在辅导学生在校作业时，一般也需要花时阅读学生的阅读书单，这些时间也将被算入计费时间。</p>
          </div>
          <h3 id="9" className={s.q}>
            缴纳的学费能退费吗？
          </h3>
          <div className={s.a}>
            <p>除非是另有说明的班课，善恩学院的所有课程都可以在客户的要求下随时停止并退费。</p>
            <p>退费过程会产生成本，善恩将扣除7%，余款在3个工作日内退回。</p>
          </div>
          <h3 id="10" className={s.q}>
            善恩学院的既有中教，又有外教，我该如何选择？
          </h3>
          <div className={s.a}>
            <p>
              这个主要是看学生的程度和学习目标。如果学生目前的程度还比较低（托福80分以下），学习目标以语言学习为主，尤其是语法，那中教可能会更合适一些。善恩的经验是，在讲解语法方面，中教比外教更有优势。另外，在应试方面中教也更有优势。
            </p>
            <p>当然，更重要的还是学生自己的体验。最好的办法是都试听一下。</p>
          </div>
          <h3 id="11" className={s.q}>
            善恩学院的外教能提供升学顾问服务吗？
          </h3>
          <div className={s.a}>
            <p>
              是的。但他们提供的服务和传统上的一揽子服务不同，是按需提供，按小时收费的服务，我们可以将之理解为自助式的升学顾问服务。用户可以根据自身的具体情况，灵活选择配置服务。
            </p>
            <p>例如，如果用户已经完成了申请文书，那他们可以聘请外教对申请文书进行反馈和修改。</p>
            <p>如果用户还没有完成申请文书，或者处于申请的早期，那他们也可以聘请外教进行头脑风暴，一起制定申请策略。</p>
            <p>如果用户被心仪的学校放入待定名单，那他们可以聘请专业外教顾问针对特定的大学进行工作。</p>
            <p>如果用户希望升学顾问能够提前介入，那他们可以提前聘请外教顾问对学生的大学升学路线图进行长期规划。</p>
          </div>
          <h3 id="12" className={s.q}>
            通过善恩学院这种计时收费的模式做申请，全程一般需要多少时间和费用？
          </h3>
          <div className={s.a}>
            <p>每个学生的情况各有不同，但一般来说，通过善恩学院的计时收费模式做申请，全程花费一般不会超过1万美元。</p>
            <p>下述是一个典型的服务流程，仅供参考。</p>
            <p>第一步：导师和学生进行头脑风暴，确定申请的专业方向、学校档次的选择和申请主文书主题。花时2小时。</p>
            <p>
              第二步：学生在导师的启发下，完成文书初稿创作，交由导师，导师进行反馈和修改，并要求学生进行相应的修改。花时1-2小时。
            </p>
            <p>第三步：上述步骤不断重复，直至学生满意，导师认可。花时3-5小时。</p>
            <p>第四步：用同样的方式完成申请的补充文书，花时1-2小时。</p>
            <p>由此我们可见，从零开始，完成第一个大学的申请大约需要花费10小时左右的时间。</p>
            <p>每增加一个在Common Application系统里的申请学校，需要增加大约1-2小时的额外时间。</p>
            <p>以申请10所大学为例，大约花时在25小时左右。按照每小时300-400美元的费率计算，总计费用也不到1万美元。</p>
          </div>
          <h3 id="13" className={s.q}>
            如果TUTOR修改作文的时间也要收费，我怎么知道TUTOR花了多少时间？
          </h3>
          <div className={s.a}>
            <p>在每次授课之后，外教都会向善恩报告其工作时间，其中就包括修改作文的时间。善恩也会和客户分享这些数据。</p>
            <p>
              文书修改编辑类工作，在美国的通行做法是根据自报时间结算。善恩学院的外教都是具有职业精神的专业人士，他们会按照实际情况如实计算修改作文所花费的时间。这些时间也将经受善恩以及用户的检验。如果数据不合理，善恩将介入调查。如果用户觉得TUTOR修改作文花费时间过多，用户可以提出异议，或者选择终止学习。
            </p>
            <p>总之，无论是外教的职业素质还是善恩的机制都保证了按时计费的公平性。</p>
          </div>
          <h3 id="14" className={s.q}>
            善恩学院的升学顾问服务能保证录取吗？
          </h3>
          <div className={s.a}>
            <p>不能。正如任何承诺高回报且能保本的投资都是骗局，任何承诺“保录取”的服务也都是骗局。</p>
            <p>
              但善恩能保证的是，善恩的专业外教升学顾问将一步一步和学生紧密配合，把工作做到最完美，把录取的几率优化到最高。
            </p>
          </div>
          <h3 id="15" className={s.q}>
            善恩学院这种自助式升学顾问服务，适合哪些学生，不适合哪些学生？
          </h3>
          <div className={s.a}>
            <p>最适合有相当的英语能力基础，有一定的主动性和独立工作能力，有志冲击名校的学生。</p>
            <p>
              外教导师们绝对不会提供文书代写服务，因此这项服务不适合那些英语基础薄弱，想走捷径，想花钱买方便全包的那些学生和家庭。
            </p>
            <p>
              另外，外教普遍都非常重视守时，对学生无故迟到甚至缺席的情况感到难以容忍。不守时或拖延症患者恐也很难适合这种服务模式。
            </p>
          </div>
        </div>
      </div>
      {/*<div className="js-toc-wrapper">*/}
      {/*  <div className="js-toc"/>*/}
      {/*</div>*/}
    </div>
  );
};

export default About;
