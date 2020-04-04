enum FlyTypes {
  SimpleFly, JetFly
}

interface IFlyBehavior {
  fly();
}

class SimpleFly implements IFlyBehavior {
  fly() {
    console.log('Simple Fly');
  }
}

class JetFly implements IFlyBehavior {
  fly() {
    console.log('Jet Fly');
  }
}

class Duck {
  private _fly: IFlyBehavior;

  constructor(public name: String, flyType: FlyTypes) {
    this.name = name;

    switch(flyType) {
      case FlyTypes.SimpleFly:
        this._fly = new SimpleFly(); 
        break;
      case FlyTypes.JetFly:
        this._fly = new JetFly();
        break;
    }
  }

  fly() {
    this._fly.fly();
  }
}