function square(num: number): number {
    return num * num;
}

console.log(square(50));

const squareFE = function (num: number): number {
    return num * num;
};

function add(a: number): Function {
    return function (b: number): number {
        return a + b;
    }
}

const  addwith5 = add(5);
console.log(addwith5(3));
console.log(addwith5(15));