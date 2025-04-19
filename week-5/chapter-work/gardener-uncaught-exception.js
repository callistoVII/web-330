'use strict';

let gardener = {
  name: 'Beth',
  location: 'Herb Garden',
};

function returnToHouse() {
  console.log(
    `${gardener.name} has finished tending to the ${gardener.location}.`
  );
  nonExistentFunction();
}

process.on('Uncaught Exception', (err) => {
  console.log(`An error has occurred: ${err.message}.`);
  console.log(`${gardener.name} will return to the house to recover.`);
  process.exit(1);
});

setTimeout(returnToHouse, 2000);
