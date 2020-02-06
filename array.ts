const list: number[] = [1,2,3];
const  category: Array<string> = ['Sport', 'IT', 'Car'];

console.log("list");
list.forEach((num) =>
console.log(num.toFixed(2)));

console.log("categries");
category.forEach((str) =>
    console.log(str.search('a')));

//convert mảng tù dạng này sang dạng khác.
const  listSquare = list.map(num => num * num);
console.log(listSquare);

const result = category.filter(str => str.length > 2);
console.log(result);

let x: [string, number];

// x = ["hello", 10];
// console.log(x[0].substr(1));

x[0] = "world";
x[1] = 100.25;

console.log(x[1].toString());