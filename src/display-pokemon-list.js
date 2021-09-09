/* eslint-disable no-use-before-define */

import addNewLike from './add-new-like.js';

/* eslint-disable no-unused-vars */
const pokemonContainer = document.getElementById('pokemonContainer');
const spinner = document.getElementById('spinner');

const offset = 1;
const limit = 8;

let pokemon;

// eslint-disable-next-line no-return-await
const fetchPokemon = async (id) => await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((response) => response.json())
  .then((data) => {
    createPokemon(data);
    addLikesListener();
    pokemon = data;
    spinner.classList.add('d-none');
  });

function fetchPokemons(offset, limit) {
  spinner.classList.add('d-none');
  for (let i = offset; i <= offset + limit; i += 1) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
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
            <div class="display-green d-flex justify-content-center align-items-center" id="${pokemon.id}PokemonImageMain">
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
          <button type="button" class="like-btn gray-dark-circle-heart-button d-flex justify-content-center align-items-center" data-pokemon-id=${pokemon.id} id="${pokemon.id}_likeButton">
            <span id="${pokemon.id}_colorHeart" class="white-heart border-5"></span>
          </button>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <div class="pokemon-number d-flex align-items-center ps-2 pe-3">#${pokemon.id.toString().padStart(4, 0)}</div>
          <div class="likes-box d-flex align-items-center ps-3"><span class="pe-2" id="${pokemon.id}_pokemonLikes">0</span>Likes</div>
        </div>

        <button type="button" class="Comments-button mt-3" data-bs-toggle="modal" data-bs-target="#commentsModal">
          Comments
        </button>

        <div
                class="modal fade"
                id="commentsModal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div
                      class="modal-header border-bottom border-dark border-5"
                    >
                      <div class="d-flex">
                        <div class="big-blue-circle me-3 mb-3"></div>
                        <div class="red-circle me-2"></div>
                        <div class="yellow-circle me-2"></div>
                        <div class="green-circle me-2"></div>
                      </div>
                      <div class="d-flex">
                        <button
                          type="button"
                          class="btn-close fs-1 me-4"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
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
                            <div
                              class="
                                display-green
                                d-flex
                                justify-content-center
                                align-items-center
                              "
                              id="PokemonImageComments"
                            >
                              <img
                                src="https://i.pinimg.com/originals/0d/b1/0c/0db10c1dd328a29177abbd8d992a370f.gif"
                                alt="pikachu-image"
                                class="pokemon-image"
                              />
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
                          <input
                            type="text"
                            placeholder="Your name"
                            id="username"
                          />
                          <textarea
                            name="comment"
                            id="comment"
                            cols="20"
                            rows="10"
                            placeholder="Your insights"
                          ></textarea>
                          <input
                            type="submit"
                            value="Comment"
                            class="btn btn-primary"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
    </div>
  </div>
  `;

  const spriteContainer = document.getElementById(`${pokemon.id}PokemonImageMain`);
  const sprite = document.createElement('img');
  sprite.className = 'pokemon-image';
  sprite.alt = 'pokemon-image';
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);
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

function addLikesListener(data) {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      addNewLike(likeButton.dataset.pokemonId).then(
        () => {
          window.location.reload();
        },
      );
    });
  });
}

export { fetchPokemons, displayLikes };