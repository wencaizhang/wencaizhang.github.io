module.exports = [
  {
    title: '00-other',
    collapsable: true,
    children: [
      './00-other/this',
      './00-other/prototype',
      './00-other/bind',
      './00-other/closure',
      './00-other/call-and-apply',
    ]
  },
  {
    title: 'Array-ES3',
    collapsable: true,
    children: [
      './01-Array-ES3/',
      './01-Array-ES3/01-Array.prototype.concat',
      './01-Array-ES3/02-Array.prototype.join',
      './01-Array-ES3/03-Array.prototype.push',
      './01-Array-ES3/04-Array.prototype.pop',
      './01-Array-ES3/05-Array.prototype.shift',
      './01-Array-ES3/06-Array.prototype.unshift',
      './01-Array-ES3/07-Array.prototype.slice',
      './01-Array-ES3/08-Array.prototype.splice',
      './01-Array-ES3/09-Array.prototype.reverse',
      './01-Array-ES3/10-Array.prototype.sort',
    ]
  },
  {
    title: 'Array-ES5',
    collapsable: true,
    children: [
      './02-Array-ES5/',
      './02-Array-ES5/01-Array.prototype.forEach',
      './02-Array-ES5/02-Array.prototype.map',
      './02-Array-ES5/03-Array.prototype.filter',
      './02-Array-ES5/04-Array.prototype.some',
      './02-Array-ES5/05-Array.prototype.every',
      './02-Array-ES5/06-Array.prototype.indexOf',
      './02-Array-ES5/07-Array.prototype.lastIndexOf',
      './02-Array-ES5/08-Array.prototype.reduce',
      './02-Array-ES5/09-Array.prototype.reduceRight',
    ]
  },
  {
    title: 'Array-ES6',
    collapsable: true,
    children: [
      './03-Array-ES6/',
      './03-Array-ES6/01-Array.from',
      './03-Array-ES6/02-Array.of',
      './03-Array-ES6/10-Array.isArray',
      './03-Array-ES6/03-Array.prototype.copyWithin',
      './03-Array-ES6/04-Array.prototype.find',
      './03-Array-ES6/05-Array.prototype.findIndex',
      './03-Array-ES6/06-Array.prototype.fill',
      './03-Array-ES6/07-Array.prototype.entries',
      './03-Array-ES6/08-Array.prototype.keys',
      './03-Array-ES6/09-Array.prototype.values',
      './03-Array-ES6/10-Array.prototype.includes',
    ]
  },
  {
    title: 'String',
    collapsable: true,
    children: [
      './04-String/000-transform-string-to-tag',
      './04-String/001-String.prototype-toLowerCase-toUpperCase',
      './04-String/002-String.prototype.slice',
      './04-String/003.String.prototype.split',
      './04-String/004.String.prototype.match',
      './04-String/005-String.prototype.trim',
      './04-String/006-String.prototype.includes',
      './04-String/008-String.prototype.repeat',
      './04-String/009-String.prototype-padstart-padend',
      './04-String/04-String.prototype.search',
      './04-String/05-String.prototype.match',
      './04-String/06-String.prototype.replace',
    ]
  },
  {
    title: 'Object',
    collapsable: true,
    children: [
      './05-Object/01-Object.prototype.hasOwnProperty',
      './05-Object/02-Object.keys',
      './05-Object/03-Object.values',
      './05-Object/04-Object.entries',
      './05-Object/05-Object.assign',
      './05-Object/06-Object.is',
      './05-Object/07-Object.defineProperty',
      './05-Object/08-Object.create',
    ]
  },
  {
    title: 'Regexp',
    collapsable: true,
    children: [
      './06-Regexp/0-正则表达式预查',
      './06-Regexp/00-Regexp',
      './06-Regexp/01-Regexp.prototype.lastIndex',
      './06-Regexp/02-Regexp.prototype.test',
      './06-Regexp/03-Regexp.prototype.exec',
      './06-Regexp/100-regexp-demos',
    ]
  },
]
