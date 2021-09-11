/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import './style.css';
import pokeball from './assets/img/pokeball-logo.png';
import bgImage from './assets/img/pokemon pattern.png';
import { fetchPokemons } from './display-pokemon-list.js';

const body = document.querySelector('body');

body.style.backgroundImage = `url(${bgImage})`;

const pokeballLogo = document.getElementById('pokeballLogo');

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

fetchPokemons((offset = 1), (limit = 8));

const btnConsole = document.getElementById('showPopUpBtn');
