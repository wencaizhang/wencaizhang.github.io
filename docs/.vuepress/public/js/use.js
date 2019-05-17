const copyBtnClassName = "btn-copy";
/*页面载入完成后，创建复制按钮*/
export function initCopyCode() {
  document.querySelectorAll('div[class*="language-"]').forEach(item => {
    if (!item.querySelector('.' + copyBtnClassName)) {
      const div = document.createElement("i");
      div.classList.add(copyBtnClassName);
      div.innerText = "复制";
      div.title = "点击复制代码";
      item.appendChild(div);
    };
  });
  if (initCopyCode.clip) {
    return;
  }
  initCopyCode.clip = new ClipboardJS(".btn-copy", {
    target (trigger) {
      return trigger.parentNode.querySelector('pre');
    }
  });
  initCopyCode.clip.on("success", function(e) {
    e.clearSelection();
  });

  initCopyCode.clip.on("error", function(e) {
    console.error("Action:", e.action);
    console.error("Trigger:", e.trigger);
  });
}

// 点击显示文字动画
export function fnTextPopup(arr, options) {
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
  // 主逻辑
  var index = 0;
  document.documentElement.addEventListener("click", function(event) {
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
    // 自定义文字
    if (event.target.classList.contains(copyBtnClassName)) {
      eleText.innerHTML = "复制成功";
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
