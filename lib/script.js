const addPlayerButton = document.querySelector("#addPlayer");
addPlayerButton.onclick = () => createCharacter("Player");
const addEnemyButton = document.querySelector("#addEnemy");
addEnemyButton.onclick = () => createCharacter("Enemy");

function createCharacter(team) {
  let name = prompt(`${team} name:`);
  let health = prompt(`${team} HP:`);
  let armorClass = prompt(`${team} AC:`);
  //need diff const name depending on who it is?
  const character = new Character(name, team, health, armorClass);
  console.log(character);
  //display the character for the first time
  const charDisplay = document.createElement("div");
  charDisplay.style.backgroundColor = "white";
  charDisplay.style.width = "125px";
  charDisplay.style.height = "175px";
  charDisplay.style.boxSizing = "border-box";
  charDisplay.style.border = "1px solid black";
  charDisplay.style.margin = "5px";
  team == "Player"
    ? playerRow.appendChild(charDisplay)
    : enemyRow.appendChild(charDisplay);
  //now add the sections of the actual thing:
  const charName = document.createElement("h2");
  charName.textContent = character.name;
  charDisplay.appendChild(charName);
  const charHP = document.createElement("h3");
  charHP.textContent = `HP: ${character.health}`;
  charDisplay.appendChild(charHP);
  const charAC = document.createElement("h3");
  charAC.textContent = `AC: ${character.armorClass}`;
  charDisplay.appendChild(charAC);
}

const playerRow = document.querySelector("#playerRow");
const enemyRow = document.querySelector("#enemyRow");
