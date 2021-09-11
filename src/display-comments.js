const displayComments = (pokemon) => {
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('comment-container');
  commentContainer.innerHTML = `
          <div class="" id="${pokemon.index}popUpContainer" tabindex="-1" aria-hidden="true">
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
                    <button type="button" class="btn-close fs-1 me-4" id="closePopUp"></button>
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

  document.body.appendChild(commentContainer);

  const closePopUp = document.getElementById('closePopUp');
  closePopUp.addEventListener('click', () => {
    document.body.removeChild(commentContainer);
  });

}

export default displayComments;