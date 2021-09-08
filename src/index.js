import './style.css';
import pokeball from './assets/img/pokeball-logo.png';

const pokeballLogo = document.getElementById('pokeballLogo');

const img = document.createElement('img');
img.src = pokeball;
img.alt = 'Pokeball';
img.classList.add('pokeball-logo');
pokeballLogo.appendChild(img);
