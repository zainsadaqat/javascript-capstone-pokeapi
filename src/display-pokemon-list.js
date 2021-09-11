/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */

import addNewLike from './add-new-like.js';
import recievedLikes from './display-likes.js';
import displayComments from './display-comments.js';

const pokemonContainer = document.getElementById('pokemonContainer');
const spinner = document.getElementById('spinner');

const getNumberAllPokemons = document.getElementById('getNumberAllPokemons');

const offset = 1;
const limit = 8;

let pokemon;

const fetchPokemons = async () => {
  await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500')
    .then((response) => response.json())
    .then((data) => {
      createPokemon(data);
      spinner.classList.add('d-none');
    }).then(() => addLikesListener());
};

function indexer(pokedex) {
  pokedex.results.forEach((pokemon, index) => {
    pokemon.index = index + 1;
  });
  return pokedex.results;
}

function SetPokemonCount(total) {
  const getNumberAllPokemons = document.getElementById('getNumberAllPokemons');
  getNumberAllPokemons.textContent = total;
}

function createPokemon(pokedex) {
  let page = 1;
  const indexerPokedex = indexer(pokedex);

  SetPokemonCount(indexerPokedex.length);

  const displayPage = (page) => {
    pokemonContainer.innerHTML = '';

    const end = page * 30;
    const start = end - 30;
    indexerPokedex.filter((item, i) => {
      if (i >= start && i < end) {
        return item;
      }
    }).forEach((pokemon) => {
      const showPopUpBtn = document.createElement('button');
      showPopUpBtn.classList.add('Comments-button', 'mt-3');
      showPopUpBtn.textContent = 'Comments';

      pokemonContainer.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <div class="card-header d-flex border-bottom border-5 border-dark">
            <div class="big-blue-circle me-3 mb-3"></div>
            <div class="red-circle me-2"></div>
            <div class="yellow-circle me-2"></div>
            <div class="green-circle me-2"></div>
          </div>
          <div class="card-body d-flex justify-content-center">
            <div class="gray-box">
              <div class="d-flex justify-content-center">
                <div class="small-red-circle m-1"></div>
                <div class="small-red-circle m-1"></div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="display-green d-flex justify-content-center align-items-center" id="${pokemon.index}PokemonImageMain">
                </div>
              </div>
              <div class="d-flex justify-content-between px-4">
                <div class="medium-red-circle m-1"></div>
                <ion-icon name="menu-sharp" class="fs-1"></ion-icon>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <div class="name-pokemon d-flex align-items-center ps-3">${pokemon.name}</div>
              <button type="button" class="like-btn gray-dark-circle-heart-button d-flex justify-content-center align-items-center" data-pokemon-id=${pokemon.index} id="${pokemon.index}_likeButton">
                <span id="${pokemon.index}_colorHeart" class="white-heart border-5"></span>
              </button>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <div class="pokemon-number d-flex align-items-center ps-2 pe-3">#${pokemon.index}</div>
              <div class="likes-box d-flex align-items-center ps-3"><span class="pe-2" id="${pokemon.index}_pokemonLikes">0</span>Likes</div>
            </div>

            ${showPopUpBtn.outerHTML}

            <div class="d-none" id="${pokemon.index}popUpContainer" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header border-bottom border-dark border-5">
                  <div class="d-flex">
                    <div class="big-blue-circle me-3 mb-3"></div>
                    <div class="red-circle me-2"></div>
                    <div class="yellow-circle me-2"></div>
                    <div class="green-circle me-2"></div>
                  </div>
                  <div class="d-flex">
                    <button type="button" class="btn-close fs-1 me-4" id="${pokemon.index}_closePopUp"></button>
                  </div>
                </div>
                <div class="modal-body">
                  <div class="d-flex justify-content-center">
                    <div class="gray-box">
                      <div class="d-flex justify-content-center">
                        <div class="small-red-circle m-1"></div>
                        <div class="small-red-circle m-1"></div>
                      </div>
                      <div class="d-flex justify-content-center">
                        <div class=" display-green d-flex justify-content-center align-items-center" id="${pokemon.index}PokemonImageMain">
                        </div>
                      </div>
                      <div class="d-flex justify-content-between px-4">
                        <div class="medium-red-circle m-1"></div>
                        <ion-icon name="menu-sharp" class="fs-1"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 class="total-comments">Comments (2)</h3>
                    <section class="all-comments"></section>
                  </div>
                  <div>
                    <h3 class="add-comment-heading">Add a comment</h3>
                    <form action="#" class="form" id="form">
                      <input type="text" placeholder="Your name" id="username" />
                      <textarea name="comment" id="comment" cols="20" rows="10" placeholder="Your insights"></textarea>
                      <input type="submit" value="Comment" class="btn btn-primary"/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      showPopUpBtn.addEventListener('click', () => {
        displayComments(pokemon);
        console.log(pokemon.index);
      });

      const spriteContainer = document.getElementById(`${pokemon.index}PokemonImageMain`);
      const sprite = document.createElement('img');
      sprite.className = 'pokemon-image';
      sprite.alt = 'pokemon-image';

      const imageExists = (imageUrl) => {
        let ans = 'https://i.pinimg.com/originals/0d/b1/0c/0db10c1dd328a29177abbd8d992a370f.gif';
        const http = new XMLHttpRequest();
        http.open('HEAD', imageUrl, false);
        http.send();
        if (http.status !== 404) {
          ans = imageUrl;
        }
        return ans;
      };

      let imagePokemon;

      if (pokemon.index <= 898) {
        imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`;
      } else {
        imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index + 9102}.png`;
      }

      sprite.src = imageExists(imagePokemon);

      spriteContainer.appendChild(sprite);
    });

    recievedLikes();
  };

  const previous = document.getElementById('previous');
  const next = document.getElementById('next');

  displayPage(page);

  previous.addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      displayPage(page);
      recievedLikes();
      addLikesListener();
    }
  });

  next.addEventListener('click', () => {
    if (page < indexerPokedex.length / 30) {
      page += 1;
      displayPage(page);
      recievedLikes();
      addLikesListener();
    }
  });
}

function displayLikes(likes) {
  likes.forEach((like) => {
    const pokemonLikes = document.getElementById(`${like.item_id}_pokemonLikes`);
    if (pokemonLikes) {
      pokemonLikes.textContent = like.likes;
      const colorHeart = document.getElementById(`${like.item_id}_colorHeart`);
      colorHeart.classList.remove('white-heart');
      colorHeart.classList.add('red-heart');
    }
  });
}

function addLikesListener(page) {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      addNewLike(parseInt(likeButton.dataset.pokemonId, 10));
    });
  });
}

export {
  fetchPokemons, displayLikes, SetPokemonCount, indexer,
};