/* eslint-disable no-return-await */
/*
API id edd97Eq6uvObdGmWlx62
*/

function RecievedLikes() {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edd97Eq6uvObdGmWlx62/likes/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

export default RecievedLikes;
