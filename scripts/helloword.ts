class Engine{

constructor(public horsePower: number, public engineType: string) {
}
}
class Car {
  private _engine: Engine;
  constructor(engine: Engine) {
     this.engine = engine
  }
  get engine() : Engine{
   return this._engine;
  }
  set engine(value: Engine) {
   this._engine = value;
   }
  start():void {
    alert("Engine Started" + this.engine.engineType);
  }
  stop():void {
    alert("Engine Stopped" + this._engine.engineType);
  }
}

window.onload = function(){

  var engine = new Engine(300, 'V8');
  var car = new Car(engine);
  alert(car.engine.engineType);
  car.start();
}