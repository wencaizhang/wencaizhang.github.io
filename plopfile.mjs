import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const directoryPath = path.join(__dirname, 'data', 'weekly')

function readWeeklyDir() {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.log('Error reading directory:', err)
        reject(err)
      } else {
        // 获取最大的issue号，即最新的周刊
        const no = files
          .map((filename) => Number(filename.replace('issue-', '').replace('.mdx', '')))
          .sort((a, b) => b - a)
        const max = no[0]
        resolve(max)
      }
    })
  })
}

// formats格式包括
// 1. Y-m-d
// 2. Y-m-d H:i:s
// 3. Y年m月d日
// 4. Y年m月d日 H时i分

/**
 * 根据传入的时间戳，返回指定格式的时间
 * @param {number} timestamp 时间戳
 * @param {String} formats 返回的时间格式
 * @returns
 */
var dateFormat = function (timestamp, formats = 'Y-m-d') {
  const padNum = function (n) {
    return String(n).padStart(2, '0')
  }

  var myDate = timestamp ? new Date(timestamp) : new Date()

  var year = myDate.getFullYear()
  var month = padNum(myDate.getMonth() + 1)
  var day = padNum(myDate.getDate())

  var hour = padNum(myDate.getHours())
  var minite = padNum(myDate.getMinutes())
  var second = padNum(myDate.getSeconds())

  return formats.replace(/Y|m|d|H|i|s/gi, function (matches) {
    return {
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second,
    }[matches]
  })
}

export default function plop(plop) {
  plop.setGenerator('blog', {
    description: '创建「文章」',
    prompts: [
      {
        type: 'input',
        name: 'filename',
        message: 'MD文件名称',
      },
      {
        type: 'input',
        name: 'title',
        message: '文章名称',
      },
    ],
    actions(data) {
      return [
        {
          type: 'add',
          path: 'data/en/blog/{{filename}}.mdx',
          templateFile: 'plop-templates/post.mdx.hbs',
          data() {
            return {
              ...data,
              date: dateFormat(null, 'Y-m-d'),
            }
          },
        },
      ]
    },
  })

  plop.setGenerator('snippets', {
    description: '创建「代码块」',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '代码块名称',
      },
    ],
    actions(data) {
      return [
        {
          type: 'add',
          path: 'data/zh/snippets/{{name}}.mdx',
          templateFile: 'plop-templates/snippest.mdx.hbs',
          data() {
            return {
              ...data,
              date: dateFormat(null, 'Y-m-d'),
            }
          },
        },
      ]
    },
  })
}
