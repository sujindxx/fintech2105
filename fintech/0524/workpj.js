let car1 = {
    name : "sonata",
    ph : "500ph",
    start: function () {
        console.log("engine start");
    },
    stop: function () {
        console.log("engine stop");
    },
};

let car2 = {
    name : "bmw",
    ph : "500ph",
    start: function () {
        console.log("engine start");
    },
    stop: function () {
        console.log("engine stop");
    },
};

let car3 = {
    name : "tico",
    ph : "500ph",
    start: function () {
        console.log("engine start");
    },
    stop: function () {
        console.log("engine stop");
    },
};

let cars = [car1, car2, car3];
//console.log(cars);

//#work 배열에서 bmw 라는 자동차가 있으면 시동을 걸어주세요
// array.map 함수를 활용하여 작성바랍니다.
//--------------------work-----------------------

cars.map((car) => {
    if(car.name === "bmw") {
        console.log(car.name);
        car.start();
    }
});