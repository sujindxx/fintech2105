let car = {
    name : "sonata",
    ph : "500ph",
    start: function () {
        console.log("engine start");
    },
    stop: function () {
        console.log("engine stop");
    },
};

console.log(car.name);
console.log(car.ph);
//console.log(car.start); //[Function: start]
car.start(); //engine start

console.log("이름: " + car.name + " 마력: " + car.ph);
console.log(`이름: ${car.name} 마력: ${car.ph}`);