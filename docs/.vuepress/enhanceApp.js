import { initCopyCode, fnTextPopup } from "./public/js/use";
import tongji from "./public/js/tongji";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Object.assign(options, {
    mounted () {
      initCopyCode();
      fnTextPopup();
      tongji(siteData.themeConfig.baidu_tongji);
    },
    updated () {
      initCopyCode();
      tongji(siteData.themeConfig.baidu_tongji);
    },
  })
};
