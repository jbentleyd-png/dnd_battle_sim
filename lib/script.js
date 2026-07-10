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
}
