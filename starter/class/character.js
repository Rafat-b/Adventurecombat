class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
  }

  applyDamage(amount) {
    // Fill this in
  }

  die() {
    // Fill this in
  }

}

module.exports = {
  Character,
};
