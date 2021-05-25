let car = {
    name: "sonata",
    ph: "500ph",
    start: function() {
        console.log("engine start");
    },
    stop: function() {
        console.log("engine stop");
    },
};

// 자바 스크립트의 배열에는 다양하게 들어감(객체와 기능도 가능)
let carArray = ["bmw", "sonata", "tico", 12, 12.1234, car];
// in JAVA
// Stirng [] carNameList = new String[3];

console.log(carArray[0]);
console.log(carArray[1]);
console.log(carArray[2]);
console.log(carArray[3]);
console.log(carArray[4]);
console.log(carArray[5]);