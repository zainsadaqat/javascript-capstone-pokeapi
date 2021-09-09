import './style.css';
import pokeball from './assets/img/pokeball-logo.png';
import { fetchPokemons } from './display-pokemon-list.js';
import RecievedLikes from './display-likes';
import recievedLikes from './display-likes';

const pokeballLogo = document.getElementById('pokeballLogo');
const pokemonContainer = document.getElementById('pokemonContainer');

let offset;
let limit;

// add icon to the page
const link = document.createElement('link');
link.rel = 'icon';
link.href = pokeball;
document.head.appendChild(link);

const img = document.createElement('img');
img.src = pokeball;
img.alt = 'Pokeball';
img.classList.add('pokeball-logo');
pokeballLogo.appendChild(img);

const previous = document.getElementById('previous');
const next = document.getElementById('next');

fetchPokemons(offset = 1, limit = 8);

previous.addEventListener('click', () => {
  if (offset > 1) {
    offset -= 9;
    pokemonContainer.innerHTML = '';
    fetchPokemons(offset, limit);
  }
});

next.addEventListener('click', () => {
  if (offset < 889) {
    offset += 9;
    pokemonContainer.innerHTML = '';
    fetchPokemons(offset, limit);
  }
});

recievedLikes();
