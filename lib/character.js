class Character {
  constructor(name, team, health, armorClass) {
    this.name = name;
    this.team = team;
    this.health = health;
    this.armorClass = armorClass;
  }

  takeDamage(amount) {
    this.health -= amount;
  }

  heal(amount) {
    this.health += amount;
  }
}
