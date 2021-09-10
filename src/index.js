/* eslint-disable linebreak-style */
import './style.css';
import pokeball from './assets/img/pokeball-logo.png';
import getComments from './get-comments.js';
import { fetchPokemons } from './display-pokemon-list.js';
import recievedLikes from './display-likes.js';

const pokeballLogo = document.getElementById('pokeballLogo');
const allComments = document.querySelector('.all-comments');
const singleComment = document.createElement('p');

const getAllComments = async () => {
  const response = await getComments(1);
  response.forEach((resp) => {
    singleComment.innerHTML = `${resp.creation_date} ${resp.username}: ${resp.comment}`;
    // allComments.appendChild(singleComment);
  });
};

getAllComments();

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

fetchPokemons((offset = 1), (limit = 8));

recievedLikes();
