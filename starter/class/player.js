const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    // Fill this in
    const pickedUpItem = this.currentRoom.getItemByName(itemName)
    if (pickedUpItem) {
        this.items.push(pickedUpItem)
        const itemIndex = this.currentRoom.items.indexOf(pickedUpItem)
        this.currentRoom.items.splice(itemIndex, 1)
    } else {
      console.log(`${itemName} not found in room`)
    }

  }

  dropItem(itemName) {

    // Fill this in
    const droppedItem = this.getItemByName(itemName)
    if (droppedItem) {
        this.currentRoom.items.push(droppedItem)
        const itemIndex = this.items.indexOf(droppedItem)
        this.items.splice(itemIndex, 1)
    } else {
    console.log(`${itemName} not found in inventory`)
    }

  }

  eatItem(itemName) {

    // Fill this in
    const itemToEat = this.getItemByName(itemName);
    if (itemToEat && itemToEat instanceof Food) {
        const itemIndex = this.items.indexOf(itemToEat);
        this.items.splice(itemIndex, 1);
    }
    else console.log(`You can't eat ${itemName}`);

  }

  getItemByName(name) {

    // Fill this in
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.name === name) return item;
    }

  }

  hit(name) {

    // Fill this in

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
