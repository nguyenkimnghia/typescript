function square(num) {
    return num * num;
}
console.log(square(50));
var squareFE = function (num) {
    return num * num;
};
function add(a) {
    return function (b) {
        return a + b;
    };
}
var addwith5 = add(5);
console.log(addwith5(3));
console.log(addwith5(15));
