const addPlayerButton = document.querySelector("#addPlayer");
addPlayerButton.onclick = () => createCharacter("Player");
const addEnemyButton = document.querySelector("#addEnemy");
addEnemyButton.onclick = () => createCharacter("Enemy");

function createCharacter(team) {
  let name = prompt(`${team} name:`);
  let health = prompt(`${team} HP:`);
  let armorClass = prompt(`${team} AC:`);
  const character = new Character(name, team, health, armorClass);
  console.log(character);
  const charDisplay = character.display;

  team == "Player"
    ? playerRow.appendChild(charDisplay)
    : enemyRow.appendChild(charDisplay);
}

const playerRow = document.querySelector("#playerRow");
const enemyRow = document.querySelector("#enemyRow");
