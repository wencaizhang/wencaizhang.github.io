export default function (id) {
  if(!id) { return }
  var _hmt = _hmt || [];
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?" + id;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
}