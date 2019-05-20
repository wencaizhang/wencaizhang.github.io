module.exports = [
  '',
  'some-concepts',
  {
    title: '集合 Collections',
    collapsable: true,
    children: [
      './Collections/_.each',
    ]
  },
  {
    title: '数组 Arrays',
    collapsable: true,
    children: [
      './Arrays/_.first',
    ]
  },
  {
    title: '函数 Functions',
    collapsable: true,
    children: [
      './Functions/_.memoize',
    ]
  },
  {
    title: '对象 Objects',
    collapsable: true,
    children: [
      './Objects/_.keys',
      './Objects/_.isArray',
    ]
  },
  {
    title: '工具函数 Utility',
    collapsable: true,
    children: [
      './Utility/_.noConflict',
      './Utility/_.random',
    ]
  },
  {
    title: '链式语法 Chaining',
    collapsable: true,
    children: [
      './Chaining/',
      './Chaining/_.chain',
      // './Chaining/_.prototype.value',
    ]
  },
]