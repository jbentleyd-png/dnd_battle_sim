class Character {
  constructor(name, team, health, armorClass) {
    this.name = name;
    this.team = team;
    this.health = parseInt(health, 10);
    this.armorClass = parseInt(armorClass, 10);
  }

  takeDamage(amount) {
    this.health -= parseInt(amount, 10) - this.armorClass;
    console.log(`New health: ${this.health}`);
  }

  heal(amount) {
    this.health += parseInt(amount, 10);
    console.log(`New health: ${this.health}`);
  }
}
