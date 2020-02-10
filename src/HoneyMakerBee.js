class HoneyMakerBee extends Bee {
  constructor () {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.color;
    this.food;
    this.honeyPot = 0;
  }
  // TODO..
  eat (){

  }

  makeHoney () {
    this.honeyPot++;
  }

  giveHoney () {
    this.honeyPot--;
  }
};
