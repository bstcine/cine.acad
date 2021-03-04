const tutors = [
  {
    id: 1,
    name: '邱老师',
    price: '$200~$400/小时',
    desc:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static.bstcine.com/2021/01/19/183355364SZ3CAR1.png',
    highlights: ['SAT', '托福', '动物农庄'],
    type_ids: ['1', '2'],
    tag_ids: ['1', '2', '3'],
  },
  {
    id: 2,
    name: 'Kevin King',
    price: '$150~$200/小时',
    desc:
      '中国SAT培训界内凤毛麟角的英语基本功和教学技巧兼备的明星老师。2010年以优异的成绩毕业于上海外国语大学研究生院，在她看来，求学阶段以“优秀”通过英语专业八级、大三获上海市高级口译证书、首次参加SAT考试便获得了阅读和数学双800（满分）总分2270、首次托福“裸考”获得119分……，都只是其履历中微小而不足道的一笔，她认为作为一名英语教学老师，最关键的把握每个学生的特点，挖掘他们的潜力，激发他们的学习热情，最终让他们能找到自己的学习节奏，成为学习的主动参与者。',
    img: 'https://static001.geekbang.org/resource/image/4a/3a/4a0ce013a1a828e5a13eb856b2e2yy3a.png',
    highlights: ['托福满分', '复旦', '中科院', 'MIT', '校长'],
  },
  {
    id: 3,
    name: 'Christina Carlson',
    price: '$100/小时',
    desc:
      '美国波士顿艾默生学院（Emerson College）的英语文学和写作系的教授。Christina M Carlson拥有20多年的大学写作教学经验，熟悉中国学生在读写方面的挑战，并对此积累了一些独具特色的教学手段。Christina在文学和写作领域有着精深的学术素养和储备，并出版了多部专著。更重要的是，Christina对教学充满激情，对工作高度投入。',
    img:
      'https://static001.geekbang.org/resource/image/98/cf/98351de2f9a1f556993d5a61b6a3afcf.png?x-oss-process=image/resize,m_fill,h_336,w_254',
    highlights: ['专八', '教授'],
  },
  {
    id: 4,
    name: '杨挚（James）',
    price: '$100/小时',
    desc:
      '毕业于复旦大学英语系，本科期间通过英语专业八级，托福110+，语言能力扎实全面。James曾任中央电视台英语频道（CCTV News）编辑记者，积累了深厚的英文写作和采访报道能力；后加入上海新东方，任北美项目部VIP教师，用别具一格的视角和方式帮助学生提高基础语言能力。在众多英语作家中，James老师偏爱George Orwell简练、深刻、又不失幽默的语言风格。他认为，学习英语让他掌握了一种新的思维方式，多了一双观察世界的眼睛。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦', '学霸'],
  },
  {
    id: 5,
    name: 'Kevin King',
    price: '$100/小时',
    desc:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦', '满分学员'],
  },
  {
    id: 6,
    name: 'Kevin King',
    price: '$100/小时',
    desc:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
  },
  {
    id: 7,
    name: 'Kevin King',
    price: '$100/小时',
    desc:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
  },
  {
    id: 8,
    name: 'Kevin King',
    price: '$100/小时',
    desc:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
  },
  {
    id: 9,
    name: 'Kevin King',
    price: '$100/小时',
    desc:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
  },
  {
    id: 10,
    name: 'Kevin King',
    price: '$100/小时',
    desc:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
  },
  {
    id: 11,
    name: 'Kevin King',
    price: '$100/小时',
    desc:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
  },
];

export default tutors;
