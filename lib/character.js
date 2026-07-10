class Character {
  constructor(name, team, health, armor_class) {
    this.name = name;
    this.team = team;
    this.health = health;
    this.armor_class = armor_class;
  }

  takeDamage(amount) {
    this.health -= amount;
  }

  heal(amount) {
    this.health += amount;
  }
}
