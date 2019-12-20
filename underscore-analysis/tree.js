
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
      './Arrays/index-of-item',
      './Arrays/_.uniq',
      './Arrays/intersection.md',
      './Arrays/slice-functions',
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
      './Objects/_.functions.md',
      './Objects/judge-type.md',
      './Objects/keys-and-values.md',
      './Objects/property.md',
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