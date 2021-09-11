/**
 * @jest-environment jsdom
 */

import { displaycomments } from '../src/comments-handler.js';
import mockComments from './moke-data-comments.js';

test('total number of comment of Pokemon bulbasaur must be 37', () => {
  document.body.innerHTML = displaycomments(mockComments);
  const totalComments = document.getElementById('totalComments');

  expect(parseInt(totalComments.textContent, 10)).toBe(37);
});
