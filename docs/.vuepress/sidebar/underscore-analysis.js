module.exports = [
  '',
  'some-concepts',
  {
    title: '集合 Collections',
    collapsable: true,
    children: [
      './Collections/_.each',
      './Collections/_.sample',
      './Collections/_.shuffle',
    ]
  },
  {
    title: '数组 Arrays',
    collapsable: true,
    children: [
      './Arrays/_.first',
      './Arrays/_.uniq',
      './Arrays/_.findIndex',
      './Arrays/_.findLastIndex',
    ]
  },
  {
    title: '函数 Functions',
    collapsable: true,
    children: [
      './Functions/_.memoize',
      './Functions/_.partial',
      './Functions/_.delay',
      './Functions/_.debounce',
      './Functions/_.throttle',
    ]
  },
  {
    title: '对象 Objects',
    collapsable: true,
    children: [
      './Objects/_.keys',
      './Objects/_.values',
      './Objects/_.isArray',
      './Objects/_.functions',
      './Objects/_.isFunction',
      './Objects/_.isUndefined',
    ]
  },
  {
    title: '工具函数 Utility',
    collapsable: true,
    children: [
      './Utility/_.noConflict',
      './Utility/_.random',
      './Utility/_.mixin',
    ]
  },
  {
    title: '链式语法 Chaining',
    collapsable: true,
    children: [
      './Chaining/',
      './Chaining/_.chain',
      './Chaining/_.prototype.value',
    ]
  },
  {
    title: '辅助函数',
    collapsable: true,
    children: [
      './helper/',
      './helper/isArrayLike',
    ]
  },
]
