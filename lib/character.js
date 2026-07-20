class Character {
  constructor(name, team, health, armorClass) {
    this.name = name;
    this.team = team;
    this.health = health;
    this.armorClass = armorClass;
    this.hpElement = null;
    this.display = this.render();
  }

  takeDamage(amount) {
    this.health -= parseInt(amount, 10) - this.armorClass;
    console.log(`New health: ${this.health}`);
    this.updateHP();
    if (this.health <= 0) {
      this.die();
    }
  }

  heal(amount) {
    if (this.health <= 0 && this.health + amount > 0) {
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
    if (this.display) {
      this.display.style.backgroundColor = "red";
    }
  }

  stabilize() {
    if (this.display) {
      this.display.style.backgroundColor = "white";
    }
  }

  // first-time rendering:
  render() {
    // styling:
    const charDisplay = document.createElement("div");
    charDisplay.style.backgroundColor = "white";
    charDisplay.style.width = "225px";
    charDisplay.style.height = "340px";
    charDisplay.style.borderRadius = "12px";
    charDisplay.style.boxSizing = "border-box";
    charDisplay.style.border = "1px solid black";
    charDisplay.style.padding = "10px";
    charDisplay.style.margin = "15px";

    // sections:
    const exitButton = document.createElement("button");
    exitButton.textContent = "X";
    exitButton.onclick = () => charDisplay.remove();
    charDisplay.appendChild(exitButton);
    const spacing = document.createElement("br");
    charDisplay.appendChild(spacing);
    const spacing2 = document.createElement("br");
    charDisplay.appendChild(spacing2);

    const icon = document.createElement("img");
    icon.src =
      this.team == "Player"
        ? "lib/icons/Player/visored-helm.svg"
        : "lib/icons/Enemy/devil-mask.svg";
    icon.style.height = "100px";
    charDisplay.appendChild(icon);

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
