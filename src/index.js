import './style.css';
import pokeball from './assets/img/pokeball-logo.png';
import fetchPokemons from './display-pokemon-list.js';

const pokeballLogo = document.getElementById('pokeballLogo');

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

fetchPokemons(9);
