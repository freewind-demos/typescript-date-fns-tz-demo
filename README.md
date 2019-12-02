TypeScript "date-fns-tz" Demo
===========================

注意：这个库`date-fns-tz`有很多bug，谨慎使用。

ISO 8601规定了日期与时间的表示法。

常见用于表示UTC的格式有：

- 2019-12-02T07:21:46+08:00
- 2019-12-02T07:21:46Z

中间有一个`T`代表后接时间，最后如果是`Z`表示转换成了0时区格林威治（位于伦敦）所在地时间，偏移为0。
如果是其它时区时间，则后面加如`+08:00`或者`-05:30`这样的方式。格林威治以东加`+`，以西加`-`。

不同的国家和地区还规定了一些timezone，比如:

- America/New_York
- Asia/Shanghai

等等。

我们可以使用`date-fns-tz`将本地时间与UTC时间进行转换。

注意：
- `format`的第3个参数中的`timeZone`好像有问题，不论写什么，结果都是一样的，不起作用

- https://zh.wikipedia.org/wiki/ISO_8601

```
npm install
npm run demo
```

output:

```
localTime 2019-11-22 01:02:03
utcTime 2019-11-21T17:02:03.000Z
zonedTime 2019-11-21T17:02:03.000Z
output 2019-11-21 12:02:03
```
