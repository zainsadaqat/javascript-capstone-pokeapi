/**
 * @jest-environment jsdom
 */
/* eslint-disable linebreak-style */

import { displaycomments } from '../src/comments-handler.js';
import mockComments from './moke-data-comments.js';

test('total number of pokemons must be 1118', () => {
  document.body.innerHTML = displaycomments(mockComments);
  const totalComments = document.getElementById('totalComments');

  expect(parseInt(totalComments.textContent, 10)).toBe(37);
});
