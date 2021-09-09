/* eslint-disable no-return-assign */
/* eslint-disable no-return-await */
/*
API id edd97Eq6uvObdGmWlx62
*/

import { displayLikes } from './display-pokemon-list.js';

const recievedLikes = async () => await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edd97Eq6uvObdGmWlx62/likes/', {
  method: 'GET',
})
  .then((res) => res.json())
  .then((json) => displayLikes(json));

export default recievedLikes;
