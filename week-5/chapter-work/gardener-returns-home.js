'use strict';

let gardener = {
  name: 'Beth',
  location: 'Herb Garden',
};

function returnToHouse() {
  console.log(
    `${gardener.name} has finished tending to the ${gardener.location}.`
  );
  ProcessingInstruction.exit();
}

process.on('exit', () => {
  console.log(`${gardener.name} has returned to the house. Hoorayyy, Beth!`);
});

setTimeout(returnToHouse, 2000);
