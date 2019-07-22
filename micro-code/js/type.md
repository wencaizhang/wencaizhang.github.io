# 判断数据类型


判断数据的类型最好的方法是通过 `Object.prototype.toString` 来计算。

## 使用闭包方式封装

```js
var Type = (function() {
  var Type = {};
  var types = ["Object", "String", "Array", "Number", "Function", "Undefined"];
  for (var i = 0, type; (type = types[i++]); ) {
    (function(type) {
      Type["is" + type] = function(obj) {
        return Object.prototype.toString.call(obj) === "[object " + type + "]";
      };
    })(type);
  }
  return Type;
})();
```

下面来验证：

```js
Type.isObject( {} ); // 输出：true
Type.isArray( [] ); // 输出：true
Type.isString( "str" ); // 输出：true
Type.isNumber( 123 ); // 输出：true
Type.isUndefined( void 0 ); // 输出：true

var fn = function () { console.log('hello world') }
Type.isFunction( fn ); // 输出：true
```
