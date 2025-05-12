/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Nicole Nielsen
  Date:  05/11/2025
  Filename: Assignment 8.2
*/

'use strict';

const movies = [
  {
    title: 'What Dreams May Come',
    director: 'Vincent Ward',
    year: 1998,
    synapsis:
      'After Chris Nielsen dies in a car accident, he is guided through the afterlife by his spirit guide, Albert. A story of love after death.',
  },
  {
    title: 'Dead Poets Society',
    director: 'Peter Weir',
    year: 1989,
    synapsis:
      'John Keating, a new English teacher at an all-boys preparatory school, teaches his pupils to seize the day.',
  },
  {
    title: 'Patch Adams',
    director: 'Tom Shadyac',
    year: 1998,
    synapsis:
      'A man struggling with depression and suicidal ideation finds new meaning in life helping others, and becomes a doctor with an unorthodox approach to treatment.',
  },
]; // if you're sensing a theme here... I just really like Robin Williams' movies.

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        (m) => m.title.toLowerCase() === title.toLowerCase()
      );
      if (movie) {
        resolve(movie);
      } else {
        reject('Movie not found. Please try another title.');
      }
    }, 1000);
  });
}

document
  .getElementById('movie-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('title-input').value.trim();
    const movieTitle = document.getElementById('movie-title');
    const movieDirector = document.getElementById('movie-director');
    const movieYear = document.getElementById('movie-year');
    const movieSynopsis = document.getElementById('movie-synopsis');
    const errorMessage = document.getElementById('error-message');
    const movieInfo = document.getElementById('movie-info');

    try {
      const movie = await fetchMovie(titleInput);

      movieTitle.textContent = movie.title;
      movieDirector.textContent = `Director: ${movie.director}`;
      movieYear.textContent = `Release Year: ${movie.year}`;
      movieSynopsis.textContent = `Synopsis: ${movie.synapsis}`;

      errorMessage.textContent = ''; // clear out prev err msgs
      movieInfo.style.display = 'block';
    } catch (error) {
      errorMessage.textContent = error;
      movieInfo.style.display = 'none';
    }
  });
