const addPlayerButton = document.querySelector("#addPlayer");
addPlayerButton.onclick = () => createCharacter("Player");
const addEnemyButton = document.querySelector("#addEnemy");
addEnemyButton.onclick = () => createCharacter("Enemy");

function createCharacter(team) {
  //need input guarding
  let name = prompt(`${team} name:`);
  let health = parseInt(prompt(`${team} HP:`), 10);
  while (!Number.isFinite(health)) {
    health = parseInt(prompt(`Re-enter ${team} HP (number only):`), 10);
  }
  let armorClass = parseInt(prompt(`${team} AC:`), 10);
  while (!Number.isFinite(armorClass)) {
    armorClass = parseInt(prompt(`Re-enter ${team} AC (number only):`), 10);
  }
  const character = new Character(name, team, health, armorClass);
  console.log(character);
  const charDisplay = character.display;

  team == "Player"
    ? playerRow.appendChild(charDisplay)
    : enemyRow.appendChild(charDisplay);
}

const playerRow = document.querySelector("#playerRow");
const enemyRow = document.querySelector("#enemyRow");
