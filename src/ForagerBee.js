class ForagerBee extends Bee {
  // TODO..
  constructor () {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.color;
    this.food;
    this.canFly = true;
    this.treasureChest = [];

  }

  eat (){

  }

  forage (treasure) {
    this.treasureChest.push(treasure);
  }
};
