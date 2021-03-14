const filters = [
  {
    param_name: 'type',
    name: '方向',
    list: [
      { id: '', name: '全部' },
      { id: '1', name: '升学顾问和文书修改', tag_ids: ['1', '2', '3'], teacher_ids: [101, 81], remark: '' },
      { id: '2', name: 'AP考试和美高/美初学科辅导', tag_ids: ['1', '2', '3'], teacher_ids: [82, 1] },
      { id: '3', name: 'SAT/ACT/托福', tag_ids: ['1', '2', '3'], teacher_ids: [''] },
      { id: '4', name: '英文批判阅读和写作', tag_ids: ['1', '2', '3'], teacher_ids: [''] },
      { id: '5', name: 'AMC美国数学竞赛及其他学科竞赛', tag_ids: ['1', '2', '3'], teacher_ids: [''] },
    ],
  },
  {
    param_name: 'tag',
    name: '年级',
    list: [
      { id: '', name: '全部' },
      { id: '1', name: '一年级' },
      { id: '2', name: '二年级' },
      { id: '3', name: '三年级' },
      { id: '4', name: '四年级' },
      { id: '5', name: '五年级' },
      { id: '6', name: '六年级' },
      { id: '7', name: '七年级' },
      { id: '8', name: '八年级' },
      { id: '9', name: '九年级' },
      { id: '10', name: '十年级' },
      { id: '11', name: '十一年级' },
      { id: '12', name: '十二年级' },
      { id: '13', name: '本科' },
      { id: '14', name: '研究生' },
    ],
  },
];

const tags_by_id = {
  '1': '一年级',
  '2': '二年级',
  '3': '三年级',
  '4': '四年级',
  '5': '五年级',
  '6': '六年级',
  '7': '七年级',
  '8': '八年级',
  '9': '九年级',
  '10': '十年级',
  '11': '十一年级',
  '12': '十二年级',
  '13': '本科',
  '14': '研究生',
};

// export { tags_by_id };

export { filters, tags_by_id };
