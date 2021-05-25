function multi(p1, p2) {
    return p1 * p2;
};

//Arrow Function
const plus = (p1, p2) => {
    return p1 + p2;
};

let result = multi(2,4);

console.log(multi(2,6));
console.log(result);
console.log(plus(10, 60));

//#work1
//minus(function), div(arrow function) 두가지 함수를 추가해주세요!

function minus (p1, p2) {
    return p1 - p2;
};

const div = (p1, p2) => {
    return p1/p2;
};

console.log(minus(2,6));
console.log(div(2,6));