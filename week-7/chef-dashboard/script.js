/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Nicole Nielsen
  Date:   05/03/2025
  Filename: chefs.js
*/

'use strict';

const chefs = [
  {
    name: 'Wolfgang Puck', // Just so you know, I kept trying to type 'Punk.'
    specialty: 'Smoked Salmon Pizza', // I like salmon and I like pizza... but I don't think this would be an adventure I'd want to embark on.
    weakness: 'High Standards',
    location: 'New York, USA',
  },
  {
    name: 'Nobu Matsuhisa',
    specialty: 'Black Cod in Miso', // I would try this one though.
    weakness: 'Perfectionist',
    location: 'California, USA',
  },
  {
    name: 'Gordon Ramsay',
    specialty: 'Beef Bourguignon', // Actually delicious. 100/10 would recommend.
    weakness: 'Patience',
    location: 'London, England',
  },
];

// Functions to simulate fetching data
function retrieveChefData(index) {
  return new Promise((resolve, reject) => {
    const delay = (index + 1) * 2000; // 2s, 4s, 6s respectively
    setTimeout(() => {
      if (Math.random() > 0.3) {
        // 70% chance to for success
        resolve(chefs[index]);
      } else {
        reject(`Failed to load Chef ${index + 1} data`);
      }
    }, delay);
  });
}

// Call all promises and handle errors
Promise.allSettled([
  retrieveChefData(0),
  retrieveChefData(1),
  retrieveChefData(2),
]).then((results) => {
  results.forEach((result, index) => {
    const section = document.getElementById(`chef${index + 1}`);
    if (result.status === 'fulfilled') {
      section.innerHTML = `<h3>${result.value.name}</h3>
                               <p><strong>Specialty:</strong> ${result.value.specialty}</p>
                               <p><strong>Weakness:</strong> ${result.value.weakness}</p>
                               <p><strong>Location:</strong> ${result.value.location}</p>`;
    } else {
      section.innerHTML = `<p class="error">${result.reason}</p>`;
    }
  });
});
