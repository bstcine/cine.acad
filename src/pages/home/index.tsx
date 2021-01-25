import React from 'react';
import './style.less';
import Row from './components/row';
import tutors from '@/pages/list/components/tutors';

export default () => {
  const arr = [
    {
      id: '1',
      title: '英语阅读-写作',
      desc:
        '阅读和写作能力是英语能力最基础，最核心的组成部分。\n' +
        '优秀的英语阅读和写作能力只有在长期的阅读写作中慢慢积累，并无其他捷径。\n' +
        '为孩子遴选一个优秀的外教/中教导师，带着孩子一起在阅读写作慢慢走过岁月，这可能是最好的投资。\n' +
        '善恩认为外教和中教各有所长，建议家长根据自身情况尝试和选择。',
      tutors: tutors.slice(0, 4),
    },
    {
      id: '2',
      title: '升学顾问和文书修改',
      desc:
        '美国名校毕业的英语母语者，或美国名校的前招生人员，\n' +
        '从美国的文化视角和内部专业人员的视角出发，\n' +
        '对中国学生的申请材料进行审视，提出反馈意见，并进行语言层面的修饰，\n' +
        '按小时收费，分阶段服务，满意再继续，透明、公平、高效。',
      tutors: tutors.slice(2, 6),
      moreBtn: '更多顾问',
    },
    {
      id: '3',
      title: '美高/美初学科和作业辅导',
      desc:
        '美高/美初的在校成绩非常重要。任何一次作业做砸，都将对在校成绩产生不可逆的影响。\n' +
        '善恩的经验显示：在美高/美初就读的中国学生，一般都感觉写作类的作业比较费力。\n' +
        '专业的外教能帮助学生分析作业要求，启发学生思考，并对学生的作业进行润色和修改。',
      tutors: tutors.slice(1, 5),
    },
    {
      id: '4',
      title: 'SAT、托福、AP、SAT学科考试、AMC美国数学竞赛',
      desc: '应试类培训，还是中教更有经验。',
      tutors: tutors.slice(3, 7),
    },
    {
      id: '5',
      title: '探究式讨论、演讲和辩论',
      desc: '对于那些想提高口语表达能力或为演讲和辩论做准备的学生，专业外教是最好的选择。',
      tutors: tutors.slice(0, 4),
    },
  ];

  return (
    <div className="container">
      {arr.map((o) => (
        <Row {...o} />
      ))}
    </div>
  );
};
