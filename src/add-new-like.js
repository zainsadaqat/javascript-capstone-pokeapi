/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
const addNewLike = async (itemId) => await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edd97Eq6uvObdGmWlx62/likes/', {
  method: 'POST',
  body: JSON.stringify({ item_id: itemId }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default addNewLike;
