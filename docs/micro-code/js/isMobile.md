# 判断浏览器平台

不同平台浏览器的 `userAgent` 是不一样的，通过 `userAgent` 来判断所在的平台。

## 效果展示

<isMobile />

## 判断是否手机端浏览器

```js
function isMobile () {
  // Android
  if (/android/i.test(navigator.userAgent)) {
    return true;
  }
  // iOS
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return true;
  }
  return false;
};
```

## 判断是否微信浏览器

```js
function isWeChatBroswer(){
  var ua = navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua)
}
```