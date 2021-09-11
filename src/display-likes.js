/* eslint-disable import/no-cycle */

import { displayLikes } from './display-pokemon-list.js';

const recievedLikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/euJcQ410fgo2CbYVuqO8/likes/', {
  method: 'GET',
})
  .then((res) => res.json())
  .then((json) => displayLikes(json));

export default recievedLikes;