var list = [1, 2, 3];
var category = ['Sport', 'IT', 'Car'];
console.log("list");
list.forEach(function (num) {
    return console.log(num.toFixed(2));
});
console.log("categries");
category.forEach(function (str) {
    return console.log(str.search('a'));
});
//convert mảng tù dạng này sang dạng khác.
var listSquare = list.map(function (num) { return num * num; });
console.log(listSquare);
var result = category.filter(function (str) { return str.length > 2; });
console.log(result);
var x;
// x = ["hello", 10];
// console.log(x[0].substr(1));
x[0] = "world";
x[1] = 100.25;
console.log(x[1].toString());
