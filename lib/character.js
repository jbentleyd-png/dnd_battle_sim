class Character {
  constructor(name, team, health, armorClass) {
    this.name = name;
    this.team = team;
    this.health = parseInt(health, 10);
    this.armorClass = parseInt(armorClass, 10);
    this.hpElement = null;
  }

  takeDamage(amount) {
    this.health -= parseInt(amount, 10) - this.armorClass;
    console.log(`New health: ${this.health}`);
    this.updateHP();
    if (this.hp <= 0) {
      this.die();
    }
  }

  heal(amount) {
    if (this.hp <= 0 && this.hp + amount > 0) {
      this.stabilize();
    }
    this.health += parseInt(amount, 10);
    console.log(`New health: ${this.health}`);
    this.updateHP();
  }

  updateHP() {
    if (this.hpElement) {
      this.hpElement.textContent = `HP: ${this.health}`;
    }
  }

  die() {
    // this will work if the rendering is also managed inside the object
    // display : red type shiz
  }

  stabilize() {
    // revert display
  }

  // move all rendering to the class instead of the script next, please:
}
