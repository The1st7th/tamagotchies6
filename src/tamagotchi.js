export class Tamagotchi{
    constructor(name, hunger, sleep) {
        this.name = name;
        this.hunger = hunger;
        this.sleep = sleep;
    }

    getName() {
        return this.name;
    }
    getHunger() {
        return this.hunger;
    }
    getSleep() {
        return this.sleep;
    }
    giveFood() {
        this.hunger += 50;
    }
    giveRest() {
        this.sleep += 50;
    }

}
