import addNewLike from './add-new-like.js';
import getComments, { sendComment } from './comments-handler.js';

const pokemonContainer = document.getElementById('pokemonContainer');
const spinner = document.getElementById('spinner');

function indexer(pokedex) {
  pokedex.results.forEach((pokemon, index) => {
    pokemon.index = index + 1;
  });
  return pokedex.results;
}

function addLikesListener() {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      addNewLike(parseInt(likeButton.dataset.pokemonId, 10));
    });
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

const recievedLikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/euJcQ410fgo2CbYVuqO8/likes/', {
  method: 'GET',
})
  .then((res) => res.json())
  .then((json) => displayLikes(json));

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
      return false;
    }).forEach((pokemon) => {
      const showPopUpBtn = document.createElement('button');
      showPopUpBtn.classList.add('Comments-button', 'mt-3');
      showPopUpBtn.id = 'showPopUpBtn';
      showPopUpBtn.textContent = 'Comments';

      pokemonContainer.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12" id="pokedexContainer">
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

            <button type="button" class="Comments-button mt-3" data-bs-toggle="modal" data-bs-target="#popUpContainer${pokemon.index}" id="openComments">
            Comments
            </button>

            <div class="modal fade rounded-3" tabindex="-1" aria-labelledby="popUpContainerLabel${pokemon.index}" aria-hidden="true" id="popUpContainer${pokemon.index}">
            <div class="modal-dialog modal-xl rounded-3">
              <div class="modal-content">
                <div class="modal-header border-bottom border-dark border-5">
                  <div class="d-flex">
                    <div class="big-blue-circle me-3 mb-3"></div>
                    <div class="red-circle me-2"></div>
                    <div class="yellow-circle me-2"></div>
                    <div class="green-circle me-2"></div>
                  </div>
                  <div class="d-flex">
                    <button type="button" class="btn close me-3" data-bs-dismiss="modal">
                      <ion-icon class="fs-close" name="close"></ion-icon>
                    </button>
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
                        <div class=" display-green d-flex justify-content-center align-items-center" id="${pokemon.index}PokemonImageComment">
                        </div>
                      </div>
                      <div class="d-flex justify-content-between px-4">
                        <div class="medium-red-circle m-1"></div>
                        <ion-icon name="menu-sharp" class="fs-1"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 class="add-comment-heading">Add a comment</h3>
                    <div id="commentsForm">

                    <form class="form" id="form" onsubmit="return false">
                      <input type="hidden" name="pokemonId" value="${pokemon.index}" id="pokemonId">
                      <input type="text" placeholder="Your name" id="username" />
                      <textarea name="comment" id="comment" cols="20" rows="10" placeholder="Your insights"></textarea>
                      <input type="submit" value="Comment" class="btn btn-dark disabled" id="submitComment">
                    </form>

                    <div class="d-flex flex-column justify-content-center align-items-center" id="displayComments">
                    </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      const spriteContainer = document.getElementById(`${pokemon.index}PokemonImageMain`);
      const spriteContainerComments = document.getElementById(`${pokemon.index}PokemonImageComment`);
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
      spriteContainerComments.appendChild(sprite.cloneNode(true));
    });

    recievedLikes();
  };

  const previous = document.getElementById('previous');
  const next = document.getElementById('next');

  displayPage(page);

  const updateButtons = () => {
    pokemonContainer.querySelectorAll('form').forEach((form) => {
      form.elements.username.addEventListener('input', () => {
        if (form.elements.username.value !== '' && form.elements.comment.value !== '') {
          form.elements.submitComment.classList.remove('disabled');
        } else {
          form.elements.submitComment.classList.add('disabled');
        }
      });

      form.elements.comment.addEventListener('input', () => {
        if (form.elements.username.value !== '' && form.elements.comment.value !== '') {
          form.elements.submitComment.classList.remove('disabled');
        } else {
          form.elements.submitComment.classList.add('disabled');
        }
      });
      form.elements.submitComment.disabled = false;
      form.elements.submitComment.addEventListener(('click'), () => {
        sendComment(form.elements.pokemonId.value,
          form.elements.username.value,
          form.elements.comment.value,
          form.parentNode.childNodes[3]).then(() => {
          form.elements.username.value = '';
          form.elements.comment.value = '';
          form.elements.submitComment.classList.add('disabled');
        });
      });
    });

    pokemonContainer.childNodes.forEach((pokedexContainer) => {
      pokedexContainer.addEventListener('click', (event) => {
        if (event.target.id === 'openComments') {
          getComments(pokedexContainer.querySelector('#pokemonId').value, pokedexContainer.querySelector('#displayComments'));
        }
      });
    });
  };

  updateButtons();

  previous.addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      displayPage(page);
      recievedLikes();
      addLikesListener();
      updateButtons();
    }
  });

  next.addEventListener('click', () => {
    if (page < indexerPokedex.length / 30) {
      page += 1;
      displayPage(page);
      recievedLikes();
      addLikesListener();
      updateButtons();
    }
  });
}

const fetchPokemons = async () => {
  await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500')
    .then((response) => response.json())
    .then((data) => {
      createPokemon(data);
      spinner.classList.add('d-none');
    }).then(() => addLikesListener());
};

export {
  fetchPokemons, displayLikes, SetPokemonCount, indexer,
};