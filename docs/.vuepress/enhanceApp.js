import initCopyCode from "./public/js/use";
import tongji from "./public/js/tongji";

import Alert from "./components/package/alert";

function createQR() {
  var url = window.location.href;
  var qr = qrcode(0, "H");
  var div;
  qr.addData(url);
  qr.make();

  div = document.getElementById("qrcode")
  if (!div) {
    div = document.createElement("div");
    div.setAttribute('id', 'qrcode');
    document.body.appendChild(div);
  }
  div.innerHTML = qr.createImgTag();
}
function createSpan () {
  const span = document.createElement("span");
  span.classList.add('navbar-blank');
  document.querySelector('.home-link').appendChild(span);
}

function dateFormat(timestamp, formats) {
  formats = formats || "YYYY-MM-DD hh:mm:ss";
  const date = timestamp ? new Date(timestamp) : new Date();
  const obj = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };

  Object.keys(obj).forEach(key => {
    obj[key] = String(obj[key]).padStart(2, 0)
  })
  return formats.replace(/YYYY|MM|DD|hh|mm|ss/gi, matches => {
    return obj[matches];
  });
}
function print () {
  console.log("%cTalk is cheap, Show me the code.", "color:#666;font-size:2em;")
  console.log(`%c ${dateFormat()} %c wencaizhang.com %c`,"background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff","background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff","background:transparent")
};

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.prototype.$alert = Alert;

  Object.assign(options, {
    mounted () {
      createSpan();
      initCopyCode({
        success: () => { Vue.prototype.$alert.success({ content: '复制成功'}); },
        error: () => { Vue.prototype.$alert.error({ content: '复制出了些问题，请手动复制！'}); },
      });
      tongji(siteData.themeConfig.baidu_tongji);
      print();
    },
    updated () {
      initCopyCode({
        success: () => { Vue.prototype.$alert.success({ content: '复制成功'}); },
        error: () => { Vue.prototype.$alert.error({ content: '复制出了些问题，请手动复制！'}); },
      });
      tongji(siteData.themeConfig.baidu_tongji);
    },
  })

  Vue.prototype.$bus = new Vue();
  router.beforeEach((to, from, next) => {
    if (from.path ==="/micro-code/js/rollTitle.html") {
      // 停止标题滚动效果
      Vue.prototype.$bus.$emit('stopRollTitle');
    }
    next()
  })
  router.afterEach((to, from) => {
    // createQR();
  })
};
