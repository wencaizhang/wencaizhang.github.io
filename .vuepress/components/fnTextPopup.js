
// 点击显示文字动画
export default function fnTextPopup(ele, arr, options) {
  // arr参数是必须的
  if (!arr || !arr.length) {
    arr = [
      "富强",
      "民主",
      "文明",
      "和谐",
      "自由",
      "平等",
      "公正",
      "法治",
      "爱国",
      "敬业",
      "诚信",
      "友善"
    ];
  }
  console.log('fnTextPopup')
  // 主逻辑
  var index = 0;
  // (ele || document.querySelector('body'))
  ele.addEventListener("click", function(event) {
    // 点击链时接避免文字动画
    if (event.target.tagName === 'A') {
      return;
    }
    var x = event.pageX,
      y = event.pageY;
    var eleText = document.createElement("span");
    eleText.className = "text-popup";

    this.appendChild(eleText);
    if (arr[index]) {
      eleText.innerHTML = arr[index];
    } else {
      index = 0;
      eleText.innerHTML = arr[0];
    }
    // 动画结束后删除自己
    eleText.addEventListener("animationend", function() {
      eleText.parentNode.removeChild(eleText);
    });
    // 位置
    eleText.style.left = x - eleText.clientWidth / 2 + "px";
    eleText.style.top = y - eleText.clientHeight + "px";
    // index递增
    index++;
  });
}
