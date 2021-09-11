/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
/* eslint-disable no-return-await */

import { displayLikes } from './display-pokemon-list.js';

const recievedLikes = async () => await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/euJcQ410fgo2CbYVuqO8/likes/', {
  method: 'GET',
})
  .then((res) => res.json())
  .then((json) => displayLikes(json));

export default recievedLikes;