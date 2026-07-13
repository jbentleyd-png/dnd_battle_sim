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
  render() {
    // styling:
    const charDisplay = document.createElement("div");
    charDisplay.style.backgroundColor = "white";
    charDisplay.style.width = "150px";
    charDisplay.style.height = "200px";
    charDisplay.style.boxSizing = "border-box";
    charDisplay.style.border = "1px solid black";
    charDisplay.style.margin = "5px";

    // sections:
    const charName = document.createElement("h2");
    charName.textContent = this.name;
    charDisplay.appendChild(charName);

    const charHP = document.createElement("h3");
    charHP.textContent = `HP: ${this.health}`;
    charDisplay.appendChild(charHP);
    this.hpElement = charHP; //points to h3

    const charAC = document.createElement("h3");
    charAC.textContent = `AC: ${this.armorClass}`;
    charDisplay.appendChild(charAC);

    // buttons:
    const charDamage = document.createElement("button");
    charDamage.textContent = "Take Damage";
    charDamage.onclick = () =>
      this.takeDamage(prompt("How much damage(ignore AC)?"));
    charDisplay.appendChild(charDamage);

    const charHeal = document.createElement("button");
    charHeal.textContent = "Heal Damage";
    charHeal.onclick = () => this.heal(prompt("Heal how much damage?"));
    charDisplay.appendChild(charHeal);

    return charDisplay;
  }
}
