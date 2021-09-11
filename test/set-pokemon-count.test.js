/**
 * @jest-environment jsdom
 */
/* eslint-disable linebreak-style */

import { indexer, SetPokemonCount } from '../src/display-pokemon-list.js';
import pokedex from './moke-data-PokeAPI.js';

test('total number of pokemons must be 1118', () => {
  document.body.innerHTML = '<span id="getNumberAllPokemons"></span>';
  const indexerPokedex = indexer(pokedex);
  SetPokemonCount(indexerPokedex.length);
  const getNumberAllPokemons = document.getElementById('getNumberAllPokemons');

  expect(parseInt(getNumberAllPokemons.innerHTML, 10)).toBe(1118);
});