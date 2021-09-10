/* eslint-disable linebreak-style */
/* eslint-disable no-return-assign */
/* eslint-disable no-return-await */

import { displayLikes } from './display-pokemon-list.js';

const recievedLikes = async () => await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edd97Eq6uvObdGmWlx62/likes/', {
  method: 'GET',
})
  .then((res) => res.json())
  .then((json) => displayLikes(json));

export default recievedLikes;
