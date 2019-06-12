# 点击页面出现文字动画效果

代码参考：[小tips: 点击页面出现富强、民主这类文字动画效果](https://www.zhangxinxu.com/wordpress/2018/05/click-page-popup-text-tips/)

## 效果展示

点击下面区域即可看到效果

<fnTextPopup />

## 代码

使用时将下面 CSS 代码和 JS 代码分别拷贝到合适位置即可。

```css
.text-popup {
    animation: textPopup 1s;
    color: red;
    user-select: none;
    white-space: nowrap;
    position: absolute;
    z-index: 99;
}
@keyframes textPopup {
    0%, 100% {
        opacity: 0;
    }
    5% {
        opacity: 1;
    }
    100% {
        transform: translateY(-50px);
    }
}
```

```js
var fnTextPopup = function (arr, options) {
    // arr参数是必须的
    if (!arr || !arr.length) {
        return;
    }
    // 主逻辑
    var index = 0;
    document.documentElement.addEventListener('click', function (event) {
        var x = event.pageX, y = event.pageY;
        var eleText = document.createElement('span');
        eleText.className = 'text-popup';
        this.appendChild(eleText);
        if (arr[index]) {
            eleText.innerHTML = arr[index];
        } else {
            index = 0;
            eleText.innerHTML = arr[0];
        }
        // 动画结束后删除自己
        eleText.addEventListener('animationend', function () {
            eleText.parentNode.removeChild(eleText);
        });
        // 位置
        eleText.style.left = (x - eleText.clientWidth / 2) + 'px';
        eleText.style.top = (y - eleText.clientHeight) + 'px';
        // index递增
        index++;
    });
};

fnTextPopup(['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']);
```