"use strict";
class Engine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
}
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        this._engine = value;
    }
    start() {
        alert("Engine Started" + this.engine.engineType);
    }
    stop() {
        alert("Engine Stopped" + this._engine.engineType);
    }
}
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    alert(car.engine.engineType);
    car.start();
};
//# sourceMappingURL=helloword.js.map