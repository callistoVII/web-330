'use strict';
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Nicole Nielsen
      Date:   05/18/2025

      Filename: project12-03.js
*/

// Run once page loads
$(() => {
  $('article > h2').click((e) => {
    // Declare variables described
    let heading = $(e.target);
    let list = $(heading).next();
    let headingImage = $(heading).children('img');

    $(list).slideToggle(500); // timed to half a second

    if ($(headingImage).attr('src') === 'plus.png') {
      $(headingImage).attr('src', 'minus.png');
    } else {
      $(headingImage).attr('src', 'plus.png');
    }

    // book had some instructions spelt wrong. plus.pg instead of plus.png. fixed it.
  });
});
