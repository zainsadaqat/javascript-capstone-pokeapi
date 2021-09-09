/* eslint-disable no-use-before-define */
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
          <button type="button" class="gray-dark-circle-heart-button d-flex justify-content-center align-items-center">
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

        <div class="modal fade" id="commentsModal" tabindex="-1" aria-hidden="true">
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
                  <button type="button" class="btn-close fs-1 me-4" data-bs-dismiss="modal" aria-label="Close"></button>
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
                      <div class="display-green d-flex justify-content-center align-items-center" id="PokemonImageComments">
                      </div>
                    </div>
                    <div class="d-flex justify-content-between px-4">
                      <div class="medium-red-circle m-1"></div>
                      <ion-icon name="menu-sharp" class="fs-1"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer border-0">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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

export { fetchPokemons, displayLikes };