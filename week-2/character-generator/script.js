/*
  Pragmatic JavaScript
  Programming Assignment

  Author: Nicole Nielsen
  Date:   04/19/2025
*/

'use strict';

function createCharacter(name, gender, characterClass) {
  let character = {
    characterName: name,
    characterGender: gender,
    characterClass: characterClass,
  };
  return character;
}

document
  .getElementById('createCharacterButton')
  .addEventListener('click', function (e) {
    e.preventDefault();

    //TODO: Get form values
    const nameInput = document.getElementById('name').value;
    const genderInput = document.getElementById('gender').value;
    const classInput = document.getElementById('characterClass').value;

    //TODO: Create character
    let fullCharacter = createCharacter(nameInput, genderInput, classInput);
    if (fullCharacter) {
      //TODO: Display character information
      characterDisplay.innerHTML = `
            <h2>Character Details</h2>
            <p><strong>Name:</strong> ${fullCharacter.characterName}</p>
            <p><strong>Gender:</strong> ${fullCharacter.characterGender}</p>
            <p><strong>Class:</strong> ${fullCharacter.characterClass}</p>
        `;
      characterDisplay.style.display = 'block'; // Show the div
    }
  });
