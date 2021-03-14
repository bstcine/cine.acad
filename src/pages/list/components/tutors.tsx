const tutors = [
  {
    id: '1',
    name: 'Abigail L',
    price: '300 USD/hr',
    brief: '哈佛毕业的创意写作高手，资深升学顾问，8年经验，成绩斐然。',
    introduce:
      '<p>Abigail L具有8年的升学顾问工作经验。她酷爱写作，擅捕捉申请人身上不经意的闪光点，构造鲜活有趣的叙事。经她帮助的学生，获得了斯坦福、麻省理工、耶鲁、芝加哥、哥伦比亚、加州理工、加州伯克利等顶尖大学的录取。</p>' +
      '<p>Abigail本科毕业于哈佛大学英语系，并在匹茨堡大学获得创意写作硕士学位，这是该领域的最高学历。</p>',
    latest_news: '',
    // 256x336
    img: 'https://static.bstcine.com/2021/03/10/12123549SuNqJz4.png',
    highlights: ['哈佛', '升学顾问'],
    type_ids: ['1', '2'],
    tag_ids: ['1', '2', '3'],
    location: '宾夕法尼亚州/美国',
  },
  {
    id: '2',
    name: 'Patrick B',
    price: '200 USD/hr',
    brief: '波士顿学院和哈佛大学毕业，知识广博，风趣亲和。',
    introduce:
      '<p>Patrick目前在宾夕法尼亚州一所文理学院担任助理教授，教授大学写作课程。他具有10年+的升学顾问和教学经验。他知识渊博，尤喜历史、政治、文学和心理学。他善于启发学生，交流授课风趣亲和，深受学生喜爱。经Pat辅导的学生录取了哈佛、耶鲁、哥伦比亚等几乎所有的名校。</p>' +
      '<p>Pat本科毕业于波士顿学院的历史系，硕士研究生毕业于哈佛大学心理系。</p>',
    img: 'https://static.bstcine.com/2021/03/10/1212350SGZVsN4.jpg',
    highlights: ['哈佛', '波士顿学院', '批判阅读&写作', '升学顾问'],
    type_ids: ['1', '3'],
    tag_ids: ['1', '2', '3'],
    location: '宾夕法尼亚州/美国',
  },
  {
    id: '3',
    name: 'Teagan L',
    price: '450 USD/hr',
    brief: '哈佛大学毕业的贝恩前分析师，敏锐犀利的升学顾问。',
    introduce:
      '<p>Teagan Lende是一位才华横溢的升学顾问。他思想敏锐，知识渊博，幽默风趣。5年+的升学顾问经验，帮助多位学生进入耶伦、芝加哥、哥伦比亚、斯坦福、约翰霍普金斯等顶尖大学。</p>' +
      '<p>Teagen本科毕业于哈佛大学，并在著名咨询公司Bain担任过分析师。后因追求自由无拘束的生活而辞职成为一名独立升学顾问。</p>',
    img: 'https://static.bstcine.com/2021/03/10/121234590Surw2DX.jpg',
    highlights: ['哈佛', '升学顾问'],
    type_ids: ['1', '3'],
    tag_ids: ['1', '2', '3', '7', '8', '9'],
    location: '北达科他州/美国',
  },
  {
    id: '4',
    name: '杨挚（James）',
    price: '$100/小时',
    brief:
      '毕业于复旦大学英语系，本科期间通过英语专业八级，托福110+，语言能力扎实全面。James曾任中央电视台英语频道（CCTV News）编辑记者，积累了深厚的英文写作和采访报道能力；后加入上海新东方，任北美项目部VIP教师，用别具一格的视角和方式帮助学生提高基础语言能力。在众多英语作家中，James老师偏爱George Orwell简练、深刻、又不失幽默的语言风格。他认为，学习英语让他掌握了一种新的思维方式，多了一双观察世界的眼睛。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦', '学霸'],
    type_ids: ['4', '2'],
    tag_ids: ['4', '5', '6'],
  },
  {
    id: '5',
    name: '邱老师',
    price: '$200~$400/小时',
    brief:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    // 256x336
    img: 'https://static.bstcine.com/2021/01/19/183355364SZ3CAR1.png',
    highlights: ['SAT', '托福', '动物农庄'],
    type_ids: ['1', '2'],
    tag_ids: ['1', '2', '3'],
  },
  {
    id: '6',
    name: 'Kevin King',
    price: '$100/小时',
    brief:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
    type_ids: ['3', '4'],
    tag_ids: ['4', '5', '6'],
  },
  {
    id: '7',
    name: 'Kevin King',
    price: '$150~$200/小时',
    brief:
      '中国SAT培训界内凤毛麟角的英语基本功和教学技巧兼备的明星老师。2010年以优异的成绩毕业于上海外国语大学研究生院，在她看来，求学阶段以“优秀”通过英语专业八级、大三获上海市高级口译证书、首次参加SAT考试便获得了阅读和数学双800（满分）总分2270、首次托福“裸考”获得119分……，都只是其履历中微小而不足道的一笔，她认为作为一名英语教学老师，最关键的把握每个学生的特点，挖掘他们的潜力，激发他们的学习热情，最终让他们能找到自己的学习节奏，成为学习的主动参与者。',
    img: 'https://static001.geekbang.org/resource/image/4a/3a/4a0ce013a1a828e5a13eb856b2e2yy3a.png',
    highlights: ['托福满分', '复旦', '中科院', 'MIT', '校长'],
    type_ids: ['1', '3'],
    tag_ids: ['1', '2', '3'],
  },
  {
    id: '8',
    name: 'Kevin King',
    price: '$100/小时',
    brief:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
    type_ids: ['1', '4'],
    tag_ids: ['1', '5', '6'],
  },
  {
    id: '9',
    name: 'Kevin King',
    price: '$100/小时',
    brief:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
    type_ids: ['1', '4'],
    tag_ids: ['1', '5', '6', '7', '8', '9'],
  },
  {
    id: '10',
    name: 'Kevin King',
    price: '$100/小时',
    brief:
      'Kevin先生具有50年的的教学经验。他曾在哈佛大学肯尼迪政府学院、Phillips Exeter、布朗迪斯大学、南卡罗莱纳大学、香港国际学校-Hong Kong International School、麻省大学波士顿分校、南新罕布什尔大学、西班牙的Swift English School，沙特阿拉伯首都利雅得的公共管理学院、伊朗德黑兰的GTE Sylvania、墨西哥的Universidad Norteamericana等学校教过英文写作课。',
    img: 'https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png',
    highlights: ['博士', '复旦'],
    type_ids: ['1', '4'],
    tag_ids: ['1', '5', '6', '7', '8', '9'],
  },
  {
    id: '11',
    name: 'Christina Carlson',
    price: '$100/小时',
    brief:
      '美国波士顿艾默生学院（Emerson College）的英语文学和写作系的教授。Christina M Carlson拥有20多年的大学写作教学经验，熟悉中国学生在读写方面的挑战，并对此积累了一些独具特色的教学手段。Christina在文学和写作领域有着精深的学术素养和储备，并出版了多部专著。更重要的是，Christina对教学充满激情，对工作高度投入。',
    img:
      'https://static001.geekbang.org/resource/image/98/cf/98351de2f9a1f556993d5a61b6a3afcf.png?x-oss-process=image/resize,m_fill,h_336,w_254',
    highlights: ['专八', '教授'],
    type_ids: ['1', '3'],
    tag_ids: ['1', '2', '3', '7', '8', '9'],
  },
];

export default tutors;
