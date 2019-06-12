# 深浅拷贝

```js
function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };
  return map[toString.call(obj)];
}
// deepCopy
function deepCopy(data) {
  const type = typeOf(data);
  let obj;

  if (type === "array") {
    obj = [];
  } else if (type === "object") {
    obj = {};
  } else {
    return data;
  }

  if (type === "array") {
    for (let i = 0; i < data.length; i++) {
      obj.push(deepCopy(data[i]));
    }
  } else if (type === "object") {
    for (let i in data) {
      obj[i] = deepCopy(data[i]);
    }
  }
  return obj;
}

export { deepCopy };
```
