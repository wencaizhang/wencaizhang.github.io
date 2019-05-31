import initCopyCode from "./public/js/use";
import tongji from "./public/js/tongji";

import Alert from "./components/package/alert";

function createSpan () {
  const span = document.createElement("span");
  span.classList.add('navbar-blank');
  document.querySelector('.home-link').appendChild(span);
}

function print () {
  console.log("%cTalk is cheap. Show me the code", "color:#666;font-size:3em;")
  console.log("%cwencaizhang.com", "display:block;color:#666;font-size:13px;background-color:#46bd87;color:#fff;padding:1px 3px;border-radius: 3px;")
}

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
};
