var x = 1;
var x = 2;

let a = 3;
let b = "test";
let floatData = 0.51487;
let y;
y = "c";

//const c; - 초기값이 없어서 이렇게 설정하면 안됨
const c = 3;

const obj = {
    name : "test",
    age : 12,
}

// 데이터의 타임을 지정해주지 않아도 모든 데이터가 쉽게 들어갈 수 있음
// 하지만 문제를 야기하는 경우가 있어 타입스크립트라는 것이 생겨남

// in JAVA
// private String name = "test";
// private int age = 16;

console.log(x);
console.log(a);
console.log(b);
console.log(c);
console.log(floatData);
console.log(obj); 
// 터미널에서 node basic01.js
