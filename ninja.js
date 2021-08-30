class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName () {
        // Console log name
        console.log(this.name);
    }
    showStats () {
        // Console log stats
        console.log([this.name, this.health, this.speed, this.strength]);
    }
    drinkSake () {
        // Add 10 health
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();